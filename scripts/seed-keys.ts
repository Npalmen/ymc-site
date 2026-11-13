const HINT_FIELDS = ["value", "id", "n", "href", "slug", "label", "title", "heading", "year", "number"] as const;

function hintOf(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return "";
  const record = value as Record<string, unknown>;
  for (const field of HINT_FIELDS) {
    const part = record[field];
    if (typeof part === "string" && part.trim()) return part.trim();
    if (typeof part === "number") return String(part);
  }
  return "";
}

/** Stable Sanity array key. Same index and value always produce the same key. */
export function arrayKey(scope: string, index: number, value: unknown) {
  const raw = `${scope}-${index}-${hintOf(value)}`
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return (raw || `item-${index}`).slice(0, 96);
}

/** Give every object in every array a `_key`. Strings and numbers are left as they are. */
export type WithArrayKeys<T> = T extends readonly (infer Item)[]
  ? (WithArrayKeys<Item> & (Item extends object ? { _key: string } : unknown))[]
  : T extends object ? { [Key in keyof T]: WithArrayKeys<T[Key]> } : T;

export function withArrayKeys<T>(value: T, scope = "item"): WithArrayKeys<T> {
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        const nested = withArrayKeys(item, `${scope}-${index}`) as Record<string, unknown>;
        const existing = nested._key;
        const key = typeof existing === "string" && existing ? existing : arrayKey(scope, index, item);
        return { ...nested, _key: key };
      }
      return withArrayKeys(item, `${scope}-${index}`);
    }) as WithArrayKeys<T>;
  }
  if (value && typeof value === "object") {
    const next: Record<string, unknown> = {};
    for (const [field, child] of Object.entries(value as Record<string, unknown>)) {
      next[field] = withArrayKeys(child, field);
    }
    return next as WithArrayKeys<T>;
  }
  return value as WithArrayKeys<T>;
}
