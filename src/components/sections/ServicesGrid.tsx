import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeCopy, services } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <Section tone="sky" id="hizmetler">
      <FadeIn>
        <SectionHeading
          index="01 — HİZMETLER"
          title={homeCopy.servicesTitle}
          subtitle={homeCopy.servicesSubtitle}
        />
      </FadeIn>
      <Stagger className="border-t border-border-subtle" fast>
        {items.map((service, i) => (
          <StaggerItem key={service.slug}>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="group grid gap-3 border-b border-border-subtle py-6 transition-colors hover:bg-white/55 sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline sm:gap-6 sm:py-7"
            >
              <span className="font-mono text-xs text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight transition group-hover:text-accent-strong sm:text-xl">
                  {service.shortTitle}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {service.summary}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 self-start text-sm text-ink-muted transition group-hover:text-accent-strong sm:self-center">
                {homeCopy.serviceDetails}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
      {limit ? (
        <FadeIn delay={0.12} className="mt-8">
          <Button href="/hizmetler" variant="secondary">
            {homeCopy.servicesAll}
          </Button>
        </FadeIn>
      ) : null}
    </Section>
  );
}
