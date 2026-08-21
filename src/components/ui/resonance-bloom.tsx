import { cn } from "@/lib/cn";
import { useId } from "react";

export type ResonanceIntensity = "whisper" | "partial" | "full";

type ResonanceBloomProps = {
  intensity?: ResonanceIntensity;
  className?: string;
};

/** Fibonacci/phyllo-like seed positions (abstract, not literal sunflower). */
const SEEDS: Array<{ cx: number; cy: number; r: number }> = Array.from({ length: 24 }, (_, i) => {
  const angle = (i * 137.508) * (Math.PI / 180);
  const radius = 8 + i * 5.8;
  return {
    cx: 200 + radius * Math.cos(angle),
    cy: 200 + radius * Math.sin(angle),
    r: 1.2 + (i % 4) * 0.35,
  };
});

const GROOVES = [
  { rx: 168, ry: 38, rotate: -18 },
  { rx: 138, ry: 31, rotate: -18 },
  { rx: 108, ry: 25, rotate: -18 },
  { rx: 78, ry: 18, rotate: -18 },
  { rx: 48, ry: 12, rotate: -18 },
];

const CURVES = {
  whisper: "M 200 360 C 160 300, 140 240, 170 180 S 220 120, 200 80",
  partial:
    "M 200 360 C 160 300, 140 240, 170 180 S 220 120, 200 80 M 80 220 C 120 200, 160 170, 200 160",
  full: "M 200 360 C 160 300, 140 240, 170 180 S 220 120, 200 80 M 80 220 C 120 200, 160 170, 200 160 M 320 220 C 280 200, 240 170, 200 160",
};

const seedCount: Record<ResonanceIntensity, number> = {
  whisper: 9,
  partial: 16,
  full: 24,
};

const grooveCount: Record<ResonanceIntensity, number> = {
  whisper: 2,
  partial: 4,
  full: 5,
};

export function ResonanceBloom({ intensity = "partial", className }: ResonanceBloomProps) {
  const uid = useId().replace(/:/g, "");
  const gradientId = `resonance-${intensity}-${uid}`;

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("pointer-events-none select-none text-brand", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="55%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </radialGradient>
      </defs>

      {GROOVES.slice(0, grooveCount[intensity]).map((groove) => (
        <ellipse
          key={`${groove.rx}-${groove.ry}`}
          cx="200"
          cy="200"
          rx={groove.rx}
          ry={groove.ry}
          transform={`rotate(${groove.rotate} 200 200)`}
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity={intensity === "whisper" ? 0.14 : 0.22}
        />
      ))}

      <path
        d={CURVES[intensity]}
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {SEEDS.slice(0, seedCount[intensity]).map((seed, index) => (
        <circle
          key={index}
          cx={seed.cx}
          cy={seed.cy}
          r={seed.r}
          fill="currentColor"
          fillOpacity={0.18 + (index % 5) * 0.06}
        />
      ))}

      {intensity === "full" ? (
        <circle cx="200" cy="200" r="4" fill="currentColor" fillOpacity="0.45" />
      ) : null}
    </svg>
  );
}
