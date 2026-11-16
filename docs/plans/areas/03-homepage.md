# Area 03 — Homepage

> 2026-11-16: Feedback 2 implemented locally under ADR-006. All 14 requested UI/CMS items are covered; build, lint, typecheck, 16 tests and responsive/production-preview checks pass. See [verification](../../verification/feedback-2/README.md) and [Studio guide](../../biim-studio-guide.md). Remote migration is prepared and verified but awaits SANITY_API_TOKEN; human review and deployment remain pending. Not marked COMPLETE.

> 2026-11-05 status: November client revision implemented locally under ADR-005. Automated and responsive checks are recorded in [verification](../../verification/nov4/README.md). Human visual approval, final artwork and remote CMS migration remain pending; this area is not marked COMPLETE. The authorized November scope supersedes older conflicting typography, comparison, internship and Community details below.

**Status:** REDESIGN IMPLEMENTED (2026-10-29). Portal sections replaced by the client homepage (hero, paths, soul split, review slots, founder, close). Human review pending.  
**Depends on:** 01 Design System (`READY`), 02 Information Architecture (`READY`)  
**Blocks:** Launch perception / first impression

## Goal

Ship a responsive homepage that communicates Yellow Music’s navigator/community positioning with professional art direction.

## In scope

- Hero with brand photography (sunflower/studio assets after migration)
- Services overview with clear CTAs
- Trust signals (Trustpilot link — not embedded reviews yet)
- Community / values section
- Footer with contact and social

## Out of scope

- In-app booking (link to `/boka` placeholder until area 04)
- CMS-driven blog module
- Google Business Profile widgets

## Content sources

- `src/content/site.ts`, `services.ts`, `navigation.ts`
- Brand assets from `public/images/` after migration

## Acceptance criteria

- [ ] Matches brand constraints doc
- [ ] Lighthouse performance budget defined and met
- [ ] Responsive at mobile / tablet / desktop
- [ ] No hardcoded long copy scattered in JSX
