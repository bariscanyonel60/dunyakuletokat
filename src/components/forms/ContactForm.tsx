"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { submitContactForm } from "@/app/actions";
import { services } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-md border border-border-subtle bg-light px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 transition focus:border-accent/55 focus:outline-none focus:ring-2 focus:ring-accent/25";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: "genel",
      kvkk: false,
    },
  });

  const onSubmit = handleSubmit((data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      fd.set(key, String(value));
    });
    fd.set("kvkk", "true");

    startTransition(async () => {
      const res = await submitContactForm(fd);
      setResult({ ok: res.success, message: res.message });
      if (res.success) reset({ serviceType: "genel", kvkk: false });
    });
  });

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", compact && "space-y-3")} noValidate>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <Field label="Ad Soyad" error={errors.name?.message}>
          <input className={fieldClass} autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Firma" error={errors.companyName?.message}>
          <input className={fieldClass} autoComplete="organization" {...register("companyName")} />
        </Field>
        <Field label="Telefon" error={errors.phone?.message}>
          <input className={fieldClass} type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
        <Field label="E-posta" error={errors.email?.message}>
          <input className={fieldClass} type="email" autoComplete="email" {...register("email")} />
        </Field>
      </div>

      <Field label="Hizmet türü" error={errors.serviceType?.message}>
        <select className={fieldClass} {...register("serviceType")}>
          <option value="genel">Genel bilgi / teklif</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mesaj" error={errors.message?.message}>
        <textarea className={cn(fieldClass, "min-h-28 resize-y")} {...register("message")} />
      </Field>

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
          ’ni okudum, kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.
          {errors.kvkk?.message ? (
            <span className="mt-1 block text-red-600">{errors.kvkk.message}</span>
          ) : null}
        </span>
      </label>

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Gönderiliyor…" : "Gönder"}
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

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5 text-sm">
      <span className="text-ink-muted">{label}</span>
      {children}
      {error ? <span className="block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
