# Yellow Music United

Redesign of [yellowmusicunited.se](https://www.yellowmusicunited.se/) — a music company in Uppsala offering creative guidance, vocal coaching, studio services, and distribution support.

This repository currently contains **foundation only**: Next.js architecture, folder boundaries, and planning documentation. The visual redesign and product features are not implemented yet.

## Stack

- Next.js App Router (server components by default)
- TypeScript
- Tailwind CSS
- ESLint

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project guide

- **Agents:** read [`AGENTS.md`](AGENTS.md) before making changes.
- **Current status:** [`docs/current-state.md`](docs/current-state.md)
- **Master plan:** [`docs/plans/MASTER-PLAN.md`](docs/plans/MASTER-PLAN.md)
- **Brand constraints:** [`docs/brand/brand-constraints.md`](docs/brand/brand-constraints.md)

## Architecture (summary)

```
src/app/          → routes & page composition
src/components/   → reusable UI
src/features/     → domain logic (booking, reviews, contact, …)
src/integrations/ → external service adapters
src/content/      → structured site content
docs/plans/       → planning hierarchy
```

Do not implement booking, CMS, auth, payments, or Google production integrations until the corresponding area plan is active.
