import { markedToRich } from "@/sanity/rich";
import { cn } from "@/lib/cn";
import type { RichLine as RichLineParts } from "@/content/rich-text";

export function RichLine({
  parts,
  tone = "accent",
}: {
  parts: RichLineParts | string;
  tone?: "accent" | "brand";
}) {
  return (typeof parts === "string" ? markedToRich(parts) : parts).map((part, index) =>
    part.accent ? (
      <em key={index} className={cn("italic", tone === "brand" ? "text-brand" : "text-accent")}>
        {part.text}
      </em>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}
