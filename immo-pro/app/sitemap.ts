import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/biens`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...properties.map((property) => ({
      url: `${siteConfig.baseUrl}/biens/${property.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${siteConfig.baseUrl}/politique-de-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];
}