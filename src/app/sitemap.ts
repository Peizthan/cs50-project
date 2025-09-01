import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/config"
import { PROPERTIES } from "@/data/properties"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/about` },
    { url: `${base}/vision` },
    { url: `${base}/propiedades` },
    { url: `${base}/contacto` },
  ]

  const propertyRoutes: MetadataRoute.Sitemap = PROPERTIES.map((p) => ({
    url: `${base}/propiedades/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...propertyRoutes]
}
