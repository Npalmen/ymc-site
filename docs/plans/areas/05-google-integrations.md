# Area 05 — Google Integrations

**Status:** PLANNED  
**Depends on:** 04 Booking (for Calendar), 07 SEO (for Business Profile / Places)  
**Blocks:** Production calendar sync, rich local SERP features

## Goal

Integrate Google services behind stable internal interfaces.

## Planned adapters

```text
src/integrations/google/
  calendar/          → availability & event creation
  business-profile/  → hours, reviews surfacing (policy-dependent)
  places/            → maps, place details
```

## Rules

- No direct Google SDK types in `features/` or `components/`
- Each adapter exposes internal interfaces consumed by features
- Secrets via environment variables (see `.env.example`)

## In scope (future)

- OAuth / service account strategy for Calendar
- Business Profile API usage decision
- Places embed vs static map decision

## Out of scope (foundation)

- Any live API calls or credentials

## Acceptance criteria (future)

- [ ] Adapter interfaces documented
- [ ] Integration tests with mocked Google responses
- [ ] ADR-002 approved and implemented
