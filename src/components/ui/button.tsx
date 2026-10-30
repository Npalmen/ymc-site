import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ink" | "inverse";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-ink hover:bg-brand-hover",
  secondary:
    "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-border-strong)] hover:bg-surface",
  ghost: "bg-transparent text-ink hover:bg-canvas-subtle",
  ink: "bg-ink text-ink-inverse hover:bg-studio-elevated",
  inverse:
    "bg-transparent text-ink-inverse shadow-[inset_0_0_0_1px_rgb(247_243_236/35%)] hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5",
  lg: "min-h-12 px-6 text-[1.02rem]",
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
  fullWidth?: boolean;
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
  fullWidth = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-[var(--radius-pill)] font-semibold tracking-[-0.01em]",
    "transition-[background-color,transform,box-shadow] duration-[var(--motion-base)] motion-reduce:transition-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
    "active:translate-y-px motion-reduce:active:translate-y-0",
    fullWidth ? "w-full" : "w-auto",
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  const content = <span>{children}</span>;

  if (href && !disabled) {
    if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
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
