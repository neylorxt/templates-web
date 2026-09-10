import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { courses } from "@/data/courses";

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
      url: `${siteConfig.baseUrl}/formations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...courses.map(
      (course) =>
        ({
          url: `${siteConfig.baseUrl}/formations/${course.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.8,
        }) as const
    ),
    {
      url: `${siteConfig.baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteConfig.baseUrl}/politique-de-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}