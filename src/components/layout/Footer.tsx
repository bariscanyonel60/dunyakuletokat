import Link from "next/link";
import { Phone, RadioTower } from "lucide-react";
import { company, navigation, services } from "@/content/site";
import { Container } from "@/components/ui/Container";

/** Telif yılı — her yıl başında güncellenebilir. */
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-accent/30 bg-[linear-gradient(180deg,#1e3550_0%,#15283c_100%)] text-ink-on-dark">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-accent-soft text-accent">
              <RadioTower className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-display font-semibold">{company.brandName}</span>
          </div>
          <p className="text-sm leading-relaxed text-ink-muted-on-dark">{company.legalName}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted-on-dark">{company.address.full}</p>
          <a
            href={`tel:${company.phone.tel}`}
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-accent transition hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {company.phone.display}
          </a>
        </div>

        <div>
          <h2 className="mb-4 font-mono text-[11px] font-normal tracking-[0.16em] text-accent">
            MENÜ
          </h2>
          <ul className="space-y-2 text-sm text-ink-muted-on-dark">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-mono text-[11px] font-normal tracking-[0.16em] text-accent">
            HİZMETLER
          </h2>
          <ul className="space-y-2 text-sm text-ink-muted-on-dark">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/hizmetler/${service.slug}`} className="transition hover:text-white">
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-mono text-[11px] font-normal tracking-[0.16em] text-accent">
            YASAL
          </h2>
          <ul className="space-y-2 text-sm text-ink-muted-on-dark">
            <li>
              <Link href="/kvkk" className="transition hover:text-white">
                KVKK Aydınlatma Metni
              </Link>
            </li>
            <li>
              <Link href="/cerez-politikasi" className="transition hover:text-white">
                Çerez Politikası
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="transition hover:text-white">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-ink-muted-on-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COPYRIGHT_YEAR} {company.legalName}
          </p>
          <p className="font-mono tracking-wide">Telekom Altyapı · Tokat</p>
        </Container>
      </div>
    </footer>
  );
}
