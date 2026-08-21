# Area 02 — Information Architecture

**Status:** PLANNED  
**Depends on:** Brand constraints, content inventory  
**Blocks:** Homepage, booking, SEO

## Goal

Define routes, navigation, content ownership, and URL strategy for the redesigned site.

## In scope

- Primary and footer navigation structure
- Route map (`/`, `/om-oss`, services, `/kontakt`, `/boka`, blog, legal)
- Content source per route (`src/content/` vs future CMS)
- Resolve location/address inconsistencies (see content inventory)
- Swedish URL slugs vs English — decision required
- Redirect plan from current Wix URLs

## Out of scope

- Visual design
- Booking logic
- CMS implementation

## Open decisions

1. Single canonical studio address for maps and schema.org
2. Blog URL pattern (`/blog/` vs `/tips/`)
3. Service pages: hub + detail vs single long pages

## Acceptance criteria

- [ ] Route map documented and reflected in `src/content/navigation.ts`
- [ ] Redirect list drafted for launch area
- [ ] Content ownership table (static vs CMS) approved
