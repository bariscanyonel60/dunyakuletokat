import { company, services, type Service } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: company.brandName,
    legalName: company.legalName,
    description: company.activity,
    url: company.siteUrl,
    telephone: company.phone.tel,
    email: company.email.includes("@ornek") ? undefined : company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: "Tokat Merkez",
      addressRegion: "Tokat",
      postalCode: company.address.postalCode,
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Tokat",
    },
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: company.brandName,
    },
    areaServed: "TR",
    url: absoluteUrl(`/hizmetler/${service.slug}`),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function allServicesJsonLd() {
  return services.map((service) => serviceJsonLd(service));
}
