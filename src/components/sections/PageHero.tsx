"use client";

import { Container } from "@/components/ui/Container";
import { HeroReveal } from "@/components/ui/Motion";
import { motion, useReducedMotion } from "motion/react";

export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border-subtle section-sky">
      <motion.div
        className="pointer-events-none absolute inset-0 tech-grid opacity-50"
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 right-[-4%] h-72 w-72 rounded-full bg-sky/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[10%] h-56 w-56 rounded-full bg-accent/12 blur-3xl"
      />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        {eyebrow ? (
          <HeroReveal delay={0.05}>
            <p className="mb-3 font-mono text-[11px] tracking-[0.14em] text-accent-strong">
              {eyebrow}
            </p>
          </HeroReveal>
        ) : null}
        <HeroReveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-[clamp(1.85rem,4vw,3.25rem)] font-semibold tracking-tight text-ink">
            {title}
          </h1>
        </HeroReveal>
        {subtitle ? (
          <HeroReveal delay={0.18}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {subtitle}
            </p>
          </HeroReveal>
        ) : null}
      </Container>
    </section>
  );
}
