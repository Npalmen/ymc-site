import { cn } from "@/lib/cn";

type TextVariant =
  | "body-lg"
  | "body"
  | "body-sm"
  | "label"
  | "meta"
  | "nav"
  | "dropdown-title"
  | "dropdown-description"
  | "quote";

const styles: Record<TextVariant, string> = {
  "body-lg": "text-body-lg",
  body: "text-body",
  "body-sm": "text-body-sm",
  label: "text-label",
  meta: "text-meta",
  nav: "text-nav",
  "dropdown-title": "text-dropdown-title",
  "dropdown-description": "text-dropdown-description",
  quote: "text-quote",
};

type TextProps = {
  variant?: TextVariant;
  as?: "p" | "span" | "div" | "li";
  className?: string;
  children: React.ReactNode;
};

export function Text({ variant = "body", as: Tag = "p", className, children }: TextProps) {
  return <Tag className={cn(styles[variant], className)}>{children}</Tag>;
}
