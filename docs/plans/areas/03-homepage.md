# Area 03 — Homepage

**Status:** PLANNED  
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
