"use server";

import { careerSchema, contactSchema } from "@/lib/validations";
import { sendEmail } from "@/lib/email";
import { company } from "@/content/site";

export type ActionResult =
  | { success: true; message: string }
  | { success: false; message: string; fieldErrors?: Record<string, string[]> };

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    companyName: String(formData.get("companyName") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    serviceType: String(formData.get("serviceType") ?? ""),
    message: String(formData.get("message") ?? ""),
    kvkk: formData.get("kvkk") === "on" || formData.get("kvkk") === "true",
  };

  const parsed = contactSchema.safeParse({
    ...raw,
    kvkk: raw.kvkk ? true : false,
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Formda eksik veya hatalı alanlar var.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;
  if (to.includes("[") || to.includes("ornek")) {
    if (process.env.NODE_ENV === "production" && !process.env.CONTACT_TO_EMAIL) {
      return {
        success: false,
        message: "İletişim e-postası yapılandırılmamış.",
      };
    }
  }

  const html = `
    <h2>Yeni iletişim formu</h2>
    <p><strong>Ad:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Firma:</strong> ${escapeHtml(data.companyName)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Hizmet:</strong> ${escapeHtml(data.serviceType)}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br/>")}</p>
  `;

  const result = await sendEmail({
    to: process.env.CONTACT_TO_EMAIL || "delivered@resend.dev",
    subject: `İletişim: ${data.companyName} — ${data.name}`,
    html,
    replyTo: data.email,
  });

  if (!result.ok) {
    return { success: false, message: result.error };
  }

  return {
    success: true,
    message: "Mesajınız alındı. En kısa sürede dönüş yapacağız.",
  };
}

export async function submitCareerForm(formData: FormData): Promise<ActionResult> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    position: String(formData.get("position") ?? ""),
    message: String(formData.get("message") ?? ""),
    kvkk: formData.get("kvkk") === "on" || formData.get("kvkk") === "true",
  };

  const parsed = careerSchema.safeParse({
    ...raw,
    kvkk: raw.kvkk ? true : false,
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Formda eksik veya hatalı alanlar var.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const cv = formData.get("cv");
  if (!(cv instanceof File) || cv.size === 0) {
    return { success: false, message: "Lütfen CV dosyası yükleyin." };
  }
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (!allowed.includes(cv.type) && !/\.(pdf|doc|docx)$/i.test(cv.name)) {
    return { success: false, message: "CV yalnızca PDF veya DOC/DOCX olabilir." };
  }
  if (cv.size > 5 * 1024 * 1024) {
    return { success: false, message: "CV dosyası en fazla 5 MB olabilir." };
  }

  const data = parsed.data;
  const html = `
    <h2>Yeni kariyer başvurusu</h2>
    <p><strong>Ad:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Pozisyon:</strong> ${escapeHtml(data.position)}</p>
    <p><strong>CV:</strong> ${escapeHtml(cv.name)} (${cv.size} bayt)</p>
    <p><strong>Mesaj:</strong></p>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br/>")}</p>
    <p><em>Not: CV dosyası bu e-postaya ek olarak bağlanmadı; Resend ek yapılandırması sonrası eklenebilir. // TODO</em></p>
  `;

  const result = await sendEmail({
    to: process.env.CAREER_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "delivered@resend.dev",
    subject: `Kariyer: ${data.position} — ${data.name}`,
    html,
    replyTo: data.email,
  });

  if (!result.ok) {
    return { success: false, message: result.error };
  }

  return {
    success: true,
    message: "Başvurunuz alındı. Uygunluk durumunda sizinle iletişime geçeceğiz.",
  };
}
