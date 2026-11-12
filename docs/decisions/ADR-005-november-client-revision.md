# ADR-005 — November client revision

**Status:** accepted by explicit task instruction, 2026-11-05.

The owner requested all 16 November changes on `ymu-batch-nov4`, with local commits and no push or PR. This supersedes the brief's older main/PR instruction and the older typography, comparison-table, internship and public-Community directions in the plans.

- Newsreader replaces Fraunces. Source Sans 3 and the original yellow/logo artwork remain. Studio surfaces use warm brown `#493021` with `#62452f` at the light end of the requested gradients.
- The singing comparison is replaced with five editable strengths. Lesson and course prices share `PricingCards`, with separate `price`, `paymentInfo` and `note`. Education cards have an independent `cardDescription`.
- Community is an explicit opt-in in `siteSettings`; missing/false is closed. Navigation, homepage, planning topics, sitemap and direct route access observe this state. Internship destinations redirect permanently to education and are excluded from CMS-driven routes and navigation.
- The header and footer have separate logo settings, because the published header asset is a square sunflower while the footer must use the existing text wordmark. Fixed image boxes prevent layout shifts for either aspect ratio.
- Optional line-art is fixed behind page content. Optional transparent portrait enables the full-width sticky pale-yellow swirl treatment. Missing assets retain the existing layout and require no placeholder downloads.
- Existing Sanity copy is preserved with a field-level, revision-guarded, idempotent migration. Normal page reads understand legacy price strings until that migration is applied. The destructive full seed is not used against the live dataset.

No new production dependency, booking backend, deployment or PR is part of this change. Sanity write credentials and the two final artwork uploads remain external prerequisites; see the verification report.
