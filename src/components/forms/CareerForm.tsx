"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { careerSchema, type CareerInput } from "@/lib/validations";
import { submitCareerForm } from "@/app/actions";
import { jobs } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-md border border-border-subtle bg-light px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 transition focus:border-accent/55 focus:outline-none focus:ring-2 focus:ring-accent/25";

export function CareerForm() {
  const [pending, startTransition] = useTransition();
  const [cv, setCv] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerInput>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      position: jobs[0]?.title ?? "",
      kvkk: false,
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (!cv) {
      setCvError("Lütfen CV dosyası yükleyin.");
      return;
    }
    setCvError(null);
    const fd = new FormData();
    Object.entries(data).forEach(([key, value]) => fd.set(key, String(value)));
    fd.set("kvkk", "true");
    fd.set("cv", cv);

    startTransition(async () => {
      const res = await submitCareerForm(fd);
      setResult({ ok: res.success, message: res.message });
      if (res.success) {
        reset({ position: jobs[0]?.title ?? "", kvkk: false });
        setCv(null);
      }
    });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 text-sm">
          <span className="text-ink-muted">Ad Soyad</span>
          <input className={fieldClass} autoComplete="name" {...register("name")} />
          {errors.name?.message ? (
            <span className="block text-xs text-red-600">{errors.name.message}</span>
          ) : null}
        </label>
        <label className="block space-y-1.5 text-sm">
          <span className="text-ink-muted">E-posta</span>
          <input className={fieldClass} type="email" autoComplete="email" {...register("email")} />
          {errors.email?.message ? (
            <span className="block text-xs text-red-600">{errors.email.message}</span>
          ) : null}
        </label>
        <label className="block space-y-1.5 text-sm">
          <span className="text-ink-muted">Telefon</span>
          <input className={fieldClass} type="tel" autoComplete="tel" {...register("phone")} />
          {errors.phone?.message ? (
            <span className="block text-xs text-red-600">{errors.phone.message}</span>
          ) : null}
        </label>
        <label className="block space-y-1.5 text-sm">
          <span className="text-ink-muted">Pozisyon</span>
          <select className={fieldClass} {...register("position")}>
            {jobs.map((job) => (
              <option key={job.id} value={job.title}>
                {job.title}
              </option>
            ))}
            <option value="Genel başvuru">Genel başvuru</option>
          </select>
          {errors.position?.message ? (
            <span className="block text-xs text-red-600">{errors.position.message}</span>
          ) : null}
        </label>
      </div>

      <label className="block space-y-1.5 text-sm">
        <span className="text-ink-muted">CV (PDF, DOC, DOCX — max 5 MB)</span>
        <input
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className={fieldClass}
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setCv(file);
            setCvError(null);
          }}
        />
        {cvError ? <span className="block text-xs text-red-600">{cvError}</span> : null}
      </label>

      <label className="block space-y-1.5 text-sm">
        <span className="text-ink-muted">Mesaj</span>
        <textarea className={cn(fieldClass, "min-h-28 resize-y")} {...register("message")} />
        {errors.message?.message ? (
          <span className="block text-xs text-red-600">{errors.message.message}</span>
        ) : null}
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-border-subtle accent-accent"
          {...register("kvkk")}
        />
        <span>
          <Link href="/kvkk" className="text-accent underline-offset-2 hover:underline">
            KVKK Aydınlatma Metni
          </Link>
          ’ni okudum; başvuru verilerimin işlenmesini kabul ediyorum.
          {errors.kvkk?.message ? (
            <span className="mt-1 block text-red-600">{errors.kvkk.message}</span>
          ) : null}
        </span>
      </label>

      <Button type="submit" disabled={pending}>
        {pending ? "Gönderiliyor…" : "Başvuruyu gönder"}
      </Button>

      {result ? (
        <p
          role="status"
          className={cn(
            "rounded-lg border px-3 py-2 text-sm",
            result.ok
              ? "border-accent/35 bg-accent-soft text-accent-strong"
              : "border-red-500/35 bg-red-50 text-red-700",
          )}
        >
          {result.message}
        </p>
      ) : null}
    </form>
  );
}
