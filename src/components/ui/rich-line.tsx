import { cn } from "@/lib/cn";
import type { RichLine as RichLineParts } from "@/content/rich-text";

export function RichLine({
  parts,
  tone = "accent",
}: {
  parts: RichLineParts;
  tone?: "accent" | "brand";
}) {
  return parts.map((part, index) =>
    part.accent ? (
      <em key={index} className={cn("italic", tone === "brand" ? "text-brand" : "text-accent")}>
        {part.text}
      </em>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}
