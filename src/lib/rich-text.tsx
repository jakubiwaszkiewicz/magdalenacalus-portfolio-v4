const ALLOWED = new Set(["STRONG", "B", "EM", "I", "U", "BR", "A", "MARK"])
const DROP = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "LINK"])

function isSafeHref(href: string) {
  return /^(https?:|mailto:|#|\/)/i.test(href)
}

function cleanAttributes(element: Element) {
  if (element.tagName === "A") {
    const href = element.getAttribute("href") ?? ""
    for (const name of element.getAttributeNames()) {
      element.removeAttribute(name)
    }
    if (isSafeHref(href)) {
      element.setAttribute("href", href)
      if (!href.startsWith("#") && !href.startsWith("/")) {
        element.setAttribute("target", "_blank")
        element.setAttribute("rel", "noopener noreferrer")
      }
    }
    return
  }

  for (const name of element.getAttributeNames()) {
    element.removeAttribute(name)
  }
}

export function sanitizeInlineHtml(html: string) {
  if (typeof DOMParser === "undefined") {
    return html
  }

  const document = new DOMParser().parseFromString(
    `<div>${html}</div>`,
    "text/html"
  )
  const root = document.body.firstElementChild
  if (!root) {
    return ""
  }

  const walk = (parent: Element) => {
    for (const child of [...parent.children]) {
      if (DROP.has(child.tagName)) {
        child.remove()
        continue
      }

      walk(child)

      if (!ALLOWED.has(child.tagName)) {
        child.replaceWith(...child.childNodes)
        continue
      }

      cleanAttributes(child)
    }
  }

  walk(root)
  return root.innerHTML
}

export function RichText({ html }: { html: string }) {
  return (
    <span
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: sanitizeInlineHtml(html) }}
    />
  )
}
