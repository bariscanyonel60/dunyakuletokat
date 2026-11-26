"use client";

import { company, homeCopy } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion, useReducedMotion } from "motion/react";
import { duration, easeOut } from "@/lib/motion";

export function CtaBand() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-y border-accent/25">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-mountain-dusk.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgb(21_40_60/88%)_0%,rgb(30_53_80/72%)_48%,rgb(245_158_11/35%)_100%)]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <motion.div
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: duration.slow, ease: easeOut }}
        >
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-[11px] tracking-[0.18em] text-accent">SAHA DESTEĞİ</p>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-balance text-white">
              {homeCopy.ctaBandTitle}
            </h2>
            <p className="mt-3 max-w-md text-white/75">{homeCopy.ctaBandSubtitle}</p>
            <a
              href={`tel:${company.phone.tel}`}
              className="mt-5 inline-block font-mono text-sm text-accent transition hover:text-white"
            >
              {company.phone.display}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/iletisim" size="lg">
              Teklif Al
            </Button>
            <Button
              href="/hizmetler"
              variant="secondary"
              size="lg"
              className="border-white/35 bg-white/10 text-white hover:border-white/55 hover:bg-white/18"
            >
              Hizmetler
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
