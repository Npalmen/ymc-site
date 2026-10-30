import type { RichLine } from "@/content/rich-text";

/** Store headings as plain text. Asterisks mark the italic gold word. */
export function richToMarked(parts: RichLine): string {
  return parts
    .map((part) => (part.accent ? `*${part.text}*` : part.text))
    .join("");
}

export function markedToRich(value: string): RichLine {
  const parts: RichLine = [];
  const pattern = /\*([^*]+)\*/g;
  let last = 0;
  for (const match of value.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push({ text: value.slice(last, index) });
    parts.push({ text: match[1] ?? "", accent: true });
    last = index + match[0].length;
  }
  if (last < value.length) parts.push({ text: value.slice(last) });
  if (parts.length === 0) return [{ text: value }];
  return parts;
}

export function richField(value: string | null | undefined, fallback: RichLine): RichLine {
  if (!value || !value.trim()) return fallback;
  return markedToRich(value);
}
