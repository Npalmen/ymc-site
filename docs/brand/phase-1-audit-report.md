# Phase 1 — Brand & Content Audit Report

**Audit date:** 2026-08-21  
**Checkpoint before audit:** `b383f97`  
**Primary source:** https://www.yellowmusicunited.se/  
**Pages inspected:** 21 HTML pages + 3 blog category URLs (all HTTP 200)

---

## 1. Brand findings

- Yellow Music’s identity is **recognizable and documentable** from the live site: yellow tonal family, sunflower/founder photography, warm navigator voice, Starlight Studios story.
- **Weaknesses** are structural (Wix template, duplicated homepage copy, inconsistent yellow hex values, weak hierarchy) — not a missing brand.
- Preservation rules updated in [`brand-constraints.md`](brand-constraints.md) using `MUST_PRESERVE` / `MAY_EVOLVE` / `MAY_REDESIGN` / `DO_NOT_USE`.
- **No vector logo** on public site — raster-only via Wix.

---

## 2. Asset inventory summary

- **54** unique Wix media references across crawl; **~12** strategically important brand assets catalogued.
- **PRIMARY:** header logos (2), Biim-Solrosfält, Biim portrait, Yellow Studio photo, OG brand image.
- **SECONDARY:** service heroes, community images.
- **OBSERVED yellows:** `#F7C006`, `#F7CC39`, `#F6B33B`, `#FFD261`, `#ffcd00`, `#FFF2D4` — inconsistent; consolidation deferred to Area 01.
- Assets **not downloaded**; rights marked **RIGHTS_TO_VERIFY** where applicable.

---

## 3. Service inventory summary

- **16** public service/offer entries catalogued from live URLs (see [`content-inventory.md`](content-inventory.md)).
- **VERIFIED_ACTIVE:** core hubs (sångpedagogik, distribution, musikutgivning, podcast, studio rental, planeringsmöte).
- **APPARENTLY_ACTIVE:** subpages live with content but less cross-linked.
- **UNCLEAR:** grafisk profilering (meta mention only).
- **No public pricing** except *kostnadsfri* language — do not invent prices.

---

## 4. Content findings

- Strong founder/about narrative on `/om-oss` — **KEEP**.
- Homepage **triplicates** the same hero paragraphs — **CONSOLIDATE**.
- Footer **Om oss / Kontakt** links point to `/` in markup — likely bug — **KEEP_BUT_EDIT**.
- Two blog posts + blog hub provide useful educational content — **KEEP**.
- Free planning meeting + free first singing lesson both referenced — owner must confirm both remain valid.

---

## 5. Current IA findings

- Navigation uses four dropdown buckets (SÅNGPEDAGOGIK, TJÄNSTER, UTBILDNING, COMMUNITY) with overlapping concepts.
- **No `/boka`** on live site; booking intent scattered across contact channels.
- Master Plan §5 target IA **not implemented** on current site — expected; Area 02 will decide future structure.
- `/utbildning` duplicates `/sångpedagogik` entry — consolidation candidate.

---

## 6. Business-information conflicts

| Issue | Severity for design work |
|-------|--------------------------|
| Östra Ågatan 67 vs Svederusgatan 3A vs Salabacksgatan 58 | **High for launch/SEO/maps**; **Low for Area 01** if addresses excluded from design-system preview |
| Footer link targets wrong | Medium — fix in future implementation |
| Free offer wording (planeringsmöte vs sånglektion) | Medium — verify before conversion copy |

All marked **VERIFY_WITH_OWNER** in content inventory.

---

## 7. Social / trust findings

- **Trustpilot** link verified sitewide — **THIRD_PARTY_VERIFIABLE** (rating not embedded in HTML).
- **No verified social profile URLs** in page HTML — owner must confirm official accounts.
- **No on-site testimonials** — do not fabricate social proof for homepage.
---

## 8. ASSETS_TO_REQUEST_FROM_OWNER

| Asset | Priority |
|-------|----------|
| Original **vector logo** (SVG/EPS/PDF) + export guidelines | **REQUIRED_BEFORE_DESIGN** (high-fidelity logo applications in design-system preview) |
| Highest-resolution **logo raster** if vector unavailable short-term | **REQUIRED_BEFORE_DESIGN** |
| **Canonical business address** (+ map pin intent) | **REQUIRED_BEFORE_LAUNCH** |
| Confirmation of **reusable photo originals** (sunflower, studio, portrait) | **REQUIRED_BEFORE_LAUNCH** |
| Current **service list + pricing** (if any fixed prices exist off-site) | **REQUIRED_BEFORE_LAUNCH** |
| Official **social profile URLs** | **NICE_TO_HAVE** before SEO/social areas |
| Updated **team/studio photography** if existing assets are outdated | **NICE_TO_HAVE** |

---

## 9. Owner verification questions (deduplicated)

1. Which address(es) should be **public-facing** for visits, mail, maps, and legal footer — Östra Ågatan 67, Svederusgatan 3A, and/or Salabacksgatan 58?
2. Is **Salabacksgatan 58** still a valid meeting location, or outdated copy?
3. Are **kostnadsfritt planeringsmöte** and **första kostnadsfria sånglektion** both currently offered?
4. Which services on the site are **actively sold** vs legacy pages that can be retired?
5. Are there **fixed prices or durations** for booking-relevant services (even if not on the website)?
6. Can you provide the **original logo files** and confirm **image reuse rights** for website redesign?
7. What are the official **Instagram / Facebook / other social** profile URLs?
8. Which **Google Business Profile** and **Google Calendar(s)** will eventually be authoritative for booking?

---

## 10. Remaining blockers

| Blocker | Blocks Area 01? | Blocks launch? |
|---------|-----------------|----------------|
| Address ambiguity | No — if DS avoids embedding addresses | Yes |
| Missing vector logo | Partial — DS can start with OBSERVED colors/type; logo specs need owner file for faithful mark | Yes |
| Unverified free offers | No | Yes (conversion copy) |
| Social URLs unknown | No | Yes (SEO/social) |

---

## Gate assessment

### `BRAND_CONTENT_SOURCE_READY` = **PASS**

**Rationale (neutral):**

The audit collected sufficient **verified evidence** from the live site to proceed with Area 01 without materially inventing:

- **Brand character** — yellow family (OBSERVED, documented inconsistency), photography, voice, preservation rules.
- **Service structure** — public catalogue mapped with status classifications; unknowns flagged, not guessed.
- **Business facts** — conflicts documented with `VERIFY_WITH_OWNER`; design system work does not require resolving addresses in Phase 1.

**PASS does not mean** all owner questions are closed. Items in §8–9 remain **required before launch** or **before high-fidelity logo application** in the design system.

**Would BLOCK if:** brand identity were undocumentable, no observable yellow/photo/voice, or service catalogue entirely unavailable from public sources — **none of these apply**.

---

## Validation

Documentation-only phase. `npm run lint` and `npm run build` run after doc commit (see session report).

---

## Next step

**Area 01 — Design System** may begin (`docs/plans/areas/01-design-system.md`).

Conditions:

- Use **OBSERVED** color notes; rationalize yellow family in Area 01 — do not invent an unverified single yellow.
- Request owner vector logo early in Area 01 for faithful mark treatment.
- Do **not** embed unresolved addresses in design-system preview components.

**Phase 2 must not start until this gate — now satisfied.**
