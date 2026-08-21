import Link from "next/link";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "default" | "inverse";
};

export function TextLink({
  href,
  className,
  children,
  external,
  variant = "default",
}: TextLinkProps) {
  const classes = cn(
    "group inline-flex min-h-11 w-full flex-col items-start justify-center sm:min-h-0 sm:w-auto",
    "transition-[color,transform] duration-[var(--motion-base)] motion-reduce:transition-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]",
    variant === "inverse" ? "text-ink-inverse/85 hover:text-ink-inverse" : "text-ink hover:text-ink-muted",
    className,
  );

  const content = (
    <>
      <span className="text-button-label transition-transform duration-[var(--motion-base)] group-hover:translate-x-px motion-reduce:group-hover:translate-x-0">
        {children}
        {external ? (
          <span className="ml-1 text-meta opacity-60" aria-hidden>
            ↗
          </span>
        ) : null}
      </span>
      <span
        className={cn(
          "mt-1.5 h-px w-8 origin-left transition-[width,background-color] duration-[var(--motion-base)] motion-reduce:transition-none",
          "group-hover:w-full group-focus-visible:w-full",
          variant === "inverse" ? "bg-ink-inverse/25 group-hover:bg-brand/70" : "bg-border-strong group-hover:bg-brand",
        )}
        aria-hidden
      />
    </>
  );

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
