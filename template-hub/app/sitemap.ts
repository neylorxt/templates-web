import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { templates } from "@/data/templates";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/templates`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...templates.map((template) => ({
      url: `${siteConfig.baseUrl}/templates/${template.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.baseUrl}/comment-ca-marche`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${siteConfig.baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteConfig.baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];
}