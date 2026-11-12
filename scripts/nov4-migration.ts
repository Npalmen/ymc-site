import { pedagogy } from "../src/content/pages/pedagogy";
import { educationHub } from "../src/content/pages/education";
import { splitPrice, splitCoursePrice } from "../src/content/pricing";
import { isPublicHref } from "../src/content/visibility";
import { withArrayKeys } from "./seed-keys";

export type MigrationDoc = { _id: string; _rev: string; _type: string; [key: string]: unknown };

/** Patches only this batch's fields. Existing editor copy and array keys survive. */
export function migrationPatch(doc: MigrationDoc) {
  const set: Record<string, unknown> = {};
  const unset: string[] = [];
  const str = (field: string) => typeof doc[field] === "string" ? doc[field] as string : "";
  if (doc._type === "lessonPackage") {
    const split = splitPrice(str("price"), str("paymentInfo"));
    if (split.price !== str("price")) set.price = split.price;
    if (doc.paymentInfo === undefined || split.paymentInfo !== str("paymentInfo")) set.paymentInfo = split.paymentInfo;
  }
  if (doc._type === "course") {
    const legacy = splitCoursePrice(str("missing"));
    const split = splitPrice(str("price") || legacy.price, str("paymentInfo") || legacy.paymentInfo);
    if (doc.price === undefined || split.price !== str("price")) set.price = split.price;
    if (doc.paymentInfo === undefined) set.paymentInfo = split.paymentInfo;
    if (doc.note === undefined) set.note = legacy.note;
    const slug = (doc.slug as { current?: string } | undefined)?.current;
    if (doc.cardDescription === undefined) set.cardDescription = educationHub.courses.find((item) => item.href.endsWith(`/${slug}`))?.note ?? "";
    if (doc.missing !== undefined) unset.push("missing");
  }
  if (doc._type === "siteSettings") {
    if (doc.communityEnabled === undefined) set.communityEnabled = false;
    if (doc.lineArtOpacity === undefined) set.lineArtOpacity = 0.06;
  }
  if (doc._type === "singingPage") {
    if (doc.pedagogy === undefined) set.pedagogy = withArrayKeys({ ...pedagogy, points: pedagogy.points.map(({ id, ...point }) => ({ _key: id, ...point })) });
    if (doc.difference !== undefined) unset.push("difference");
  }
  if (doc._type === "educationPage") {
    if (doc.praktik !== undefined) unset.push("praktik");
    if (/\bpraktik\b/i.test(str("lede"))) set.lede = str("lede").split(/(?<=[.!?])\s+/).filter((line) => !/\bpraktik\b/i.test(line)).join(" ");
  }
  for (const field of ["menuLinks", "paths"]) {
    if (Array.isArray(doc[field])) {
      const existing = doc[field] as { href?: string }[];
      const filtered = existing.filter((item) => !item.href || isPublicHref(item.href, true));
      if (filtered.length !== existing.length) set[field] = filtered;
    }
  }
  return { set, unset };
}
