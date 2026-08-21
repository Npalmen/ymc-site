# Verification

Acceptance checklists and test plans for major gates (see [`docs/plans/MASTER-PLAN.md`](../plans/MASTER-PLAN.md)).

## Usage

Before marking an area `COMPLETE`:

1. Copy or reference the relevant checklist here.
2. Record date, agent/human, and pass/fail per criterion.
3. Link to PR or commit range.

## Foundation — `FOUNDATION_READY` checklist

Gate defined in Master Plan Phase 0.

- [x] `npm run dev` starts locally
- [x] `npm run build` passes
- [x] `npm run lint` passes
- [x] TypeScript strict project compiles
- [x] Folder structure matches architecture
- [x] Documentation hierarchy exists
- [x] AGENTS.md operating contract exists
- [x] Brand constraints documented
- [x] Master Plan installed and active
- [x] Booking Domain Plan installed at canonical path
- [x] No booking/CMS/auth/payment/Google production implementations

**Gate status:** `FOUNDATION_READY` — satisfied (2026-08-21, commit `b383f97`)

---

## Phase 1 — `BRAND_CONTENT_SOURCE_READY` checklist

Gate defined in Master Plan Phase 1.

- [x] Live site inspected (comprehensive crawl)
- [x] Brand constraints updated with preservation rules
- [x] Asset inventory updated (logo, OBSERVED colors, photography)
- [x] Content inventory updated (pages, services, IA, business info)
- [x] Service catalogue with verification status
- [x] Business conflicts documented (`VERIFY_WITH_OWNER`)
- [x] Trust / social audit completed
- [x] Owner verification list produced
- [x] Phase 1 audit report with gate assessment
- [x] No UI / design system / booking implementation in this phase

**Gate status:** `BRAND_CONTENT_SOURCE_READY` — **PASS** (2026-08-21, see [`docs/brand/phase-1-audit-report.md`](../brand/phase-1-audit-report.md))

---

## Area 01 — `DESIGN_SYSTEM_PREVIEW_READY` checklist

Gate defined in [`docs/plans/areas/01-design-system.md`](../plans/areas/01-design-system.md) §31 D6.

- [x] Semantic CSS tokens (`src/styles/tokens.css`)
- [x] Typography selected (Source Sans 3 + Fraunces) and documented
- [x] Core UI primitives in `src/components/ui/`
- [x] Editorial compositions in `src/components/sections/`
- [x] Navigation shell (desktop + mobile)
- [x] Booking visual primitives (fixture only)
- [x] `/design-system` internal preview route (`noindex`)
- [x] `npm run lint` passes
- [x] `npm run build` passes
- [x] Refinement pass — editorial rhythm, premium details, cohesive preview (2026-08-21)
- [ ] Human visual review at 375 / 430 / 768 / 1024 / 1440 / 1920 px
- [ ] `DESIGN_SYSTEM_APPROVED` — **pending**

**Gate status:** `DESIGN_SYSTEM_PREVIEW_READY` — **satisfied** (2026-08-21, pending commit)  
**Next gate:** `DESIGN_SYSTEM_APPROVED` requires explicit human sign-off after preview inspection.
