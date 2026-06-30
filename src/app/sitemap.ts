import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { vehicles } from "@/data/vehicles";
import { news } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/vehicles",
    "/services",
    "/financing",
    "/promotions",
    "/news",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const vehicleRoutes = vehicles.map((v) => ({
    url: `${base}/vehicles/${v.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const newsRoutes = news.map((n) => ({
    url: `${base}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...vehicleRoutes, ...newsRoutes];
}
