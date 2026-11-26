import Image from "next/image";
import { homeCopy, serviceRegion, placeholderCopy } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/Motion";

export function RegionMap() {
  return (
    <Section tone="sky">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <FadeIn>
          <SectionHeading
            index="06 — BÖLGE"
            title={homeCopy.regionTitle}
            subtitle={homeCopy.regionSubtitle}
          />
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">{serviceRegion.note}</p>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-md border border-border-subtle bg-bg-elevated shadow-[0_20px_50px_-28px_rgba(30,53,80,0.35)]">
            <Image
              src="/images/hizmet-bolgesi.svg"
              alt={serviceRegion.mapAlt}
              width={640}
              height={320}
              className="block h-auto w-full"
            />
            <span className="absolute top-[18%] left-[63%] bg-accent px-2 py-0.5 font-mono text-xs font-semibold text-slate-deep sm:text-sm">
              {serviceRegion.hub}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[10px] tracking-wider text-ink-muted/80">
              {placeholderCopy.pending}
            </span>
            <ul className="flex flex-wrap gap-2">
              {serviceRegion.cities
                .filter((city) => city !== serviceRegion.hub)
                .map((city) => (
                  <li
                    key={city}
                    className="rounded-md border border-border-subtle bg-bg-elevated/80 px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {city.replace(/^\[(.*) — TODO\]$/, "$1")}
                  </li>
                ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
