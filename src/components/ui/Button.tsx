import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-slate-deep hover:bg-accent-strong shadow-[0_0_0_1px_rgba(245,158,11,0.35)]",
  secondary:
    "bg-bg-elevated/70 text-ink border border-border-subtle hover:border-accent/55 hover:bg-accent-soft",
  ghost: "bg-transparent text-ink-muted hover:text-ink hover:bg-surface",
  light: "bg-slate text-ink-on-dark hover:bg-slate-deep",
} as const;

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
} as const;

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & { href: string; external?: boolean };

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
