"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { placeholderCopy, stats } from "@/content/site";
import { Container } from "@/components/ui/Container";

function AnimatedStatValue({ value, suffix }: { value: string; suffix: string }) {
  const reduce = useReducedMotion();
  const isNumeric = !Number.isNaN(Number(value));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [shown, setShown] = useState(isNumeric && !reduce ? "0" : value);

  useEffect(() => {
    if (!inView || !isNumeric || reduce) return;

    const target = Number(value);
    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(String(Math.round(target * eased)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, reduce, value]);

  return (
    <span ref={ref} className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
      {shown}
      <span className="text-accent-strong">{suffix}</span>
    </span>
  );
}

export function StatsBand() {
  return (
    <div className="relative border-b border-border-subtle bg-bg-elevated">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(91,143,191,0.1),transparent_40%,rgba(245,158,11,0.08))]"
      />
      <Container className="relative flex flex-col gap-6 py-7 sm:py-8 lg:flex-row lg:items-stretch lg:gap-0">
        <div className="flex shrink-0 flex-col justify-center border-border-subtle lg:w-44 lg:border-r lg:pr-8">
          <p className="font-mono text-[10px] tracking-[0.18em] text-accent-strong">SAHA VERİSİ</p>
          <p className="mt-1 text-xs leading-snug text-ink-muted">Operasyonel göstergeler</p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`border-border-subtle pl-0 sm:pl-5 lg:border-l lg:px-6 ${i === 0 ? "lg:border-l-0 lg:pl-8" : ""}`}
            >
              {stat.value === "XX" ? (
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-mono text-2xl tracking-tight text-ink-muted sm:text-3xl">
                    {stat.value}
                    <span className="text-accent/80">{stat.suffix}</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-ink-muted/70">
                    {placeholderCopy.pending}
                  </span>
                </div>
              ) : (
                <AnimatedStatValue value={stat.value} suffix={stat.suffix} />
              )}
              <p className="mt-1.5 text-xs text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
