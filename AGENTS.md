<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dünya Kule — ajan notları

## Çalıştırma

- Geliştirme: `npm run dev`
- Derleme: `npm run build` (her ana aşamada doğrula)
- Lint / format: `npm run lint`, `npm run format`

## Dokunma kuralları

- Metin ve firma bilgileri yalnızca [`src/content/site.ts`](src/content/site.ts) üzerinden.
- Kuruluş yılı, proje sayısı, ekip, iller, sertifika, operatör adı **uydurma**; TODO yer tutucu kullan.
- Tasarım token’ları: [`src/app/globals.css`](src/app/globals.css) (`--accent` amber `#F59E0B`).
- Formlar: [`src/app/actions.ts`](src/app/actions.ts) + Resend (`src/lib/email.ts`).

## Deploy

- Vercel; `NEXT_PUBLIC_SITE_URL` ve Resend env zorunlu (formlar için).
- Statik sayfalar SSG; Server Actions için Node runtime.

## Next.js 16

- `params` / `searchParams` async (`await params`).
- Tip yardımcıları: `PageProps`, `LayoutProps`.
