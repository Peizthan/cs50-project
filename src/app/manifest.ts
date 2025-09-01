import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KOSVAS",
    short_name: "KOSVAS",
    start_url: "/",
    display: "standalone",
    background_color: "#F5E4D6",
    theme_color: "#382C1E",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    scope: "/",
    id: `${SITE_URL}/`,
  }
}
