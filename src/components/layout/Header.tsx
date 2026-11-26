"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, Phone, RadioTower, X } from "lucide-react";
import { company, navigation } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        "sticky top-0 z-50 border-b transition-[height,background-color,border-color,backdrop-filter,color] duration-300",
        solid
          ? "border-border-subtle bg-bg-elevated/95 text-ink shadow-[0_1px_0_rgba(30,53,80,0.06)] backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-black/55 via-black/25 to-transparent text-white",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-14" : "h-[var(--header-h)]",
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${company.brandName} ana sayfa`}
        >
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md border transition",
              solid
                ? "border-accent/40 bg-accent-soft text-accent"
                : "border-white/35 bg-white/10 text-accent",
            )}
          >
            <RadioTower className="h-4 w-4" aria-hidden />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            {company.brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition",
                solid
                  ? "text-ink-muted hover:text-ink"
                  : "text-white/80 hover:bg-white/10 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${company.phone.tel}`}
            className={cn(
              "ml-2 inline-flex items-center gap-1.5 rounded-md px-3 py-2 font-mono text-xs transition",
              solid ? "text-ink-muted hover:text-accent" : "text-white/75 hover:text-accent",
            )}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {company.phone.display}
          </a>
          <Button href="/iletisim" size="sm" className="ml-2">
            Teklif Al
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden",
            solid ? "border-border-subtle text-ink" : "border-white/35 text-white",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 top-[var(--header-h)] z-40 bg-bg-elevated text-ink lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex h-full flex-col gap-1 px-4 py-6" aria-label="Mobil menü">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-md border border-transparent px-4 py-3 font-display text-2xl transition hover:border-border-subtle hover:bg-surface"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 space-y-3 px-4">
                <a
                  href={`tel:${company.phone.tel}`}
                  className="flex items-center gap-2 font-mono text-sm text-accent-strong"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {company.phone.display}
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-slate-deep"
                  onClick={() => setOpen(false)}
                >
                  Teklif Al
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
