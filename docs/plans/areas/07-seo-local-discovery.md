# Area 07 — SEO & Local Discovery

> 2026-11-16: Feedback 2 implemented locally under ADR-006. All 14 requested UI/CMS items are covered; build, lint, typecheck, 16 tests and responsive/production-preview checks pass. See [verification](../../verification/feedback-2/README.md) and [Studio guide](../../biim-studio-guide.md). Remote migration is prepared and verified but awaits SANITY_API_TOKEN; human review and deployment remain pending. Not marked COMPLETE.

> 2026-11-05 status: November client revision implemented locally under ADR-005. Automated and responsive checks are recorded in [verification](../../verification/nov4/README.md). Human visual approval, final artwork and remote CMS migration remain pending; this area is not marked COMPLETE. The authorized November scope supersedes older conflicting typography, comparison, internship and Community details below.

**Status:** PLANNED  
**Depends on:** 02 IA, 03 Homepage, location content resolved  
**Blocks:** Launch gate G5

## Goal

Improve organic and local discovery for “musikbolag Uppsala”, vocal coaching, studio rental, and related queries.

## In scope (future)

- Metadata strategy per route (`generateMetadata`)
- Structured data (LocalBusiness, Organization)
- Sitemap and robots.txt
- Canonical URLs and redirects from Wix
- Google Business Profile alignment (with area 05)
- Swedish language SEO

## Out of scope (foundation)

- Production Search Console setup

## Acceptance criteria (future)

- [ ] All public routes have title/description
- [ ] LocalBusiness schema validates
- [ ] Redirect map tested
