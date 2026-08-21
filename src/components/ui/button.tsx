import Link from "next/link";
import { cn } from "@/lib/cn";
import { SunseedBloom } from "@/components/ui/sunseed-bloom";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: [
    "bg-brand text-ink",
    "hover:bg-brand-hover",
    "active:scale-[0.99] motion-reduce:active:scale-100",
  ].join(" "),
  secondary: [
    "bg-transparent text-ink",
    "shadow-[inset_0_0_0_1px_var(--color-border-strong)]",
    "hover:bg-canvas-subtle/60 hover:shadow-[inset_0_0_0_1px_var(--color-ink-muted)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-ink",
    "hover:bg-canvas-subtle/80",
  ].join(" "),
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-[2.875rem] px-5 py-2.5 min-[1024px]:min-h-[3rem]",
  lg: "min-h-[3.25rem] px-5 py-3 min-[1024px]:min-h-[3.125rem]",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  external?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  disabled,
  type = "button",
  external,
}: ButtonProps) {
  const isPrimary = variant === "primary";

  const classes = cn(
    "group relative inline-flex w-full items-center justify-center rounded-[3px] font-semibold",
    "transition-[background-color,transform] duration-[var(--motion-base)] motion-reduce:transition-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
    "sm:w-auto",
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-50",
    isPrimary && "pr-10",
    className,
  );

  const content = (
    <>
      <span className="text-button-label">{children}</span>
      {isPrimary ? <SunseedBloom /> : null}
    </>
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
