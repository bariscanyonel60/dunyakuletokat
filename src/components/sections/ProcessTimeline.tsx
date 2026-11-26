"use client";

import { homeCopy, processSteps } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function ProcessTimeline() {
  return (
    <Section tone="stone">
      <FadeIn>
        <SectionHeading
          index="02 — SÜREÇ"
          title={homeCopy.processTitle}
          subtitle={homeCopy.processSubtitle}
          light
        />
      </FadeIn>

      <ol className="relative space-y-0 border-l border-[color-mix(in_srgb,var(--accent)_45%,transparent)] pl-6 lg:hidden">
        <Stagger>
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <li className="relative pb-8 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-[#f5f1ea]"
                />
                <p className="font-mono text-[11px] tracking-wider text-accent-strong">
                  {step.step}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink-dark">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-dark-muted">
                  {step.description}
                </p>
              </li>
            </StaggerItem>
          ))}
        </Stagger>
      </ol>

      <ol className="relative hidden lg:grid lg:grid-cols-5 lg:gap-5">
        <div
          aria-hidden
          className="absolute top-4 right-4 left-0 h-px bg-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
        />
        {processSteps.map((step, i) => (
          <FadeIn key={step.step} delay={0.06 * i}>
            <li className="relative pt-10">
              <span
                aria-hidden
                className="absolute top-2.5 left-0 h-3 w-3 rounded-full border-2 border-accent bg-[#f5f1ea]"
              />
              <p className="font-mono text-[11px] tracking-wider text-accent-strong">{step.step}</p>
              <h3 className="mt-2 font-display text-base font-semibold text-ink-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dark-muted">{step.description}</p>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
