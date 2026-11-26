import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-mountain-dusk.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgb(21_40_60/88%)_0%,rgb(30_53_80/70%)_55%,rgb(245_158_11/28%)_100%)]"
      />
      <Container className="relative flex min-h-[70vh] flex-col items-start justify-center py-20">
        <p className="font-mono text-xs tracking-[0.16em] text-accent">HATA · 404</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Sinyal kaybı
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Aradığınız sayfaya ulaşılamıyor. Belki frekans değişti — ana sayfadan yeniden bağlantı
          kurabilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Ana sayfa</Button>
          <Button
            href="/iletisim"
            variant="secondary"
            className="border-white/35 bg-white/10 text-white hover:border-white/55 hover:bg-white/18"
          >
            İletişim
          </Button>
        </div>
      </Container>
    </section>
  );
}
