import { createClient } from "next-sanity";
import { mkdirSync, writeFileSync } from "node:fs";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "../src/sanity/env";
import { migrationPatch, type MigrationDoc } from "./nov4-migration";

async function main() {
  const apply = process.argv.includes("--apply");
  const token = process.env.SANITY_API_TOKEN?.trim();
  if (apply && !token) throw new Error("SANITY_API_TOKEN krävs för --apply. Utan flaggan görs bara en förhandsgranskning.");
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || SANITY_DATASET,
    apiVersion: "2026-02-01", useCdn: false, perspective: "raw", token,
  });
  const docs = await client.fetch<MigrationDoc[]>(`*[_type in ["siteSettings", "singingPage", "lessonPackage", "course", "educationPage", "homePage", "service"]]`);
  const patches = docs.map((doc) => ({ doc, ...migrationPatch(doc) })).filter(({ set, unset }) => Object.keys(set).length || unset.length);
  console.log(JSON.stringify(patches.map(({ doc, set, unset }) => ({ id: doc._id, set, unset })), null, 2));
  if (!apply) { console.log(`Förhandsgranskning: ${patches.length} dokument. Inget skrivet.`); return; }
  mkdirSync(".audit-temp", { recursive: true });
  writeFileSync(`.audit-temp/sanity-before-nov4-${Date.now()}.json`, JSON.stringify(docs, null, 2));
  let transaction = client.transaction();
  for (const { doc, set, unset } of patches) {
    transaction = transaction.patch(doc._id, (patch) => patch.ifRevisionId(doc._rev).set(set).unset(unset));
  }
  if (patches.length) await transaction.commit();
  console.log(`Migrerade ${patches.length} dokument. Kör igen säkert; migreringen är idempotent.`);
}
main().catch((error: unknown) => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
