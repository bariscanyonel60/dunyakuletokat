import { homeCopy, services } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hizmetler",
  description: homeCopy.servicesSubtitle,
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Telekom altyapı saha hizmetleri"
        subtitle={`${services.length} ana hizmet alanında keşiften bakıma uçtan uca saha desteği.`}
      />
      <ServicesGrid />
      <CtaBand />
    </>
  );
}
