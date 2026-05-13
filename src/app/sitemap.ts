import type { MetadataRoute } from "next";
import { clinic, navigation } from "@/data/clinic";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...navigation.map((item) => item.href),
    "/booking",
    "/privacy",
    "/terms",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const now = new Date();

  return [...new Set([...staticRoutes, ...serviceRoutes])].map((route) => ({
    url: `${clinic.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
