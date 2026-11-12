# Area 06 — Content / CMS

> 2026-11-05 status: November client revision implemented locally under ADR-005. Automated and responsive checks are recorded in [verification](../../verification/nov4/README.md). Human visual approval, final artwork and remote CMS migration remain pending; this area is not marked COMPLETE. The authorized November scope supersedes older conflicting typography, comparison, internship and Community details below.

**Status:** IMPLEMENTED — Sanity per ADR-003; November schema/migration ready, remote apply pending
**Depends on:** 02 Information Architecture
**Blocks:** Easy editing of blog and marketing copy without deploys

## Goal

Define how non-code content (blog, service copy updates, team bios) is authored and delivered.

## Options (decision required)

| Approach | Pros | Cons |
|----------|------|------|
| Static TS/MDX in repo | Simple, versioned | Requires deploy for edits |
| Headless CMS | Editor-friendly | Cost, complexity |
| Hybrid | Core static + CMS for blog | Two systems |

## In scope (future)

- Content model for services, blog, team
- Migration of existing blog posts from content inventory
- Preview workflow

## Out of scope (foundation)

- CMS vendor selection implementation

## Related ADR (to be created)

- ADR-003-sanity-and-cloudflare.md

## Acceptance criteria (future)

- [ ] Strategy ADR approved
- [ ] At least blog content editable per chosen model
- [ ] No large marketing strings hardcoded in JSX
