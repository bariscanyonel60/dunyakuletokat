import { homeCopy } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projeler",
  description: homeCopy.projectsSubtitle,
  path: "/projeler",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projeler"
        title="Saha referansları"
        subtitle="Kategoriye göre filtrelenebilir yer tutucu galeri. Gerçek proje bilgileri ve görseller içerik dosyasından güncellenir."
      />
      <Section tone="sky">
        <ProjectsGallery />
      </Section>
      <CtaBand />
    </>
  );
}
