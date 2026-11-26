# Dünya Kule — Kurumsal Web Sitesi

Tokat merkezli **Dünya Kule Hizmetleri San. ve Tic. Ltd. Şti.** için Next.js (App Router) + TypeScript + Tailwind kurumsal site.

## Kurulum

```bash
npm install
cp .env.example .env.local
npm run dev
```

Tarayıcı: [http://localhost:3000](http://localhost:3000)

## Ortam değişkenleri

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL` | Canonical / sitemap taban URL |
| `RESEND_API_KEY` | Resend API anahtarı |
| `CONTACT_TO_EMAIL` | İletişim formu alıcısı |
| `CAREER_TO_EMAIL` | Kariyer formu alıcısı |
| `EMAIL_FROM` | Doğrulanmış gönderen adresi |

`RESEND_API_KEY` yoksa geliştirmede e-posta simüle edilir; üretimde form hata döner.

## İçerik güncelleme

Tüm metinler ve firma bilgileri tek dosyada:

[`src/content/site.ts`](src/content/site.ts)

- `TODO` ve `[XX]` / `[İl — TODO]` gibi işaretler gerçek değer bekler.
- Operatör / müşteri marka adları bilerek kullanılmaz.
- Görseller: `public/images/` altındaki SVG yer tutucuları gerçek saha fotoğraflarıyla değiştirin (aynı dosya adlarını koruyun veya `site.ts` içindeki yolları güncelleyin).

## Scriptler

```bash
npm run dev      # geliştirme
npm run build    # üretim derlemesi
npm run start    # üretim sunucusu
npm run lint     # ESLint
npm run format   # Prettier
```

## Deploy (Vercel)

1. Repoyu Vercel’e bağlayın.
2. Ortam değişkenlerini Vercel dashboard’da tanımlayın.
3. Framework preset: Next.js (varsayılan). `output: 'export'` kullanılmaz; Server Action formlar için Node runtime gerekir.

## Klasör yapısı

```text
src/
  app/                 # sayfalar, actions, sitemap, robots
  components/
    ui/ layout/ sections/ forms/
  content/site.ts      # içerik katmanı
  lib/                 # seo, schema, email, validations
public/images/         # görsel yer tutucular
```

## Erişilebilirlik ve performans

- `lang="tr"`, Türkçe metadata, JSON-LD
- `prefers-reduced-motion` desteği
- Focus stilleri, anlamlı alt metinler
- Hedef: Lighthouse ≥ 95 (mobil) — gerçek görseller ve domain sonrası tekrar ölçün
