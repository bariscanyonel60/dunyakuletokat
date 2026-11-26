type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

/**
 * Resend ile e-posta gönderimi.
 * RESEND_API_KEY yoksa geliştirmede simüle eder; üretimde hata döner.
 */
export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: SendEmailInput): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.EMAIL_FROM ?? "Dünya Kule <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[email:dev-simulate]", { to, subject, replyTo });
      return { ok: true };
    }
    return {
      ok: false,
      error: "E-posta servisi yapılandırılmamış. RESEND_API_KEY gerekli.",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        reply_to: replyTo,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[email:resend-error]", body);
      return { ok: false, error: "E-posta gönderilemedi. Lütfen daha sonra deneyin." };
    }

    return { ok: true };
  } catch (error) {
    console.error("[email:exception]", error);
    return { ok: false, error: "E-posta gönderilemedi. Lütfen daha sonra deneyin." };
  }
}
