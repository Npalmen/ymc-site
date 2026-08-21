import { cn } from "@/lib/cn";

type ContainerVariant = "wide" | "default" | "reading" | "full";

const maxWidths: Record<ContainerVariant, string> = {
  wide: "max-w-[var(--container-wide)]",
  default: "max-w-[var(--container-default)]",
  reading: "max-w-[var(--container-reading)]",
  full: "max-w-full",
};

type ContainerProps = {
  variant?: ContainerVariant;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({
  variant = "default",
  className,
  children,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        maxWidths[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
