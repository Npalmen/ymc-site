import { createClient } from "next-sanity";
import { mkdirSync, writeFileSync } from "node:fs";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../src/sanity/env";
import { feedbackPatch } from "./feedback-2-migration";
import type { MigrationDoc } from "./nov4-migration";

async function main() {
  const apply = process.argv.includes("--apply");
  const token = process.env.SANITY_API_TOKEN?.trim();
  if (apply && !token) throw new Error("SANITY_API_TOKEN krävs för --apply.");
  const client = createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || SANITY_PROJECT_ID, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || SANITY_DATASET, apiVersion: "2026-02-01", useCdn: false, perspective: "raw", token });
  const docs = await client.fetch<MigrationDoc[]>('*[_type in ["siteSettings", "homePage", "singingPage", "contactPage", "planningPage", "course", "lessonPackage", "educationPage", "service"]]');
  // Create missing singletons, but never overwrite a published or draft document.
  const missing = ["siteSettings", "homePage", "singingPage", "contactPage"].filter(id => !docs.some(d => d._id === id)).map(id => ({ _id: id, _type: id, _rev: "" }));
  const patches = [...docs, ...missing].map(doc => ({ doc, ...feedbackPatch(doc, docs.find(d => d._id === (doc._id.startsWith("drafts.") ? "drafts.planningPage" : "planningPage")) ?? docs.find(d => d._id === "planningPage")) })).filter(p => Object.keys(p.set).length || p.unset.length);
  const report = patches.map(({doc,set,unset}) => ({id:doc._id,set,unset}));
  mkdirSync("docs/verification/feedback-2", { recursive: true });
  writeFileSync("docs/verification/feedback-2/migration-preview.json", JSON.stringify(report, null, 2));
  console.log(`Förhandsgranskning: ${patches.length} dokument. Rapport sparad (inga token).`);
  if (!apply) return;
  mkdirSync(".audit-temp", { recursive: true });
  writeFileSync(`.audit-temp/sanity-before-feedback2-${Date.now()}.json`, JSON.stringify(docs, null, 2));
  let transaction = client.transaction();
  for (const { doc, set, unset } of patches) {
    if (!doc._rev) transaction = transaction.createIfNotExists({ _id: doc._id, _type: doc._type });
    transaction = transaction.patch(doc._id, p => (doc._rev ? p.ifRevisionId(doc._rev) : p).set(set).unset(unset));
  }
  if (patches.length) await transaction.commit();
  console.log(`Migrerade ${patches.length} dokument.`);
}
main().catch(() => { console.error("Migreringen misslyckades. Kontrollera anslutning, tokenbehörighet och dokumentrevisioner. Ingen token loggas."); process.exitCode = 1; });
