# Area 06 — Content / CMS

**Status:** PLANNED  
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

- ADR-003-content-management-strategy.md

## Acceptance criteria (future)

- [ ] Strategy ADR approved
- [ ] At least blog content editable per chosen model
- [ ] No large marketing strings hardcoded in JSX
