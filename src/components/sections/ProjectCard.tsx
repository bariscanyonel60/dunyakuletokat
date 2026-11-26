import Image from "next/image";
import { placeholderCopy, projectCategories, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  light = false,
  featured = false,
}: {
  project: Project;
  light?: boolean;
  featured?: boolean;
}) {
  const Heading = light ? "h3" : "h2";
  const pending = project.year === "[YYYY]" || project.location.includes("TODO");
  const category = projectCategories.find(({ id }) => id === project.category)?.label;

  return (
    <article
      className={cn(
        "overflow-hidden border-t",
        light ? "border-black/12" : "border-border-subtle",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden bg-surface",
          featured && "lg:aspect-[16/9]",
        )}
      >
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition duration-500 hover:scale-[1.03]"
          sizes={
            featured
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
          }
        />
      </div>
      <div className="py-5">
        <p className={cn("font-mono text-xs", light ? "text-ink-dark-muted" : "text-ink-muted")}>
          {category}
        </p>
        <Heading
          className={cn("mt-2 font-display text-xl font-semibold", featured && "lg:text-3xl")}
        >
          {project.title.replace(/ — \[Bölge\]$/, "")}
        </Heading>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            light ? "text-ink-dark-muted" : "text-ink-muted",
          )}
        >
          {project.summary.replace(/\s*\[Detay — TODO\]$/, "")}
        </p>
        <div
          className={cn(
            "mt-4 flex flex-wrap gap-2 font-mono text-xs",
            light ? "text-ink-dark-muted" : "text-ink-muted",
          )}
        >
          {pending && (
            <span className="rounded border border-current/25 px-2 py-1">
              {placeholderCopy.project}
            </span>
          )}
          <span className="py-1">
            {project.location.replace(/^\[(.*) — TODO\]$/, "$1")} · {project.year}
          </span>
        </div>
      </div>
    </article>
  );
}
