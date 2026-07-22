import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { blogPosts } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "about-us/",
    "services/",
    "contact/",
    "careers/",
    "blog/",
  ].map((p) => ({
    url: `${site.url}/${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}${s.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: s.featured ? 0.9 : 0.7,
  }));

  const locationPages = locations.map((l) => ({
    url: `${site.url}${l.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: l.priority ? 0.85 : 0.65,
  }));

  const blog = blogPosts.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blog];
}
