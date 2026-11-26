"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { homeCopy, projectCategories, projects, type ProjectCategory } from "@/content/site";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";
import { duration, easeOut } from "@/lib/motion";

export function ProjectsGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const reduce = useReducedMotion();
  const filtered =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label={homeCopy.projectCategoriesLabel}
      >
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={filter === cat.id}
            onClick={() => setFilter(cat.id)}
            className={cn(
              "rounded-md border px-3.5 py-2 text-sm transition",
              filter === cat.id
                ? "border-accent/50 bg-accent-soft text-accent-strong"
                : "border-border-subtle bg-bg-elevated/60 text-ink-muted hover:border-accent/30 hover:text-ink",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: duration.base, ease: easeOut }}
            >
              <ProjectCard project={project} light />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
