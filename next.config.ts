import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kurumsal pazarlama sitesi: klasik SSG + Server Actions yeterli
  images: {
    formats: ["image/avif", "image/webp"],
    // Yer tutucu SVG’ler; gerçek fotoğraflar JPG/WebP ile değiştirilecek
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
