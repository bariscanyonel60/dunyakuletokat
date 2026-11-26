"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const KEY = "dk-cookie-consent";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot() {
  return localStorage.getItem(KEY);
}

function getServerSnapshot() {
  return "pending";
}

export function CookieBanner() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = stored === null;

  const choose = useCallback((value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
      window.dispatchEvent(new Event("storage"));
    } catch {
      /* ignore */
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez onayı"
      className="fixed inset-x-3 bottom-3 z-50 rounded-md border border-border-subtle bg-bg-elevated/95 p-4 shadow-[0_16px_48px_-20px_rgba(30,53,80,0.45)] backdrop-blur-md sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md sm:p-5"
    >
      <p className="text-sm leading-relaxed text-ink-muted">
        Bu site, temel işlevler için gerekli çerezler kullanabilir. Tercihinizi kaydedebilirsiniz.
        Ayrıntılar için{" "}
        <Link
          href="/cerez-politikasi"
          className="text-accent-strong underline-offset-2 hover:underline"
        >
          Çerez Politikası
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <Button variant="secondary" size="sm" type="button" onClick={() => choose("rejected")}>
          Reddet
        </Button>
        <Button size="sm" type="button" onClick={() => choose("accepted")}>
          Kabul Et
        </Button>
      </div>
    </div>
  );
}
