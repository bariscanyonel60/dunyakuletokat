"use client";

import { homeCopy, processSteps } from "@/content/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { motion, useReducedMotion } from "motion/react";

export function ProcessTimeline() {
  const reduce = useReducedMotion();

  return (
    <Section tone="process">
      <FadeIn>
        <SectionHeading
          index="02 — SÜREÇ"
          title={homeCopy.processTitle}
          subtitle={homeCopy.processSubtitle}
          onDark
        />
      </FadeIn>

      {/* Mobil: dikey akış */}
      <ol className="relative lg:hidden">
        <div
          aria-hidden
          className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-gradient-to-b from-accent via-sky to-accent/30"
        />
        <Stagger>
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <li className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-9 last:pb-0">
                <span className="relative z-10 mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-slate-deep font-mono text-xs text-accent shadow-[0_0_24px_rgba(245,158,11,0.25)]">
                  {step.step}
                </span>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted-on-dark">
                    {step.description}
                  </p>
                </div>
              </li>
            </StaggerItem>
          ))}
        </Stagger>
      </ol>

      {/* Masaüstü: yatay iş akışı */}
      <div className="relative hidden lg:block">
        <motion.div
          aria-hidden
          className="absolute top-[3.25rem] right-6 left-6 h-[2px] origin-left rounded-full bg-gradient-to-r from-accent via-sky to-accent/40"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        <ol className="relative grid grid-cols-5 gap-5">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={0.08 * i}>
              <li className="group relative flex flex-col pt-2">
                <div className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-accent/20 blur-md transition group-hover:bg-accent/35"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/55 bg-[#1a3148] font-mono text-sm text-accent shadow-[0_0_0_6px_rgba(26,49,72,0.9)]">
                    {step.step}
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 transition duration-300 group-hover:border-accent/35 group-hover:from-white/[0.1]">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-accent/80">
                    ADIM {step.step}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted-on-dark">
                    {step.description}
                  </p>
                </div>

                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 right-0 font-nav text-[4.5rem] font-semibold leading-none text-white/[0.04] select-none"
                >
                  {step.step}
                </span>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </Section>
  );
}
