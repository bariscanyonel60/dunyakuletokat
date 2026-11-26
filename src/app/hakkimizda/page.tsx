import Image from "next/image";
import { about, company } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hakkımızda",
  description: `${company.brandName}: Tokat merkezli telekomünikasyon altyapı firması. Misyon, vizyon ve çalışma değerlerimiz.`,
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={company.brandName}
        subtitle={company.activity}
      />

      <Section tone="sky">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <SectionHeading
              index="01 — FİRMA"
              title="Firma hikâyesi"
              subtitle="Tokat merkezli, saha odaklı bir telekom altyapı ekibi."
            />
            <div className="max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
              {about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border-subtle shadow-[0_24px_60px_-32px_rgba(30,53,80,0.45)]">
            <Image
              src="/images/hero-mountain-day.jpg"
              alt="Dağlık arazide baz istasyonu sahası"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority={false}
            />
          </div>
        </div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">MİSYON</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink-dark">Ne için varız</h2>
            <p className="mt-3 text-ink-dark-muted leading-relaxed">{about.mission}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">VİZYON</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink-dark">Nereye gidiyoruz</h2>
            <p className="mt-3 text-ink-dark-muted leading-relaxed">{about.vision}</p>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          index="02 — İLKELER"
          title="Değerlerimiz"
          subtitle="Sahada nasıl çalıştığımızı belirleyen ilkeler."
        />
        <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-12">
          {about.values.map((value, i) => (
            <article key={value.title} className="border-t border-border-subtle py-6">
              <p className="font-mono text-[11px] text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 border-t border-border-subtle pt-8">
          <h3 className="font-display text-xl font-semibold">Ekip yaklaşımı</h3>
          <p className="mt-3 max-w-3xl text-ink-muted leading-relaxed">{about.teamApproach}</p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
