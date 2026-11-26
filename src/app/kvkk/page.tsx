import { legal } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: legal.kvkkTitle,
  description: "Kişisel verilerin korunması aydınlatma metni.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title={legal.kvkkTitle} />
      <Section tone="mist">
        <div
          role="note"
          className="mb-10 border-t border-accent/40 bg-accent-soft/70 px-4 py-4 text-sm text-accent-strong sm:px-5"
        >
          {legal.kvkkNote}
        </div>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted">
          {legal.kvkkBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
