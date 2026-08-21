# Current State

> Fast entry point for a new Cursor agent. Update this file whenever project truth changes.

**Last updated:** 2026-08-21  
**Branch:** `master`  
**Commit:** `02d7819` (foundation scaffold; planning alignment changes uncommitted)

## Planning status

| Document | Location | Status |
|----------|----------|--------|
| Master Plan | [`docs/plans/MASTER-PLAN.md`](plans/MASTER-PLAN.md) | **ACTIVE** — installed |
| Booking Domain Plan | [`docs/plans/areas/04-booking.md`](plans/areas/04-booking.md) | **PLANNED** — installed (canonical path) |

## Phase 0 — Foundation

**Status:** COMPLETE  
**Gate:** `FOUNDATION_READY` — **satisfied**

Delivered:

- Next.js App Router project with TypeScript, Tailwind CSS, ESLint
- Repository folder structure (`src/app`, `src/components`, `src/features`, `src/integrations`, `src/content`, `docs/`, `public/`)
- Planning documentation hierarchy (master plan + area plans)
- Brand constraint and asset/content inventory documents
- Operating instructions ([`AGENTS.md`](../AGENTS.md))
- Minimal placeholder UI:
  - `/` — foundation message only
  - `/boka` — route placeholder only (no booking logic)
- Structured content stubs in `src/content/`

## What is NOT implemented

- Visual redesign / design system
- Homepage composition
- Booking flow, availability engine, booking database, or calendar sync
- Google Calendar, Business Profile, or Places production integrations
- OAuth for Google or any authenticated integration
- Reviews, payments, CMS, authentication
- Production backend beyond foundation scaffold
- SEO, analytics, or launch operations beyond planning docs

## Booking & Google integration status

| Capability | Status |
|------------|--------|
| Booking Domain Plan | Installed at canonical path; status **PLANNED** |
| Booking implementation | **Not started** — `/boka` is a placeholder with mailto fallback only |
| `src/features/booking/` | Directory scaffold only (README + `.gitkeep`) |
| Google production integration | **Not started** |
| `src/integrations/google/` | Directory scaffold only (README + `.gitkeep`) |

## Current active area

**Next active product area:** [`docs/plans/areas/01-design-system.md`](plans/areas/01-design-system.md) (Phase 2 — Design System)

**Note:** Master Plan Phase 1 (Brand & Content Audit, gate `BRAND_CONTENT_SOURCE_READY`) is `NOT_STARTED`. Foundation created partial brand/content inventories, but that gate is not yet satisfied. Design system work may proceed as the next active area per current priority.

## Completed areas

| Area / Phase | Status |
|--------------|--------|
| Phase 0 — Foundation | COMPLETE |
| `FOUNDATION_READY` gate | Satisfied |

## Known blockers

None for planning alignment or design system kickoff.

## Next intended task

1. Read [`docs/plans/areas/01-design-system.md`](plans/areas/01-design-system.md)
2. Read [`docs/brand/brand-constraints.md`](brand/brand-constraints.md)
3. Establish typography, color tokens, spacing, and component primitives
4. Do **not** implement homepage, booking, or Google integrations in this step

## Deferred work

Master Plan Phases 1–11 beyond the next active area remain deferred until their area plans move to `READY` or `IN_PROGRESS`. Booking implementation (Phase 5) requires design system, IA, and booking domain gates (B0–B7) per [`docs/plans/areas/04-booking.md`](plans/areas/04-booking.md).
