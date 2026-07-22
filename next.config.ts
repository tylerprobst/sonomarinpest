import type { NextConfig } from "next";

/**
 * GitHub project pages serve at /sonomarinpest/ unless a custom domain is set.
 * Workflow sets GITHUB_PAGES=true so assets and links resolve correctly.
 * For a root custom domain (sonomarinpest.com), set GITHUB_PAGES=false or omit it.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/sonomarinpest" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  // Available at build time for assetPath() in components/metadata
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
