/**
 * Prefix public asset paths with Next.js basePath (e.g. /sonomarinpest on GitHub Pages).
 * next/image + unoptimized does not always apply basePath to /public files.
 *
 * Use withBasePath() for raw <a href> and window.location only.
 * Do NOT prefix paths passed to next/link — Next.js already applies basePath once.
 */
export function assetPath(path: string): string {
  return withBasePath(path);
}

/** Apply GitHub Pages basePath once. Safe to call on already-prefixed paths. */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path || path.startsWith("http") || path.startsWith("data:") || path.startsWith("tel:") || path.startsWith("sms:") || path.startsWith("mailto:")) {
    return path;
  }
  if (path.startsWith("#")) {
    return path;
  }
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (!base) return `${normalized}${hash}`;
  if (normalized === base || normalized.startsWith(`${base}/`)) {
    return `${normalized}${hash}`;
  }
  return `${base}${normalized}${hash}`;
}

/** Fallback when the current page has no #estimate form (careers, blog, etc.). */
export const ESTIMATE_FALLBACK_HREF = "/contact/#estimate";
