import type { Metadata } from "next";
import { company, seoDefaults } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = seoDefaults.description,
  path = "/",
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const fullTitle = title
    ? seoDefaults.titleTemplate.replace("%s", title)
    : seoDefaults.defaultTitle;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    keywords: [...seoDefaults.keywords],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: company.brandName,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
