import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const lastContentUpdate = new Date("2026-06-29");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rohan-on-web.vercel.app",
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
