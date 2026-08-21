# Current State

> Fast entry point for a new Cursor agent. Update this file whenever project truth changes.

**Last updated:** 2026-08-21  
**Branch:** `master`

## Planning status

| Document | Location | Status |
|----------|----------|--------|
| Master Plan | [`docs/plans/MASTER-PLAN.md`](plans/MASTER-PLAN.md) | **ACTIVE** |
| Design System | [`docs/plans/areas/01-design-system.md`](plans/areas/01-design-system.md) | **PREVIEW READY** |
| Information Architecture | [`docs/plans/areas/02-information-architecture.md`](plans/areas/02-information-architecture.md) | **IA PREVIEW READY** |
| Homepage | [`docs/plans/areas/03-homepage.md`](plans/areas/03-homepage.md) | **PORTAL REFACTOR** (Area 02) |
| Booking Domain Plan | [`docs/plans/areas/04-booking.md`](plans/areas/04-booking.md) | **PLANNED** |

## Phase 0 — Foundation

**Status:** COMPLETE · `FOUNDATION_READY` satisfied

## Phase 1 — Brand & Content Audit

**Status:** COMPLETE · `BRAND_CONTENT_SOURCE_READY` satisfied

## Area 01 — Design System

**Status:** PREVIEW READY  
`DESIGN_SYSTEM_APPROVED` — pending explicit sign-off

## Area 02 — Information Architecture

**Status:** IA PREVIEW READY · gate `IA_PREVIEW_READY` satisfied (human review pending)

**Route map:** [`docs/ia/route-map.md`](ia/route-map.md)

### Implemented public routes

| Route | Role |
|-------|------|
| `/` | Portal homepage |
| `/sang` | Sång hub |
| `/studio` | Studio & produktion hub |
| `/utbildning` | Utbildning hub |
| `/ge-ut-musik` | Ge ut musik hub |
| `/community` | Community hub |
| `/yellow-music` | Company / founder |
| `/kontakt` | Contact |
| `/boka` | Booking placeholder (no logic) |
| `/design-system` | Internal DS preview |

Child service detail routes **not** built (by design).

### Key implementation

- Navigation: [`src/content/navigation.ts`](../src/content/navigation.ts), [`src/content/worlds.ts`](../src/content/worlds.ts)
- **Yellow Orbit:** [`src/components/navigation/yellow-orbit.tsx`](../src/components/navigation/yellow-orbit.tsx)
- Hub content: [`src/content/areas/`](../src/content/areas/)
- Hub shells: [`src/components/sections/hub/`](../src/components/sections/hub/)
- Header/footer: multi-page nav model

## Area 03 — Homepage

**Status:** Refactored to **portal** under Area 02 (no longer long one-page)

Sections: Hero → Yellow Orbit → Featured → About → Trust → CTA

Removed from homepage: full singing, studio, release sections (content lives on hub pages).

## Current active area

**Area 02 — Information Architecture** at `IA_PREVIEW_READY`. Await human visual review before child detail pages or `INFORMATION_ARCHITECTURE_APPROVED`.

## Owner dependencies (unchanged)

- Vector logo, approved photography, canonical address, partner logo rights, free-offer verification

## Next intended task

1. Visual review at 375–1920px (mobile priority)
2. Approve IA preview (`INFORMATION_ARCHITECTURE_APPROVED`)
3. Select which child detail pages to build next
4. Do **not** start booking logic or Google integrations until planned
