# Yellow Music United — Agent Operating Contract

This repository is a **foundation-first redesign** of [yellowmusicunited.se](https://www.yellowmusicunited.se/). Agents must preserve product direction, brand constraints, and architectural boundaries.

## Before you work

1. Read [`docs/current-state.md`](docs/current-state.md) — what exists now and what is in scope.
2. Read [`docs/plans/MASTER-PLAN.md`](docs/plans/MASTER-PLAN.md) — product goal, phases, priorities, and status.
3. Read the **relevant area plan** under [`docs/plans/areas/`](docs/plans/areas/) for the domain you are implementing.
4. If touching brand or content, read [`docs/brand/brand-constraints.md`](docs/brand/brand-constraints.md).

If an implementation decision conflicts with the master plan, **stop** and document the conflict in [`docs/decisions/`](docs/decisions/) or update the plan with explicit approval.

## Scope discipline

- Stay inside the **current task scope**. Do not silently expand into booking, CMS, auth, payments, Google integrations, or production backend work unless that area is explicitly active.
- Avoid unrelated refactors, dependency additions, or “while I’m here” changes.
- Preserve Yellow Music brand constraints (see brand docs). The identity is **not** being replaced.
- Use **server components by default**. Add client components only when interaction requires them.
- Do not add large dependencies without a clear need documented in a plan or ADR.

## Architecture boundaries

| Path | Purpose |
|------|---------|
| `src/app/` | Routing and page composition only — no business logic |
| `src/components/` | Reusable visual UI — not feature business logic |
| `src/features/` | Domain logic (booking, reviews, contact, …) |
| `src/integrations/` | External service adapters behind internal interfaces |
| `src/content/` | Structured site content — avoid hardcoding marketing copy in JSX |
| `docs/plans/` | Authoritative planning hierarchy |

External APIs (Google Calendar, Business Profile, Places, etc.) must be wrapped in `src/integrations/`. The rest of the app must not depend on vendor response shapes.

## Before claiming completion

1. Run relevant checks: `npm run lint`, `npm run build`, and TypeScript as applicable.
2. Update [`docs/current-state.md`](docs/current-state.md) when project truth changes (implemented areas, blockers, next task).
3. Update the relevant **area plan status** when work advances or completes.
4. Mark an area `COMPLETE` only when implementation, required tests, acceptance criteria, and documentation are done — not merely because code exists.
5. Record material architecture decisions in [`docs/decisions/`](docs/decisions/) as ADRs.

## Documentation hierarchy

```
MASTER-PLAN.md
    ├── area plans (authoritative per domain)
    ├── docs/decisions/ (ADRs)
    ├── docs/verification/ (acceptance checklists)
    └── docs/handovers/ (session handover notes)
```

Area plan details win over duplicated master-plan detail. Master plan wins over area plans on **product-level** constraints.

## Next.js note

This project uses Next.js App Router with conventions that may differ from older training data. When unsure, consult the installed Next.js docs under `node_modules/next/dist/docs/`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
