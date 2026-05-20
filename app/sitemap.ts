import type { MetadataRoute } from "next";

const BASE = "https://www.cpconsultancyservice.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${BASE}/sectors`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${BASE}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
