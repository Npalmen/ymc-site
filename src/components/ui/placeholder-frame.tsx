import { cn } from "@/lib/cn";

type Ratio = "4/5" | "3/4" | "16/9" | "1/1" | "fill";

const ratios: Record<Ratio, string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  fill: "h-full min-h-full",
};

type PlaceholderFrameProps = {
  label: string;
  caption?: string;
  ratio?: Ratio;
  className?: string;
  framed?: boolean;
};

/** Explicit stand-in until Biim supplies approved photography. No hotlinked Wix files. */
export function PlaceholderFrame({
  label,
  caption,
  ratio = "4/5",
  className,
  framed = true,
}: PlaceholderFrameProps) {
  return (
    <figure className={cn("flex h-full flex-col", className)}>
      <div
        className={cn(
          "photo-pending relative flex flex-1 flex-col justify-between overflow-hidden p-4",
          framed && "rounded-[var(--radius-card)]",
          ratios[ratio],
        )}
      >
        <span className="w-fit rounded-[var(--radius-pill)] border border-dashed border-ink/30 bg-surface/90 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink">
          Foto saknas
        </span>
        <span className="max-w-[16rem] text-body-sm font-medium text-ink">{label}</span>
      </div>
      {caption ? <figcaption className="text-meta mt-2">{caption}</figcaption> : null}
    </figure>
  );
}
