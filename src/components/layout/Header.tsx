"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Phone, RadioTower } from "lucide-react";
import { company, navigation } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !onHome || scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow,color] duration-300",
        solid
          ? "border-b border-border-subtle bg-bg-elevated/90 text-ink shadow-[0_8px_30px_-18px_rgba(30,53,80,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white",
      )}
    >
      <Container
        className={cn(
          "grid grid-cols-[1fr_auto] items-center gap-4 transition-[height,opacity] duration-300 lg:grid-cols-[auto_1fr_auto]",
          scrolled ? "h-16" : "h-[var(--header-h)]",
          open && "pointer-events-none opacity-0",
        )}
      >
        <Link
          href="/"
          className="group relative z-[60] flex items-center gap-3"
          aria-label={`${company.brandName} ana sayfa`}
        >
          <span
            className={cn(
              "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border transition duration-300",
              solid
                ? "border-accent/35 bg-accent-soft text-accent-strong"
                : "border-white/30 bg-white/10 text-accent",
            )}
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.35),transparent_60%)]"
            />
            <RadioTower className="relative h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-nav text-[1.35rem] font-semibold tracking-[-0.03em] sm:text-[1.5rem]">
              Dünya
            </span>
            <span
              className={cn(
                "font-nav text-[0.7rem] font-medium tracking-[0.22em] uppercase",
                solid ? "text-accent-strong" : "text-accent",
              )}
            >
              Kule
            </span>
          </span>
        </Link>

        <nav
          className="hidden justify-center lg:flex"
          aria-label="Ana menü"
        >
          <ul
            className={cn(
              "flex items-center gap-1 rounded-full px-2 py-1.5",
              solid ? "bg-surface/80" : "bg-white/10 backdrop-blur-md",
            )}
          >
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-4 py-2 font-nav text-[0.95rem] font-medium tracking-[-0.02em] transition",
                      solid
                        ? active
                          ? "text-ink"
                          : "text-ink-muted hover:text-ink"
                        : active
                          ? "text-white"
                          : "text-white/70 hover:text-white",
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="nav-pill"
                        className={cn(
                          "absolute inset-0 rounded-full",
                          solid ? "bg-bg-elevated shadow-sm" : "bg-white/18",
                        )}
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 30 }
                        }
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phone.tel}`}
            className={cn(
              "inline-flex items-center gap-2 font-nav text-sm font-medium tracking-tight transition",
              solid ? "text-ink-muted hover:text-accent-strong" : "text-white/80 hover:text-accent",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden />
            {company.phone.display}
          </a>
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-nav text-[0.95rem] font-semibold tracking-tight text-slate-deep transition hover:bg-accent-strong"
          >
            Teklif Al
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
            solid ? "border-border-subtle bg-bg-elevated text-ink" : "border-white/35 bg-white/10 text-white",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Kapat" : "Menü"}</span>
          <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden>
            <motion.span
              className="block h-[2px] w-full origin-center rounded-full bg-current"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-full rounded-full bg-current"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-[2px] w-full origin-center rounded-full bg-current"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-50 flex flex-col bg-slate-deep text-ink-on-dark lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_-10%,rgba(245,158,11,0.22),transparent_55%),radial-gradient(700px_360px_at_10%_100%,rgba(91,143,191,0.2),transparent_50%)]"
            />

            <div className="relative flex h-[var(--header-h)] items-center justify-between px-4 sm:px-6">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setOpen(false)}
                aria-label={`${company.brandName} ana sayfa`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent-soft text-accent">
                  <RadioTower className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-nav text-xl font-semibold tracking-tight">Dünya Kule</span>
              </Link>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
                aria-label="Menüyü kapat"
                onClick={() => setOpen(false)}
              >
                <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden>
                  <span className="block h-[2px] w-full origin-center translate-y-[7px] rotate-45 rounded-full bg-current" />
                  <span className="block h-[2px] w-full origin-center -translate-y-[7px] -rotate-45 rounded-full bg-current" />
                </span>
              </button>
            </div>

            <nav
              className="relative flex flex-1 flex-col justify-center px-5 pb-8 sm:px-8"
              aria-label="Mobil menü"
            >
              <p className="mb-6 font-mono text-[11px] tracking-[0.22em] text-accent">MENÜ</p>
              <ul className="space-y-1">
                {navigation.map((item, i) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.045, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-baseline justify-between gap-4 border-b border-white/10 py-4 transition",
                          active ? "border-accent/50" : "hover:border-white/25",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-accent/80">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "font-nav text-[clamp(1.85rem,7vw,2.75rem)] font-semibold tracking-[-0.03em] leading-none",
                              active ? "text-accent" : "text-white",
                            )}
                          >
                            {item.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          className={cn(
                            "h-5 w-5 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                            active ? "text-accent" : "text-white/40",
                          )}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              className="relative space-y-4 border-t border-white/10 px-5 py-6 sm:px-8"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              <a
                href={`tel:${company.phone.tel}`}
                className="inline-flex items-center gap-2 font-nav text-base font-medium text-white/85"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {company.phone.display}
              </a>
              <Link
                href="/iletisim"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 font-nav text-base font-semibold text-slate-deep"
                onClick={() => setOpen(false)}
              >
                Teklif Al
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
