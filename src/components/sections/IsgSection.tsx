import { HardHat, ShieldCheck, GraduationCap } from "lucide-react";
import { homeCopy, isg, placeholderCopy } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

const icons = [HardHat, ShieldCheck, GraduationCap];

export function IsgSection() {
  return (
    <Section tone="elevated">
      <FadeIn>
        <SectionHeading index="04 — İSG" title={isg.title} subtitle={isg.intro} />
      </FadeIn>

      <div className="overflow-hidden rounded-md border border-border-subtle bg-[linear-gradient(160deg,#ffffff,rgba(91,143,191,0.08))]">
        <Stagger className="grid divide-y divide-border-subtle lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {isg.points.map((point, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <StaggerItem key={point.title}>
                <article className="h-full p-6 sm:p-7">
                  <Icon className="mb-4 h-5 w-5 text-accent-strong" aria-hidden />
                  <h3 className="font-display text-lg font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {point.description.replace(/\s*\[([^\]]+) — TODO\]/, " ($1)")}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      <FadeIn delay={0.1} className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">
            {homeCopy.certificatesLabel} · {placeholderCopy.pending}
          </p>
          <ul className="flex flex-wrap gap-2">
            {isg.certificates.map((cert) => (
              <li
                key={cert.replace(/^\[(.*) — TODO\]$/, "$1")}
                className="rounded-md border border-border-subtle bg-surface px-3 py-1.5 font-mono text-xs text-ink-muted"
              >
                {cert.replace(/^\[(.*) — TODO\]$/, "$1")}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </Section>
  );
}
