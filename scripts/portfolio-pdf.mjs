import { spawnSync } from "node:child_process"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { pathToFileURL } from "node:url"

import { chromium } from "playwright"

const root = path.resolve(import.meta.dirname, "..")
const publicDir = path.join(root, "public")
const outDir = path.join(root, "portfolio-pdf")
const outFile = path.join(outDir, "magdalena-calus-portfolio.pdf")
const scratch = mkdtempSync(path.join(tmpdir(), "portfolio-pdf-"))

const loaded = spawnSync(
  process.execPath,
  [
    "--experimental-strip-types",
    "--input-type=module",
    "-e",
    `import { projects, site, subcategoryLabels } from ${JSON.stringify(path.join(root, "src/data/content.ts"))};
     process.stdout.write(JSON.stringify({ projects, site, subcategoryLabels }));`,
  ],
  { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 },
)

if (loaded.status !== 0) {
  console.error(loaded.stderr)
  process.exit(loaded.status ?? 1)
}

const { projects, site, subcategoryLabels } = JSON.parse(loaded.stdout)

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function plain(html) {
  return esc(
    html
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replaceAll("&amp;", "&")
      .replaceAll("&nbsp;", " ")
      .replaceAll("&quot;", '"')
      .replaceAll("&#39;", "'"),
  )
}

function imagesFor(project) {
  const seen = new Set()
  const images = []
  let index = 0
  for (const src of [project.cover, ...project.gallery]) {
    if (src.toLowerCase().endsWith(".mp4") || seen.has(src)) continue
    seen.add(src)
    const file = path.join(publicDir, src.replace(/^\//, ""))
    const fitted = path.join(scratch, `${project.slug}-${index}.jpg`)
    index += 1
    const converted = spawnSync(
      "magick",
      [file, "-resize", "1400x1400>", "-quality", "74", fitted],
      { encoding: "utf8" },
    )
    if (converted.status !== 0) {
      console.error(converted.stderr)
      process.exit(converted.status ?? 1)
    }
    images.push(pathToFileURL(fitted).href)
  }
  return images
}

const projectsHtml = projects
  .map((project) => {
    const meta = [
      subcategoryLabels[project.subcategory],
      project.type,
      project.location,
      project.year,
    ]
      .filter(Boolean)
      .join(" · ")
    const copy = project.description.map((paragraph) => `<p>${plain(paragraph)}</p>`).join("")
    const figures = imagesFor(project)
      .map((src) => `<figure class="figure"><img src="${src}" alt=""></figure>`)
      .join("")
    return `<section class="project">
      <p class="kicker">${esc(project.category)}</p>
      <h2>${esc(project.title)}</h2>
      <div class="rule"></div>
      ${meta ? `<p class="sub">${esc(meta)}</p>` : ""}
      ${copy}
      ${figures}
    </section>`
  })
  .join("\n")

const contact = [site.email, site.phone, site.location].filter(Boolean).join("  ·  ")

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${esc(site.name)} — Portfolio</title>
  <style>
    @font-face {
      font-family: "Agency FB";
      src: url("${pathToFileURL(path.join(publicDir, "fonts/AGENCYB.woff")).href}") format("woff");
      font-weight: 700;
      font-style: normal;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #1c1c1c;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 11px;
      line-height: 1.45;
    }
    h1, h2, .kicker {
      font-family: "Agency FB", "Helvetica Neue", sans-serif;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .cover {
      min-height: 250mm;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      break-after: page;
    }
    .kicker { margin: 0 0 8px; color: #bd262a; font-size: 16px; }
    h1 { margin: 0; color: #bd262a; font-size: 72px; line-height: 0.9; }
    .role { margin: 14px 0 0; font-size: 16px; }
    .status { margin: 6px 0 0; max-width: 130mm; color: #444; }
    .contact { margin: 18px 0 0; font-size: 12px; }
    .rule { height: 1px; margin: 8px 0 10px; background: #1c1c1c; }
    .project { margin: 0 0 8mm; }
    .project h2 { margin: 0; color: #bd262a; font-size: 32px; line-height: 0.95; break-after: avoid; }
    .sub { margin: 0 0 8px; color: #555; }
    p { margin: 0 0 6px; }
    .figure { margin: 0 0 4mm; break-inside: avoid; }
    .figure img { display: block; width: 100%; max-height: 115mm; object-fit: contain; object-position: left top; }
  </style>
</head>
<body>
  <section class="cover">
    <p class="kicker">${esc(site.role)}</p>
    <h1>${esc(site.name)}</h1>
    <div class="rule"></div>
    <p class="status">${esc(site.status)}</p>
    <p class="contact">${esc(contact)}</p>
  </section>
  ${projectsHtml}
</body>
</html>`

mkdirSync(outDir, { recursive: true })
const htmlFile = path.join(scratch, "preview.html")
writeFileSync(htmlFile, html)

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(pathToFileURL(htmlFile).href, { waitUntil: "networkidle" })
await page.pdf({
  path: outFile,
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: "<span></span>",
  footerTemplate:
    '<div style="width:100%; font-size:9px; font-family:Helvetica,sans-serif; color:#888; padding:0 14mm;"><span>Magdalena Całus</span><span style="float:right"><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
  margin: { top: "12mm", right: "14mm", bottom: "16mm", left: "14mm" },
})
await browser.close()
rmSync(scratch, { recursive: true, force: true })
console.log(outFile)
