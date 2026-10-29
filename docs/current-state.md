# Current State

> Fast entry point for a new Cursor agent. Update this file whenever project truth changes.

**Last updated:** 2026-10-29  
**Branch:** `cursor/ymu-redesign-dfcf`

Production target is Cloudflare Workers via OpenNext. Vercel previews still use `next build`. Content can be edited in Sanity at `/studio`; without credentials the site uses `src/content`. See [deploy-cloudflare.md](deploy-cloudflare.md), [cms.md](cms.md), and ADR-003.

## Planning status

| Document | Location | Status |
|----------|----------|--------|
| Master Plan | [`docs/plans/MASTER-PLAN.md`](plans/MASTER-PLAN.md) | **ACTIVE** (nav §5 superseded for the public site by ADR-004) |
| Design System | [`docs/plans/areas/01-design-system.md`](plans/areas/01-design-system.md) | **PREVIEW READY** — tokens evolved for the client visual language |
| Information Architecture | [`docs/plans/areas/02-information-architecture.md`](plans/areas/02-information-architecture.md) | **CLIENT REVISION IMPLEMENTED** — see ADR-004 |
| Homepage | [`docs/plans/areas/03-homepage.md`](plans/areas/03-homepage.md) | **REDESIGN IMPLEMENTED** — human review pending |
| Booking Domain Plan | [`docs/plans/areas/04-booking.md`](plans/areas/04-booking.md) | **PLANNED** — no booking backend |

## What shipped in this revision

Mobile-first public site in Swedish. Adviora-adapted editorial system on the existing yellow identity (Fraunces + Source Sans 3, brand `#F7C006`, accent text `#8C5A12`).

Navigation matches Biim’s menu. Detail pages exist for sånglektioner (steg för steg, lektionspaket), utbildning (musikproduktion för tjejer, låtskrivning), distribution, community, om oss, kontakt, boka and FAQ.

`/boka` and the planning block are UI only. Submit opens `mailto:info@yellowmusicunited.se`. No Google integrations.

## Implemented public routes

| Route | Role |
|-------|------|
| `/` | Homepage: hero, paths, sticky soul split, review placeholders, founder, close |
| `/tjanster` | Services index |
| `/tjanster/sanglektioner` | Singing, pedagogy comparison |
| `/tjanster/sanglektioner/steg-for-steg` | Lesson journey |
| `/tjanster/sanglektioner/lektionspaket` | Packages. Free trial is real. Course prices are placeholders |
| `/tjanster/utbildning` | Education hub, including praktik note |
| `/tjanster/utbildning/musikproduktion-for-tjejer` | Production course |
| `/tjanster/utbildning/latskrivning` | Songwriting |
| `/tjanster/distribution` | Release, podcast, studio hire |
| `/community` | Community |
| `/om-oss` | Story, timeline, principles, Starlight |
| `/kontakt` | Contact facts and planning form |
| `/boka` | Planning form. Dynamic only because it reads `?amne=` |
| `/faq` | Placeholder Q&A from verified facts |
| `/design-system` | Internal preview, not in the public menu |

Temporary redirects (307) from the previous preview routes and the main Wix paths live in `next.config.ts`. Route map: [`docs/ia/route-map.md`](ia/route-map.md). Decision: [`docs/decisions/ADR-004-client-navigation-and-visual-language.md`](decisions/ADR-004-client-navigation-and-visual-language.md).

## Placeholders Biim needs to fill

- **Logo:** vector/source file. The header is a typographic wordmark until then.
- **Photos:** Biim in the sunflower field, portrait, Starlight interior, a lesson, education, community. Do not hotlink Wix. The lesson photo on the current site is credited to Stefan Lindgren.
- **Prices:** six-lesson and twelve-lesson courses. Length and price for both education courses. Praktik details.
- **Reviews:** real quotes, names, roles and ratings from Google or Trustpilot. The tilted cards are empty slots. Trustpilot is linked. Do not invent reviews.
- **Copy still open:** whether the free first lesson and the free planning meeting are both still offered, community membership terms, and confirmation that the studio visit address is Svederusgatan 3A, Fyrislund. Postal address used in the UI is Östra Ågatan 67. Salabacksgatan is omitted.
- **Partner logos:** Tremoloop and MTMax are named in text only.

## Not started

Booking logic, Google Calendar / Business Profile / Places, CMS, analytics, production launch.

## Next intended task

1. Biim reviews the mobile site (375–430) and desktop.
2. She fills the placeholder list above.
3. Do not start booking logic or Google integrations until those areas are explicitly active.
