# Content Inventory

Structured inventory of **existing public content** on [yellowmusicunited.se](https://www.yellowmusicunited.se/). For migration and IA planning — not copied verbatim into the codebase yet.

---

## Site identity

| Field | Value |
|-------|-------|
| Legal name | Yellow Music United AB |
| Short name | Yellow Music / YMU |
| Tagline (paraphrased) | Musikbolag i Uppsala — vägledning & stöd genom din kreativa resa |
| Founder / CEO | Biim Frischenfeldt (since 2020) |
| Phone | +46 (0) 730 80 52 69 |
| Email | info@yellowmusicunited.se |

---

## Addresses (needs reconciliation in IA)

| Label | Address | Source |
|-------|---------|--------|
| Registered / footer | Östra Ågatan 67, 754 22 Uppsala | Homepage footer |
| Studio / office | Svederusgatan 3A, Fyrislund, Uppsala | About, contact, distribution |
| Meeting mention | Salabacksgatan 58 | Contact page copy |

**Note:** IA and contact area must establish a single source of truth for public-facing location content.

---

## Primary navigation (observed)

Homepage and site structure suggest top-level areas including:

- Home
- Services / tjänster (sångpedagogik, scennärvaro, produktion, distribution)
- About (`/om-oss`)
- Distribution (`/distribution`, `/musikutgivning`, podcast subpages)
- Contact (`/kontakt`)
- Blog / Tips & Tricks (articles)
- Booking CTA (planeringsmöte — currently mailto/link driven, not in-app booking)

Final IA is defined in [`../plans/areas/02-information-architecture.md`](../plans/areas/02-information-architecture.md).

---

## Core messaging themes

1. **Navigator** — guiding creatives through the music industry
2. **Community** — förena musik med människor
3. **Positivity, safety, courage** — positivitet, trygghet, mod
4. **Independence for artists** — no royalty grab; artist retains rights (distribution)
5. **Inclusion & equality** — founder story and values on about page

---

## Services (content buckets)

| Service | Summary |
|---------|---------|
| Sångpedagogik | Vocal coaching tailored to individual needs; Biim’s technique journey |
| Scennärvaro | Stage presence development |
| Introkurs musikproduktion | Introduction to music production |
| Musikutgivning / distribution | Release guidance for singles, EPs, albums; digital distribution; CD/LP digitization |
| Podcast | Recording, editing, coaching in Starlight Studios |
| Starlight Studios | Fully equipped recording studio rental; events (möhippa, birthdays) |
| Grafisk profilering | Mentioned on contact page |
| Kurser / coachning | General coaching framing |

Structured stubs live in `src/content/services.ts`.

---

## Key pages & URLs

| Path | Title / purpose |
|------|-----------------|
| `/` | Homepage — hero, services overview, Trustpilot, CTAs |
| `/om-oss` | About — founder story, Starlight Studios, values, collaborators |
| `/distribution` | Distribution hub — music, podcast, studio |
| `/musikutgivning` | Music release detail |
| `/kontakt` | Contact form, phone, addresses, map |
| Blog posts | e.g. “Vad är en podcast?”, “Jag vill sjunga - hur börjar vi?” |

---

## Calls to action

- **Planeringsmöte** — free planning meeting (mailto / contact driven today)
- **Trustpilot** — external reviews link
- **Hör av dig idag** — contact for distribution and services

Future booking route: `/boka` (placeholder only in this repo).

---

## Collaborators (about page)

- **Tremoloop Music** — Andreas Forsberg
- **MTMax Music** — Martin Axelsson

---

## Content not to duplicate in JSX

Long-form about copy, service descriptions, and blog articles should eventually live in:

- `src/content/` (static phase), or
- CMS (per area plan 06), or
- MDX/content files

See [`../plans/areas/06-content-cms.md`](../plans/areas/06-content-cms.md).
