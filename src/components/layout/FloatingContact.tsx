"use client";

import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/content/site";

export function FloatingContact() {
  const whatsappReady = !company.whatsapp.includes("[");
  const waHref = whatsappReady
    ? `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`
    : `tel:${company.phone.tel}`;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${company.phone.tel}`}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-bg-elevated text-ink shadow-[0_10px_28px_-12px_rgba(30,53,80,0.55)] transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-strong"
        aria-label={`Telefon: ${company.phone.display}`}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waHref}
        target={whatsappReady ? "_blank" : undefined}
        rel={whatsappReady ? "noopener noreferrer" : undefined}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-slate-deep shadow-[0_10px_28px_-10px_rgba(245,158,11,0.7)] transition hover:-translate-y-0.5 hover:bg-accent-strong"
        aria-label={whatsappReady ? "WhatsApp ile yazın" : "Telefon ile arayın"}
        title={
          whatsappReady
            ? "WhatsApp"
            : "WhatsApp numarası henüz tanımlanmadı — telefon kullanılır"
        }
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
