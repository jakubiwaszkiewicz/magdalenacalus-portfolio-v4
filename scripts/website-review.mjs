import { mkdir } from "node:fs/promises"
import path from "node:path"
import { chromium } from "playwright"

const SITE_URL = process.argv[2] ?? process.env.SITE_URL ?? "http://localhost:5173"
const ROOT = path.resolve(import.meta.dirname, "..")

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
]

function runStamp(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0")
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}_${pad(date.getHours())}-${pad(date.getMinutes())}`
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
}

async function waitForPage(page) {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.evaluate(async () => {
    await document.fonts.ready
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    )
    for (let y = 0; y < scrollHeight; y += 600) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 80))
    }
    window.scrollTo(0, 0)
    await Promise.all(
      [...document.images].map((image) => {
        if (image.complete) return Promise.resolve()
        return new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true })
          image.addEventListener("error", resolve, { once: true })
        })
      }),
    )
  })
  await page.waitForTimeout(300)
}

async function captureViewport(page, outDir, viewport) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height })
  await waitForPage(page)

  await page.screenshot({
    path: path.join(outDir, `${viewport.name}-viewport.png`),
    fullPage: false,
  })
  await page.screenshot({
    path: path.join(outDir, `${viewport.name}-full.png`),
    fullPage: true,
  })
}

async function captureSections(page, outDir) {
  await page.setViewportSize({ width: 1440, height: 900 })
  await waitForPage(page)

  const sections = await page.evaluate(() => {
    const nodes = [
      document.querySelector("header"),
      ...document.querySelectorAll("main section"),
      document.querySelector("footer"),
    ].filter(Boolean)

    return nodes.map((node, index) => {
      const heading = node.querySelector("h1, h2, h3")?.textContent?.trim()
      const id =
        node.id ||
        node.getAttribute("aria-label") ||
        heading ||
        node.tagName.toLowerCase()
      return { index, id }
    })
  })

  for (const section of sections) {
    const locator = page.locator("header, main section, footer").nth(section.index)
    const name = slugify(section.id) || `section-${section.index + 1}`
    await locator.screenshot({
      path: path.join(outDir, `section-${String(section.index + 1).padStart(2, "0")}-${name}.png`),
    })
  }
}

async function main() {
  const outDir = path.join(ROOT, "website-review", runStamp())
  await mkdir(outDir, { recursive: true })

  const browser = await chromium.launch()
  const page = await browser.newPage()

  const response = await page.goto(SITE_URL, { waitUntil: "networkidle", timeout: 60_000 })
  if (!response?.ok() && response?.status() !== 304) {
    throw new Error(`Failed to open ${SITE_URL} (${response?.status() ?? "no response"})`)
  }

  for (const viewport of VIEWPORTS) {
    await captureViewport(page, outDir, viewport)
  }
  await captureSections(page, outDir)

  await browser.close()
  console.log(`Saved screenshots to ${path.relative(ROOT, outDir)}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
