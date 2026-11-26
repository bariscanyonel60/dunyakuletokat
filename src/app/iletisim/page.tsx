import { Clock, MapPin, Phone } from "lucide-react";
import { company } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "İletişim",
  description: `Dünya Kule iletişim: ${company.phone.display}, ${company.address.city}. Teklif ve keşif talepleri için formu doldurun.`,
  path: "/iletisim",
});

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${company.mapsEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Teklif ve saha talepleri"
        subtitle="Formu doldurun veya doğrudan arayın. Tokat merkez ofisimize bekleriz."
      />

      <Section tone="sky">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">
              OFİS · TOKAT
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              İletişim bilgileri
            </h2>

            <ul className="mt-8 space-y-0 border-t border-border-subtle">
              <li className="flex gap-4 border-b border-border-subtle py-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" aria-hidden />
                <span className="text-sm leading-relaxed text-ink-muted">{company.address.full}</span>
              </li>
              <li className="flex gap-4 border-b border-border-subtle py-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" aria-hidden />
                <a
                  href={`tel:${company.phone.tel}`}
                  className="font-mono text-sm text-accent-strong transition hover:text-ink"
                >
                  {company.phone.display}
                </a>
              </li>
              <li className="flex gap-4 py-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" aria-hidden />
                <div className="text-sm leading-relaxed text-ink-muted">
                  <p>{company.workingHours.weekdays}</p>
                  <p>{company.workingHours.saturday}</p>
                  <p>{company.workingHours.sunday}</p>
                  <p className="mt-2 text-xs text-ink-muted/80">{company.workingHours.note}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-md border border-border-subtle bg-bg-elevated shadow-[0_18px_40px_-28px_rgba(30,53,80,0.4)]">
              <iframe
                title="Dünya Kule ofis konumu"
                src={mapSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-md border border-border-subtle bg-bg-elevated p-6 shadow-[0_18px_40px_-28px_rgba(30,53,80,0.28)] sm:p-8">
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent-strong">FORM</p>
            <h2 className="mt-2 font-display text-xl font-semibold">İletişim formu</h2>
            <p className="mt-2 mb-6 text-sm text-ink-muted">
              Talebinizi kısaca yazın; dönüş yapalım.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
