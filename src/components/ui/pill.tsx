import { cn } from "@/lib/cn";

type PillProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function Pill({ children, tone = "light", className }: PillProps) {
  return (
    <p
      className={cn(
        "inline-flex min-h-8 items-center gap-2 rounded-[var(--radius-pill)] border px-3 py-1 text-[0.8125rem] font-medium",
        tone === "dark"
          ? "border-white/15 bg-white/5 text-ink-inverse"
          : "border-border bg-surface text-ink",
        className,
      )}
    >
      <span className="size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
      {children}
    </p>
  );
}
