import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border-subtle bg-accent-soft px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent-strong",
        className,
      )}
    >
      {children}
    </span>
  );
}
