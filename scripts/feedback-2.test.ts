import assert from "node:assert/strict";
import test from "node:test";
import { feedbackPatch } from "./feedback-2-migration";
import type { MigrationDoc } from "./nov4-migration";
import { isPublicHref } from "../src/content/visibility";
import { legacyReviewIntro, reviewIntro } from "../src/content/feedback-2";
import { schemaTypes } from "../src/sanity/schemaTypes";
import { sanityClient } from "../src/sanity/client";
import { loadHome, loadSinging, loadEducation, loadPlanning, loadContact } from "../src/sanity/load";

function apply(doc: MigrationDoc) {
  const next = structuredClone(doc);
  const patch = feedbackPatch(doc);
  for (const [path, value] of Object.entries(patch.set)) {
    const [parent, child] = path.split(".");
    if (child) (next[parent] as Record<string, unknown>)[child] = value;
    else next[parent] = value;
  }
  for (const field of patch.unset) delete next[field];
  return next;
}

test("visibility covers encoded, absolute, nested and legacy distribution links without deleting them", () => {
  for (const path of ["/tjanster/distribution", "/tjanster/distribution/?x=1", "https://yellowmusicunited.se/tjanster/%64istribution#studio", "/distribution", "/ge-ut-musik"]) {
    assert.equal(isPublicHref(path), false);
    assert.equal(isPublicHref(path, false, true), true);
  }
  assert.equal(isPublicHref("/community", false, true), false);
  assert.equal(isPublicHref("/community", true, false), true);
  const doc: MigrationDoc = { _id: "homePage", _type: "homePage", _rev: "r", paths: [{ _key: "keep", href: "/tjanster/distribution" }] };
  assert.deepEqual(apply(doc).paths, doc.paths);
});

test("migration is idempotent, preserves custom copy and keys, and accepts cleared optional fields", () => {
  for (const type of ["siteSettings", "homePage", "singingPage", "contactPage", "course"]) {
    const doc: MigrationDoc = { _id: `drafts.${type}`, _type: type, _rev: "r", lede: "Biims text", also: [{ _key: "original", title: "Eget kort" }] };
    const next = apply(doc);
    assert.deepEqual(feedbackPatch(next), { set: {}, unset: [] });
    assert.equal(next.lede, doc.lede);
    assert.deepEqual(next.also, doc.also);
  }
  const migrated = apply({ _id: "siteSettings", _type: "siteSettings", _rev: "r" });
  delete migrated.bookingFormHelp;
  delete migrated.footerAbout;
  delete migrated.footerAddress;
  delete migrated.footerStudio;
  assert.equal(feedbackPatch(migrated).set.bookingFormHelp, undefined);
  assert.equal(feedbackPatch(migrated).set.footerAbout, undefined);
  assert.equal(feedbackPatch(migrated).set.footerAddress, undefined);
  assert.equal(feedbackPatch(migrated).set.footerStudio, undefined);
  const singing = apply({ _id: "singingPage", _type: "singingPage", _rev: "r" });
  delete singing.alsoIntro;
  assert.equal(feedbackPatch(singing).set.alsoIntro, undefined);
  const points = (singing.pedagogy as { points: { _key: string }[] }).points;
  assert.equal(new Set(points.map(p => p._key)).size, 5);
});

test("only the old placeholder introduction is removed; editor text survives", () => {
  assert.equal(reviewIntro(legacyReviewIntro), "");
  assert.equal(reviewIntro(null), "");
  assert.equal(reviewIntro("Biims ingress"), "Biims ingress");
  const next = apply({ _id: "homePage", _type: "homePage", _rev: "r", reviews: { title: "Egen rubrik", note: legacyReviewIntro } });
  assert.deepEqual(next.reviews, { title: "Egen rubrik", note: "", linkLabel: "Läs verifierade omdömen på Trustpilot" });
});

test("editor fields have valid, discoverable Studio groups", () => {
  for (const schema of schemaTypes) {
    if (!("fields" in schema)) continue;
    const groups = new Set((schema.groups ?? []).map(g => g.name));
    for (const field of schema.fields) {
      if (field.group) for (const group of [field.group].flat()) assert.ok(groups.has(group), `${schema.name}.${field.name}: ${group}`);
    }
  }
  const singing = schemaTypes.find(s => s.name === "singingPage")!;
  assert.ok(singing.groups?.some(g => g.title === "Vår sångpedagogik"));
});

test("Sanity fields reach the actual page loaders, including empty optional content", async () => {
  assert.ok(sanityClient);
  const original = sanityClient.fetch;
  const fixtures: Record<string, unknown> = {
    siteSettings: { _id: "siteSettings", feedback2Version: 1, bookingFormHeading: "CMS-rubrik", bookingFormSubmit: "CMS-knapp", bookingFormHelp: "" },
    homePage: { reviews: { note: "", linkLabel: "CMS-länk" } },
    singingPage: { pedagogy: { points: [{ id: "stable-key", title: "CMS-pedagogik", body: "Redigerad text", icon: "sun" }] }, alsoEnabled: false, alsoTitle: "CMS-sektion", alsoIntro: "", also: [] },
    contactPage: { studioCard: "" },
    planningPage: { note: "Äldre hjälptext som inte ska visas" },
  };
  sanityClient.fetch = (async (query: string) => {
    for (const [id, value] of Object.entries(fixtures)) if (query.includes(`_id == "${id}"`)) return value;
    if (query.includes('_type == "course"')) return [{ title: "CMS-kurs", slug: "latskrivning", cardDescription: "CMS-korttext" }];
    return null;
  }) as typeof sanityClient.fetch;
  try {
    const singing = await loadSinging();
    assert.equal(singing.pedagogy.points[0].title, "CMS-pedagogik");
    assert.equal(singing.pedagogy.points[0].id, "stable-key");
    assert.equal(singing.alsoEnabled, false);
    assert.equal(singing.alsoIntro, "");
    assert.deepEqual(singing.also, []);
    assert.equal((await loadEducation()).courses[0].note, "CMS-korttext");
    assert.equal((await loadHome()).reviews.note, "");
    assert.equal((await loadHome()).reviews.linkLabel, "CMS-länk");
    const planning = await loadPlanning();
    assert.equal(planning.formHeading, "CMS-rubrik");
    assert.equal(planning.submitLabel, "CMS-knapp");
    assert.equal(planning.note, "");
    assert.equal((await loadContact()).studioCard, "");
  } finally { sanityClient.fetch = original; }
});
