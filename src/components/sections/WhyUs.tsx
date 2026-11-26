import { homeCopy, whyUs } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";

export function WhyUs() {
  return (
    <Section
      tone="mist"
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"
    >
      <FadeIn>
        <SectionHeading
          index="03 — FARK"
          title={homeCopy.whyTitle}
          subtitle={homeCopy.whySubtitle}
        />
      </FadeIn>
      <Stagger className="grid gap-0 sm:grid-cols-2 sm:gap-x-10">
        {whyUs.map((item) => (
          <StaggerItem key={item.title}>
            <article className="border-t border-border-subtle py-6">
              <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
