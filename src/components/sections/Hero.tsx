"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { company, homeCopy } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroReveal } from "@/components/ui/Motion";
import { duration, easeOut } from "@/lib/motion";
import {
  getTurkeySkyPhase,
  msUntilNextSkyChange,
  type SkyPhase,
} from "@/lib/turkey-sky";
import { cn } from "@/lib/utils";

function subscribeSky(onStoreChange: () => void) {
  let timer = 0;
  const schedule = () => {
    timer = window.setTimeout(() => {
      onStoreChange();
      schedule();
    }, msUntilNextSkyChange());
  };
  schedule();
  return () => window.clearTimeout(timer);
}

function getSkySnapshot(): SkyPhase {
  return getTurkeySkyPhase();
}

function getServerSkySnapshot(): SkyPhase {
  return "night";
}

export function Hero() {
  const reduce = useReducedMotion();
  const sky = useSyncExternalStore(subscribeSky, getSkySnapshot, getServerSkySnapshot);
  const isDay = sky === "day";

  return (
    <section
      className="relative isolate -mt-[var(--header-h)] min-h-[100svh] overflow-hidden border-b border-border-subtle bg-slate"
      data-sky={sky}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={sky}
        src={isDay ? "/images/hero-mountain-day.jpg" : "/images/hero-mountain-dusk.jpg"}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full min-h-full object-cover object-[72%_42%]"
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          isDay ? "hero-shade-day" : "hero-shade",
        )}
      />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pt-[calc(var(--header-h)+5.5rem)] pb-14 sm:pb-16 lg:justify-center lg:pt-[calc(var(--header-h)+4rem)] lg:pb-24">
        <div className="max-w-[38rem]">
          <HeroReveal delay={0.05}>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-accent">
              <span aria-hidden className="h-px w-8 bg-current" />
              {homeCopy.heroMeta}
            </p>
          </HeroReveal>
          <HeroReveal delay={0.12}>
            <h1 className="text-balance font-display text-[clamp(2.35rem,5.2vw,4.85rem)] leading-[1.02] font-semibold tracking-tight text-white">
              {homeCopy.heroTitle}
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.22}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              {homeCopy.heroSubtitle}
            </p>
          </HeroReveal>
          <HeroReveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ duration: duration.fast, ease: easeOut }}
              >
                <Button href="/iletisim" size="lg">
                  {homeCopy.ctaPrimary}
                </Button>
              </motion.div>
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ duration: duration.fast, ease: easeOut }}
              >
                <Button
                  href="/hizmetler"
                  variant="secondary"
                  size="lg"
                  className="border-white/40 bg-white/15 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/25"
                >
                  {homeCopy.ctaSecondary}
                </Button>
              </motion.div>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.4}>
            <a
              href={`tel:${company.phone.tel}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-white/80 transition hover:text-accent"
            >
              <span aria-hidden className="h-px w-6 bg-white/45" />
              {company.phone.display}
            </a>
          </HeroReveal>
        </div>
      </Container>
    </section>
  );
}
