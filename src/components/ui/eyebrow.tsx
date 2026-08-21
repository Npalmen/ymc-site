import { cn } from "@/lib/cn";

type EyebrowProps = {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "studio" | "minimal";
};

export function Eyebrow({ className, children, variant = "default" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-eyebrow",
        variant === "studio"
          ? "text-ink-inverse/60"
          : variant === "minimal"
            ? "text-ink-subtle"
            : "text-ink-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
