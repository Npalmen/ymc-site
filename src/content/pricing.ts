/** Read old combined price copy until every published/draft document is migrated. */
export function splitPrice(input?: string | null, payment?: string | null) {
  const value = input ?? "";
  const paymentInfo = payment ?? "";
  const match = /\s*[•·|–-]?\s*(Betalas\s+månadsvis\s*:.*)$/i.exec(value);
  return {
    price: match ? value.slice(0, match.index).trim() : value.trim(),
    paymentInfo: paymentInfo.trim() || match?.[1]?.trim() || "",
  };
}

export function splitCoursePrice(input?: string | null) {
  const value = input ?? "";
  const parts = value.split(/\s*\|\s*/);
  const pricePart = parts.find((part) => /^\d[\d\s.,]*\s*kr\b/i.test(part)) ?? "";
  const paymentInfo = parts.find((part) => /^Betalas/i.test(part)) ?? "";
  return { ...splitPrice(pricePart, paymentInfo), note: parts.find((part) => /\d\s*[x×]\s*\d/i.test(part)) ?? "" };
}
