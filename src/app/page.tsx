import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyUs } from "@/components/sections/WhyUs";
import { IsgSection } from "@/components/sections/IsgSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { RegionMap } from "@/components/sections/RegionMap";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesGrid limit={8} />
      <ProcessTimeline />
      <WhyUs />
      <IsgSection />
      <ProjectsPreview />
      <RegionMap />
      <CtaBand />
    </>
  );
}
