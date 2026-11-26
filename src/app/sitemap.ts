import type { MetadataRoute } from "next";
import { services } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/projeler",
    "/kariyer",
    "/iletisim",
    "/kvkk",
    "/cerez-politikasi",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path || "/"),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/hizmetler/${service.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
