import { homeCopy, projects } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function ProjectsPreview() {
  const [featured, ...secondary] = projects.slice(0, 3);

  return (
    <Section tone="stone">
      <div className="flex flex-wrap items-start justify-between gap-x-8">
        <SectionHeading
          index="05 — SAHA"
          title={homeCopy.projectsTitle}
          subtitle={homeCopy.projectsSubtitle}
          light
        />
        <Button href="/projeler" variant="light" className="mb-8 lg:mt-1">
          {homeCopy.projectsAll}
        </Button>
      </div>
      <div className="grid gap-x-7 gap-y-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <FadeIn className="sm:col-span-2 lg:col-span-1">
          <ProjectCard project={featured} light featured />
        </FadeIn>
        {secondary.map((project) => (
          <FadeIn key={project.id}>
            <ProjectCard project={project} light />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
