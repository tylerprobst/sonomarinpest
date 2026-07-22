/**
 * Prefix public asset paths with Next.js basePath (e.g. /sonomarinpest on GitHub Pages).
 * next/image + unoptimized does not always apply basePath to /public files.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path || path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base) return normalized;
  if (normalized === base || normalized.startsWith(`${base}/`)) {
    return normalized;
  }
  return `${base}${normalized}`;
}
