import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ad soyad en az 2 karakter olmalı."),
  companyName: z.string().trim().min(2, "Firma adı en az 2 karakter olmalı."),
  phone: z
    .string()
    .trim()
    .min(10, "Geçerli bir telefon girin.")
    .max(20, "Telefon çok uzun."),
  email: z.string().trim().email("Geçerli bir e-posta girin."),
  serviceType: z.string().trim().min(1, "Hizmet türü seçin."),
  message: z.string().trim().min(10, "Mesaj en az 10 karakter olmalı."),
  kvkk: z.boolean().refine((value) => value === true, {
    message: "KVKK aydınlatmasını onaylamanız gerekir.",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const careerSchema = z.object({
  name: z.string().trim().min(2, "Ad soyad en az 2 karakter olmalı."),
  email: z.string().trim().email("Geçerli bir e-posta girin."),
  phone: z
    .string()
    .trim()
    .min(10, "Geçerli bir telefon girin.")
    .max(20, "Telefon çok uzun."),
  position: z.string().trim().min(2, "Pozisyon seçin veya yazın."),
  message: z.string().trim().min(10, "Mesaj en az 10 karakter olmalı."),
  kvkk: z.boolean().refine((value) => value === true, {
    message: "KVKK aydınlatmasını onaylamanız gerekir.",
  }),
});

export type CareerInput = z.infer<typeof careerSchema>;
