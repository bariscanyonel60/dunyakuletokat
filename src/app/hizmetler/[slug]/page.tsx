import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, services } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaBand } from "@/components/sections/CtaBand";
import { faqJsonLd, serviceJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <PageHero eyebrow="Hizmet" title={service.title} subtitle={service.description} />

      <Section tone="sky">
        <div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-md border border-border-subtle bg-accent-soft text-accent-strong">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">KAPSAM</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Neler yapıyoruz</h2>
            <ul className="mt-5 space-y-0 border-t border-border-subtle">
              {service.scope.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-border-subtle py-3.5 text-sm text-ink-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">SÜREÇ</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Nasıl ilerler</h2>
            <ol className="mt-5 space-y-0 border-t border-border-subtle">
              {service.process.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[3rem_1fr] gap-3 border-b border-border-subtle py-3.5 text-sm text-ink-muted"
                >
                  <span className="font-mono text-xs text-accent-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14">
          <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">YAKLAŞIM</p>
          <h2 className="mt-2 font-display text-2xl font-semibold">Ekipman ve saha disiplini</h2>
          <ul className="mt-6 grid gap-0 sm:grid-cols-3 sm:gap-x-8">
            {service.approach.map((item, i) => (
              <li key={item} className="border-t border-border-subtle py-5">
                <span className="font-mono text-[11px] text-accent-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">SSS</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink-dark">
          Sıkça sorulan sorular
        </h2>
        <div className="mt-8 space-y-0 border-t border-black/10">
          {service.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-black/10 py-5 open:pb-6"
            >
              <summary className="cursor-pointer list-none font-medium text-ink-dark marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    aria-hidden
                    className="mt-0.5 font-mono text-xs text-accent-strong transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dark-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">TEKLİF</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Bu hizmet için teklif alın</h2>
            <p className="mt-2 max-w-md text-ink-muted">
              Kısa bir brief yeterli; saha koşullarına göre planlayalım.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/iletisim">Teklif Al</Button>
            <Button href="/hizmetler" variant="secondary">
              Tüm hizmetler
            </Button>
          </div>
        </div>
        <p className="mt-10 border-t border-border-subtle pt-6 text-sm text-ink-muted">
          Diğer hizmetler:{" "}
          {related.map((s, i) => (
            <span key={s.slug}>
              {i > 0 ? " · " : ""}
              <Link
                href={`/hizmetler/${s.slug}`}
                className="text-accent-strong underline-offset-2 hover:underline"
              >
                {s.shortTitle}
              </Link>
            </span>
          ))}
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
