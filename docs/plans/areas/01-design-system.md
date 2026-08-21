# Area 01 — Design System

**Status:** NOT_STARTED  
**Depends on:** Foundation (complete), [`brand-constraints.md`](../../brand/brand-constraints.md)  
**Blocks:** Homepage, all page implementation

## Goal

Establish typography, color, spacing, and core UI primitives that feel **clearly Yellow Music** but more professionally art-directed.

## In scope

- Color tokens (yellow identity + neutrals + semantic colors)
- Typography scale (headings, body, UI)
- Spacing and layout primitives (`Container`, section shells)
- Button, link, and text primitives
- Image treatment guidelines (aspect ratios, overlays)
- Dark mode decision (explicit yes/no — default: light-first unless brand requires otherwise)

## Out of scope

- Full homepage layout
- Booking UI
- CMS

## Deliverables

- [ ] Token definitions (CSS variables / Tailwind theme extension)
- [ ] Core components in `src/components/ui/`
- [ ] Documentation of usage rules in this plan
- [ ] Visual reference page or Storybook decision (optional — document choice)

## Acceptance criteria

- [ ] Passes brand constraint review (yellow preserved, not generic SaaS)
- [ ] Responsive primitives documented
- [ ] `npm run build` passes with design system imports
- [ ] Area status updated to COMPLETE only when criteria met

## Notes

Do not import Geist as the final brand font without explicit decision — foundation uses Next.js defaults temporarily.
