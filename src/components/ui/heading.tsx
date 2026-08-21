import { cn } from "@/lib/cn";

type HeadingLevel = "display-xl" | "display-lg" | "heading-xl" | "heading-lg" | "heading-md" | "heading-sm";

const styles: Record<HeadingLevel, string> = {
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "heading-xl": "text-heading-xl",
  "heading-lg": "text-heading-lg",
  "heading-md": "text-heading-md",
  "heading-sm": "text-heading-sm",
};

const defaultTags = {
  "display-xl": "h1",
  "display-lg": "h1",
  "heading-xl": "h2",
  "heading-lg": "h2",
  "heading-md": "h3",
  "heading-sm": "h4",
} as const;

type HeadingTag = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  level: HeadingLevel;
  as?: HeadingTag;
  className?: string;
  children: React.ReactNode;
};

export function Heading({ level, as, className, children }: HeadingProps) {
  const Tag = as ?? defaultTags[level];
  return <Tag className={cn(styles[level], className)}>{children}</Tag>;
}
