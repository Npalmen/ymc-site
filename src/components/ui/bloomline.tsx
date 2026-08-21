import { cn } from "@/lib/cn";
import { useId } from "react";

type BloomlineVariant = "hero" | "stem" | "path" | "rhythm" | "direction" | "bloom";

type BloomlineProps = {
  variant?: BloomlineVariant;
  className?: string;
};

const paths: Record<BloomlineVariant, string> = {
  hero: "M 8 400 C 30 360, 48 280, 72 200 S 110 70, 160 28 S 230 8, 300 0",
  stem: "M 12 380 C 28 340, 40 260, 58 190 S 78 110, 96 60 S 112 24, 128 0",
  path: "M 0 40 C 40 80, 60 160, 90 240 S 140 340, 200 400 M 200 400 C 260 360, 320 280, 380 200",
  rhythm:
    "M 0 120 L 32 120 L 42 72 L 52 168 L 62 56 L 72 152 L 82 96 L 92 136 L 102 112 L 112 120 L 420 120",
  direction:
    "M 0 100 C 80 100, 120 60, 200 60 S 320 100, 420 100 M 380 100 L 420 80 M 380 100 L 420 120",
  bloom:
    "M 200 200 C 200 128, 248 92, 200 56 C 152 92, 200 128, 200 200 C 200 272, 152 308, 200 344 C 248 308, 200 272, 200 200",
};

const viewBoxes: Record<BloomlineVariant, string> = {
  hero: "0 0 320 420",
  stem: "0 0 140 400",
  path: "0 0 420 420",
  rhythm: "0 0 420 160",
  direction: "0 0 420 160",
  bloom: "0 0 400 400",
};

const strokeWidths: Record<BloomlineVariant, number> = {
  hero: 1.75,
  stem: 1.5,
  path: 1.5,
  rhythm: 1.25,
  direction: 1.5,
  bloom: 1.5,
};

export function Bloomline({ variant = "hero", className }: BloomlineProps) {
  const uid = useId();
  const gradientId = `bloomline-${variant}${uid.replace(/:/g, "")}`;

  return (
    <svg
      viewBox={viewBoxes[variant]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("pointer-events-none select-none text-brand", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <path
        d={paths[variant]}
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidths[variant]}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {variant === "hero" || variant === "stem" ? (
        <circle cx={variant === "hero" ? 300 : 128} cy={0} r="3.5" fill="currentColor" fillOpacity="0.35" />
      ) : null}
      {variant === "bloom" ? (
        <circle cx="200" cy="200" r="5" fill="currentColor" fillOpacity="0.35" />
      ) : null}
    </svg>
  );
}
