/** Prefix public files so they work after `npm run build` on any host path. */
export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}
