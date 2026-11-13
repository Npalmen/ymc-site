import assert from "node:assert/strict";
import test from "node:test";
import { migrationPatch, type MigrationDoc } from "./nov4-migration";
import { splitPrice, splitCoursePrice } from "../src/content/pricing";
import { isPublicHref } from "../src/content/visibility";

test("legacy lesson and course copy splits without losing payment terms", () => {
  assert.deepEqual(splitPrice("4 100 kr • Betalas månadsvis: 2 050 kr/mån i 2 månader."), { price: "4 100 kr", paymentInfo: "Betalas månadsvis: 2 050 kr/mån i 2 månader." });
  assert.deepEqual(splitCoursePrice("6 x 90 minuter | 6 150 kr | Betalas månadsvis: 3 075 kr/månad i 2 månader"), { price: "6 150 kr", note: "6 x 90 minuter", paymentInfo: "Betalas månadsvis: 3 075 kr/månad i 2 månader" });
  assert.equal(splitPrice("Kostnadsfri").price, "Kostnadsfri");
  assert.deepEqual(splitPrice(null, null), { price: "", paymentInfo: "" });
  assert.deepEqual(splitCoursePrice(null), { price: "", paymentInfo: "", note: "" });
});

test("migration is idempotent and preserves authored fields and array keys", () => {
  const doc: MigrationDoc = { _id: "drafts.course-test", _rev: "r1", _type: "course", title: "Min kurs", lede: "Egen ingress", missing: "6 x 90 minuter | 6 150 kr | Betalas månadsvis: 3 075 kr/månad i 2 månader", sections: [{ _key: "keep", heading: "Min rubrik" }] };
  const patch = migrationPatch(doc);
  const next = { ...doc, ...patch.set };
  for (const field of patch.unset) delete next[field];
  assert.deepEqual(migrationPatch(next), { set: {}, unset: [] });
  assert.equal(next.lede, doc.lede);
  assert.deepEqual(next.sections, doc.sections);
});

test("visibility defaults closed and handles legacy and nested URLs", () => {
  for (const href of ["/community", "/community?x=1", "/yellowmusic-blogg/post", "https://yellowmusicunited.se/community#join"]) assert.equal(isPublicHref(href), false);
  assert.equal(isPublicHref("/community", true), true);
  for (const href of ["/praktik", "/tjanster/utbildning/praktik", "/praktik/ansok"]) assert.equal(isPublicHref(href, true), false);
  assert.equal(isPublicHref("/tjanster/utbildning"), true);
});
