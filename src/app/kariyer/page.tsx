import { jobs } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CareerForm } from "@/components/forms/CareerForm";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kariyer",
  description: "Dünya Kule saha ekibine katılın. Açık pozisyonlar ve başvuru formu.",
  path: "/kariyer",
});

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Kariyer"
        title="Sahada birlikte çalışalım"
        subtitle="Açık pozisyonlar yer tutucudur. Gerçek ilanlar içerik dosyasından güncellenir."
      />

      <Section tone="sky">
        <SectionHeading
          index="01 — İLANLAR"
          title="Açık pozisyonlar"
          subtitle="Saha disiplini ve İSG bilinciyle çalışan ekip arkadaşları arıyoruz."
        />
        <div className="border-t border-border-subtle">
          {jobs.map((job, i) => (
            <article
              key={job.id}
              className="grid gap-3 border-b border-border-subtle py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
            >
              <p className="font-mono text-xs text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-display text-xl font-semibold tracking-tight">{job.title}</h2>
                  <span className="font-mono text-[11px] text-ink-muted">{job.type}</span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{job.location}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-muted">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist" id="basvuru">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <SectionHeading
            index="02 — BAŞVURU"
            title="Başvuru formu"
            subtitle="CV’nizi yükleyin; uygunluk durumunda sizinle iletişime geçelim."
          />
          <div className="rounded-md border border-border-subtle bg-bg-elevated p-6 shadow-[0_18px_40px_-28px_rgba(30,53,80,0.28)] sm:p-8">
            <CareerForm />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
