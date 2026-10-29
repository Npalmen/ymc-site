# ADR-003 — Sanity for content, Cloudflare Workers for production

**Status:** accepted  
**Date:** 2026-10-29

## Context

The public copy lived in `src/content` so the site could ship without a CMS. Biim needs to change images, text, prices, services, packages, reviews, FAQ, timeline, principles, and contact details without a deploy. Production should be able to run on Cloudflare’s free commercial tier. Vercel previews should keep working.

## Decision

- Production hosting target is Cloudflare Workers through `@opennextjs/cloudflare`. `npm run build` stays `next build` for Vercel.
- Cache for on-demand revalidation uses R2, a SQLite Durable Object queue, and D1. No time-based ISR, so a missed webhook does not depend on a timer.
- Content is edited in Sanity Studio at `/studio`. Schemas mirror the current pages. `src/content` remains the seed and the fallback when `NEXT_PUBLIC_SANITY_PROJECT_ID` is unset or `siteSettings` has not been published.
- A webhook hits `/api/revalidate`, checks `SANITY_REVALIDATE_SECRET`, and calls `revalidateTag("content", "max")`.
- Images are served from `cdn.sanity.io` through `next/image`.

## Consequences

- The owner must create the Sanity project, the Cloudflare account, R2, D1, and DNS, and must copy Google Workspace MX records before changing nameservers at One.com.
- The Workers Free plan allows commercial use but can reject a Next.js request that spends more than 10 ms of CPU. The paid Workers plan is the fallback.
- Re-running `npm run sanity:seed` overwrites the seeded documents, including later edits to those ids.
