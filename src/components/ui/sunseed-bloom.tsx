import { useId } from "react";
import { cn } from "@/lib/cn";

type SunseedBloomProps = {
  className?: string;
  active?: boolean;
};

const PETALS = Array.from({ length: 8 }, (_, i) => (i * 360) / 8);

export function SunseedBloom({ className, active = false }: SunseedBloomProps) {
  const gradientId = useId();

  return (
    <span
      className={cn(
        "pointer-events-none absolute right-3 top-1/2 size-6 -translate-y-1/2",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className={cn(
          "size-full overflow-visible",
          "opacity-0 scale-[0.3] -rotate-12",
          "transition-[opacity,transform] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0",
          "group-focus-visible:opacity-100 group-focus-visible:scale-100 group-focus-visible:rotate-0",
          "group-active:opacity-90 group-active:scale-95",
          active && "opacity-100 scale-100 rotate-0",
          "motion-reduce:rotate-0 motion-reduce:scale-100",
          "motion-reduce:opacity-0 motion-reduce:group-hover:opacity-100",
          "motion-reduce:group-focus-visible:opacity-100",
        )}
        fill="none"
      >
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(247 192 6 / 45%)" />
            <stop offset="100%" stopColor="rgb(247 192 6 / 0%)" />
          </radialGradient>
        </defs>
        <circle cx="12" cy="12" r="8" fill={`url(#${gradientId})`} className="opacity-60" />
        {PETALS.map((angle) => (
          <ellipse
            key={angle}
            cx="12"
            cy="5"
            rx="1.1"
            ry="3.2"
            fill="rgb(247 192 6 / 55%)"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
        <circle cx="12" cy="12" r="2.2" fill="var(--color-brand)" />
      </svg>
    </span>
  );
}
