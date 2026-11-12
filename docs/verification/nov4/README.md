# November revision — verification and handover

Branch: `ymu-batch-nov4`. Date: 2026-11-05. No deployment, push or PR.

**Local commits blocked by workspace permissions:** `git add` failed with `Unable to create .git/index.lock: Permission denied`. `.git` is read-only in this session. All edits remain uncommitted; `ymu-req` is ignored and no files from that folder were staged. Suggested commit grouping once Git is writable: content/schema/migration, visual/navigation changes, verification/documentation.

## Scope by point

| # | Implementation | Remaining |
|---|---|---|
| 1 | Header logo box enlarged 25%, fixed height and `object-fit: contain`. Supports the published square mark and local wide wordmark. | Owner visual approval. |
| 2 | Mobile Services starts collapsed on every menu opening; smaller Source Sans 3 labels and rotating triangle. | — |
| 3 | Desktop logo centered, links next to booking on right. Both menu levels support hover, keyboard focus and Escape. Intermediate desktop widths use two header rows to avoid collisions. | — |
| 4 | Brown semantic tokens, descending brown gradients in trial and footer. Contrast checked against the lightest gradient stop. | — |
| 5 | Centered text wordmark in footer, independently editable as `footerLogo`; close CTA sunflower removed. | — |
| 6 | Heading/year/timeline text scroll animation removed outside Soul. Soul retains reveal and has a sticky image shorter than its text column. | — |
| 7 | Newsreader headings through `next/font/google`, roman cuts, no playful alternate glyphs. Source Sans 3 retained. | — |
| 8 | Comparison component/data/schema replaced by editable five-point pedagogy, brown outline icons on yellow. | Apply CMS migration to expose new populated fields in Studio. |
| 9 | Step-by-step label uses the shared Pill. | — |
| 10 | Large amount separated from smaller payment information and duration. Fallback/seed contain verified published prices; legacy CMS values split at read time. | Apply migration to persist separate CMS fields. |
| 11 | All course routes, including dynamic courses, use the same PricingCards component; no course check-list or yellow dashed price panel. | — |
| 12 | Course `cardDescription` controls education overview independently of its lede. Seed/fallback use short descriptions. | Apply migration to populate CMS field. |
| 13 | Internship content/model field removed, legacy/dynamic URLs excluded, permanent redirects to education. | — |
| 14 | Community defaults off, disappears from public links and planning topics; direct route returns 404; absent from sitemap. | Toggle on only when ready to publish. |
| 15 | `siteSettings.lineArt` plus bounded opacity (default 0.06), fixed behind content, absent when no asset. | Upload final line-art in Sanity. |
| 16 | `aboutPage.portraitCutout` enables frameless portrait over a full-width sticky pale-yellow swirl. Existing story/portrait remains when empty. | Upload Biim's transparent cutout PNG. |

## Checks

- `npm install --cache .audit-temp/npm-cache`: passed. Default user cache was read-only. One incomplete package left by that failed first attempt was restored from its exact locked tarball; no production dependency added.
- `npm run build`: passed (Next 16.4.3, all 22 generated routes).
- `npm run lint`, `npm run typecheck`, `npm test`: passed, 11 tests. Unit suite covers legacy prices including CMS null values, migration idempotence, visibility, stable seed keys and existing booking/rich-text behavior.
- Browser checks use local Chrome and the existing published Sanity dataset, without writing it. Baseline is a local archive of the starting HEAD. Routes: home, singing, education, production course, about; widths 390, 768, 1440. No horizontal overflow in these 15 route/width combinations. Also inspect header geometry at 1080/1280.
- Font computed styles confirm Fraunces before and Newsreader after. Canonicals, metadata, structured data and booking links remain; Community exclusion and internship redirects are intentional SEO changes.
- A live CMS null value initially exposed a price-parser error; fixed and covered by a regression assertion.
- Browser assertions passed: mobile menu reset, desktop focus/Escape, header centering and bounds at five widths, sticky Soul image, five pedagogy points, price separation, shared course card, absence of text reveal elsewhere, empty-artwork fallback, Community 404 and sitemap exclusion, four permanent redirects, no browser exceptions.
- Populated artwork states were also tested with temporary fixtures at 390/768/1440: fixed line-art at 0.06 opacity, full-width sticky swirl, cutout and no overflow. Reduced-motion mode creates no reveal words. Fixtures were not saved to CMS or used as final assets.
- Contrast calculations: 70% inverse text over lightest brown gradient stop **4.81:1**; yellow over brown **5.18:1**; brown on yellow **7.23:1**; muted text on canvas **6.83:1**; accent on canvas **5.29:1**. All exceed AA's 4.5:1 for normal text. Final uploaded artwork still needs its own visual check.
- `npm install` reports 31 existing dependency audit findings (20 moderate, 11 high). Dependency upgrades were not bundled into this design task.

## Sanity migration

`npm run sanity:migrate:nov4` performs a read-only preview. It found seven published documents needing changes. No write token is available in this workspace, so the remote dataset has **not** been migrated.

With `SANITY_API_TOKEN` set in the executing environment, run:

```sh
npm run sanity:migrate:nov4 -- --apply
```

This backs up the fetched documents locally under ignored `.audit-temp`, patches only affected fields, guards each patch with `_rev`, preserves existing array keys, and also processes drafts when the token grants access. Re-running produces no further changes. Do not run the full `sanity:seed` on the existing production dataset: it replaces authored documents. After publishing/revalidating, confirm the changed fields in `/studio` and the public page.

## Before / after screenshots

Full-page captures, same local content source and widths. Phone browser chrome from the supplied references is not replicated.

| Page | 390 px | 768 px | 1440 px |
|---|---|---|---|
| Home | [Before](before/home-390.png) · [After](after/home-390.png) | [Before](before/home-768.png) · [After](after/home-768.png) | [Before](before/home-1440.png) · [After](after/home-1440.png) |
| Singing | [Before](before/singing-390.png) · [After](after/singing-390.png) | [Before](before/singing-768.png) · [After](after/singing-768.png) | [Before](before/singing-1440.png) · [After](after/singing-1440.png) |
| Education | [Before](before/education-390.png) · [After](after/education-390.png) | [Before](before/education-768.png) · [After](after/education-768.png) | [Before](before/education-1440.png) · [After](after/education-1440.png) |
| Course | [Before](before/course-390.png) · [After](after/course-390.png) | [Before](before/course-768.png) · [After](after/course-768.png) | [Before](before/course-1440.png) · [After](after/course-1440.png) |
| About | [Before](before/about-390.png) · [After](after/about-390.png) | [Before](before/about-768.png) · [After](after/about-768.png) | [Before](before/about-1440.png) · [After](after/about-1440.png) |

The about screenshots show the real empty-cutout fallback, not a substitute portrait. Final uploaded imagery still needs visual review.
