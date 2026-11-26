import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "dark" | "elevated" | "light" | "mist" | "sky" | "stone" | "dusk";
  grid?: boolean;
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  dark: "bg-slate text-ink-on-dark",
  elevated: "bg-bg-elevated text-ink",
  light: "bg-light text-ink-dark",
  mist: "section-mist text-ink",
  sky: "section-sky text-ink",
  stone: "section-stone text-ink-dark",
  dusk: "section-dusk",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "mist",
  grid = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-18 sm:py-22 lg:py-28",
        toneClass[tone],
        grid && "tech-grid",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  index?: string;
  align?: "left" | "center";
  light?: boolean;
  onDark?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  index,
  align = "left",
  light = false,
  onDark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}>
      {index ? (
        <p
          className={cn(
            "mb-3 font-mono text-[11px] tracking-[0.14em] text-accent-strong",
            onDark && "text-accent",
          )}
        >
          {index}
        </p>
      ) : null}
      <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-relaxed",
            onDark
              ? "text-ink-muted-on-dark"
              : light
                ? "text-ink-dark-muted"
                : "text-ink-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
