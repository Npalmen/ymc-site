import { cn } from "@/lib/cn";

type SectionTone = "canvas" | "surface" | "brand-soft" | "studio" | "canvas-deep";

const tones: Record<SectionTone, string> = {
  canvas: "bg-canvas text-ink",
  "canvas-deep": "bg-[var(--color-canvas-deep)] text-ink",
  surface: "bg-surface text-ink",
  "brand-soft": "bg-brand-soft text-ink",
  studio: "surface-studio text-ink-inverse",
};

type SectionProps = {
  tone?: SectionTone;
  spacing?: "default" | "large" | "compact" | "quiet" | "expressive";
  bleed?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({
  tone = "canvas",
  spacing = "default",
  bleed = false,
  className,
  children,
  id,
}: SectionProps) {
  const padding = {
    expressive: "py-[var(--space-section-expressive)]",
    large: "py-[var(--space-section-large)]",
    compact: "py-[var(--space-section-quiet)]",
    quiet: "py-[var(--space-section-quiet)]",
    default: "py-[var(--space-section)]",
  }[spacing];

  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        padding,
        bleed && "overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}
