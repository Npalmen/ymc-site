import Image from "next/image";
import { cn } from "@/lib/cn";

type ImageRatio = "16/10" | "3/2" | "4/5" | "1/1" | "portrait-tall" | "editorial-wide";

export type MediaLayout =
  | "hero-media"
  | "editorial-portrait"
  | "editorial-landscape"
  | "studio-landscape"
  | "founder-portrait";

const ratios: Record<ImageRatio, string> = {
  "16/10": "aspect-[16/10]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "portrait-tall": "aspect-[3/4]",
  "editorial-wide": "aspect-[5/3]",
};

const layoutConfig: Record<
  MediaLayout,
  { ratio: ImageRatio; sizes: string; variant?: "default" | "studio" }
> = {
  "hero-media": {
    ratio: "4/5",
    sizes: "(max-width: 767px) calc(100vw - 40px), (max-width: 1179px) calc(100vw - 64px), 52vw",
  },
  "editorial-portrait": {
    ratio: "4/5",
    sizes: "(max-width: 767px) calc(100vw - 40px), (max-width: 1179px) calc(100vw - 64px), 42vw",
  },
  "founder-portrait": {
    ratio: "portrait-tall",
    sizes: "(max-width: 767px) calc(100vw - 40px), (max-width: 1179px) calc(100vw - 64px), 36vw",
  },
  "editorial-landscape": {
    ratio: "16/10",
    sizes: "(max-width: 767px) calc(100vw - 40px), (max-width: 1179px) calc(100vw - 64px), 55vw",
  },
  "studio-landscape": {
    ratio: "16/10",
    sizes: "(max-width: 767px) calc(100vw - 40px), (max-width: 1179px) calc(100vw - 64px), 52vw",
    variant: "studio",
  },
};

type ImageFrameProps = {
  layout?: MediaLayout;
  ratio?: ImageRatio;
  label: string;
  caption?: string;
  variant?: "default" | "studio";
  bleed?: boolean;
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export function ImageFrame({
  layout,
  ratio: ratioProp,
  label,
  caption,
  variant: variantProp = "default",
  bleed = false,
  src,
  alt,
  priority = false,
  className,
}: ImageFrameProps) {
  const config = layout ? layoutConfig[layout] : null;
  const ratio = ratioProp ?? config?.ratio ?? "4/5";
  const variant = variantProp ?? config?.variant ?? "default";
  const sizes = config?.sizes ?? "(max-width: 1179px) 100vw, 50vw";
  const imageAlt = alt ?? label;

  return (
    <figure className={cn("group w-full", bleed && "min-[1180px]:-mr-8 xl:-mr-12", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[3px] border",
          ratios[ratio],
          variant === "studio"
            ? "border-[var(--color-studio-border)] placeholder-art-studio frame-mat-studio"
            : "border-border-strong placeholder-art frame-mat",
        )}
        role={src ? undefined : "img"}
        aria-label={src ? undefined : label}
      >
        {src ? (
          <Image
            src={src}
            alt={imageAlt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <>
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent"
              aria-hidden
            />
            <div
              className={cn(
                "absolute inset-0 flex flex-col justify-end p-5 sm:p-7",
                variant === "studio"
                  ? "bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  : "bg-gradient-to-t from-ink/12 via-transparent to-transparent",
              )}
            >
              <span
                className={cn(
                  "text-eyebrow",
                  variant === "studio" ? "text-ink-inverse/80" : "text-ink-muted",
                )}
              >
                {label}
              </span>
              <span
                className={cn(
                  "text-body-sm mt-1",
                  variant === "studio" ? "text-ink-inverse/60" : "text-ink-subtle",
                )}
              >
                Platsmarkör — ersätts med godkänd fotografi
              </span>
            </div>
          </>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-4 border-t border-border pt-3">
          <span className="text-eyebrow text-ink-subtle">{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
