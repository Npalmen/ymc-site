# Content Inventory

Phase 1 audit of public content on [yellowmusicunited.se](https://www.yellowmusicunited.se/).  
**Audit date:** 2026-08-21  
**Method:** HTML crawl of 21 pages + 3 blog category URLs; no copy rewritten.

---

## Site identity (verified)

| Field | Value | Source |
|-------|-------|--------|
| Legal name | Yellow Music United AB | Footer / meta sitewide |
| Short names | Yellow Music, YMU | Copy sitewide |
| Tagline (paraphrased) | Musikbolag i Uppsala — vägledning & stöd genom din kreativa resa | Homepage |
| Founder / CEO | Biim Frischenfeldt (since 2020) | `/om-oss` |
| Phone | +46 (0) 730 80 52 69 / 073 080 52 69 | Header, contact |
| Email | info@yellowmusicunited.se | Header, contact, CTAs |

---

## Business information audit

### Contradiction table

| INFORMATION | SOURCE | VALUE | CONFLICT | ACTION_REQUIRED |
|-------------|--------|-------|----------|-----------------|
| Registered / postal address | Homepage footer area | Östra Ågatan 67, 754 22 Uppsala | Differs from studio address on contact | **VERIFY_WITH_OWNER** — which is registered vs visit |
| Studio / office | `/kontakt`, `/om-oss`, distribution copy | Svederusgatan 3A, Fyrislund | Primary visit location in contact copy | **VERIFY_WITH_OWNER** — canonical public address |
| Meeting location | `/kontakt` body copy | Salabacksgatan 58 | Third address; contact says "ses hos Yellow Music på Salabacksgatan 58" | **VERIFY_WITH_OWNER** — current or outdated |
| Area label | Homepage hero | Östra Ågatan 67 block + "Fyrislund" in story sections | Same page mixes postal vs studio area | Consolidate after owner confirmation |
| Bus direction | `/kontakt` | Bus 6, Mistelgatan Södra | Tied to Svederusgatan | Keep if Svederus confirmed |
| Free offers | Homepage, `/sanglektioner-uppsala`, blog | "kostnadsfritt planeringsmöte"; "första kostnadsfria sånglektion" | Two different free-entry offers | **VERIFY_WITH_OWNER** — both still active? |
| `/utbildning` vs `/sångpedagogik` | Both live (200) | Same OG image & similar meta | Duplicate entry points | **CONSOLIDATE** in future IA |

---

## Current information architecture (factual — not future design)

### Primary navigation (header dropdown — observed)

Top-level menu buckets on live site:

| Nav label | Typical children / targets |
|-----------|---------------------------|
| **SÅNGPEDAGOGIK** | `/sångpedagogik`, `/sanglektioner-uppsala`, `/scencoachning`, `/fonationsteknik`, `/hälsosamsångteknik`, `/sångochkomp` |
| **TJÄNSTER** | `/tjänster`, `/distribution`, `/musikutgivning`, `/podcast` |
| **UTBILDNING** | `/utbildning`, `/låtskrivande`, `/musikproduktionskurs-för-tjejer`, `/praktik` |
| **COMMUNITY** | `/community`, `/yellowmusic-blogg` |

Global CTAs / utilities (observed):

- Header: phone, email, logo → home
- Homepage buttons: **SÅNGPEDAGOGIK ♫**, service path buttons, Trustpilot
- Footer links: **Om oss**, **Kontakt** (both currently link to `/` in footer markup — **VERIFY_WITH_OWNER** / bug)
- Wix Chat widget (embedded)
- No dedicated `/boka` on live site — booking via contact / mail / phone

### Full public page graph (crawl)

| URL path | Status | Title (observed) |
|----------|--------|------------------|
| `/` | 200 | Yellow Music United AB - Musikbolag i Uppsala |
| `/om-oss` | 200 | YELLOW MUSIC UNITED AB \| Om oss |
| `/kontakt` | 200 | YELLOW MUSIC UNITED AB \| Kontakt |
| `/tjänster` | 200 | TJÄNSTER \| Yellow Music United AB |
| `/distribution` | 200 | DISTRIBUTION \| Yellow Music United AB |
| `/musikutgivning` | 200 | DISTRIBUTION \| Musikutgivning |
| `/podcast` | 200 | DISTRIBUTION \| Podcast |
| `/sångpedagogik` | 200 | SÅNGPEDAGOGIK \| Yellow Music United AB |
| `/sanglektioner-uppsala` | 200 | Sånglektioner i Uppsala |
| `/scencoachning` | 200 | SÅNGPEDAGOGIK \| Scencoachning |
| `/fonationsteknik` | 200 | SÅNGPEDAGOGIK \| Fonationsteknik |
| `/hälsosamsångteknik` | 200 | SÅNGPEDAGOGIK \| Hälsosam sångteknik |
| `/sångochkomp` | 200 | SÅNGPEDAGOGIK \| Sång & komp |
| `/utbildning` | 200 | Redirect/duplicate of sångpedagogik cluster |
| `/låtskrivande` | 200 | UTBILDNING \| Låtskrivande |
| `/musikproduktionskurs-för-tjejer` | 200 | UTBILDNING \| Musikproduktionskurs |
| `/praktik` | 200 | UTBILDNING \| Praktik |
| `/community` | 200 | YELLOW MUSIC UNITED AB \| Community |
| `/yellowmusic-blogg` | 200 | Blogg |
| `/yellowmusic-blogg/categories/tips-tricks` | 200 | Category |
| `/yellowmusic-blogg/categories/community` | 200 | Category |
| `/yellowmusic-blogg/categories/media` | 200 | Category |
| `/post/vad-är-en-podcast` | 200 | Blog post |
| `/post/jag-vill-sjunga-hur-börjar-vi` | 200 | Blog post |

### Structural problems (current site)

1. **Overlapping nav buckets** — singing lives under both SÅNGPEDAGOGIK and UTBILDNING; distribution under TJÄNSTER.
2. **Duplicate content** — homepage repeats same paragraphs 3×; `/utbildning` overlaps `/sångpedagogik`.
3. **Footer Om oss / Kontakt** — href to `/` instead of `/om-oss` / `/kontakt` (observed in homepage HTML).
4. **No single booking path** — scattered CTAs (mailto, contact form, phone).
5. **Mixed location story** — Östra Ågatan vs Svederusgatan vs Salabacksgatan.

### Comparison to Master Plan §5 (target — not decided here)

| Master Plan direction | Current site |
|----------------------|--------------|
| Sång | Partial — many subpages under SÅNGPEDAGOGIK |
| Studio & skapande | Split across distribution, podcast, studio copy |
| Ge ut musik | `/distribution`, `/musikutgivning`, `/podcast` |
| Kurser & community | UTBILDNING + COMMUNITY + blog |
| Om Yellow Music | `/om-oss` |
| Global CTA: Boka | Not present as route — contact/planning meeting only |
| Kontakt | `/kontakt` exists |

Future IA decisions: Area 02 only.

---

## Service catalogue (verified from public pages)

| Current public name | Category | URL | Description (summary) | Booking relevance | Duration | Price | Location | Staff/resource | CTA | Status |
|---------------------|----------|-----|----------------------|-------------------|----------|-------|----------|----------------|-----|--------|
| Sångpedagogik (hub) | Sång | `/sångpedagogik` | Vocal education hub | High | Not stated | Not stated | Fyrislund mentioned | Biim-implied | Contact | **VERIFIED_ACTIVE** |
| Sånglektioner Uppsala | Sång | `/sanglektioner-uppsala` | Singing lessons Uppsala | High | Not stated | Free first lesson claimed | Uppsala | Biim-implied | Contact / book lesson | **VERIFIED_ACTIVE** — verify free lesson |
| Scencoachning | Sång | `/scencoachning` | Stage presence coaching | High | Not stated | Not stated | — | — | Contact | **APPARENTLY_ACTIVE** |
| Fonationsteknik | Sång | `/fonationsteknik` | Vocal fold / phonation technique | High | Not stated | Not stated | — | — | Contact | **APPARENTLY_ACTIVE** |
| Hälsosam sångteknik | Sång | `/hälsosamsångteknik` | Healthy singing technique | High | Not stated | Not stated | — | — | Contact | **APPARENTLY_ACTIVE** |
| Sång & komp | Sång | `/sångochkomp` | Singing with accompaniment | High | Not stated | Not stated | — | — | Contact | **APPARENTLY_ACTIVE** |
| Låtskrivande | Utbildning | `/låtskrivande` | Songwriting courses/workshops | Medium | Not stated | Not stated | — | — | Contact | **APPARENTLY_ACTIVE** |
| Musikproduktionskurs för tjejer | Utbildning | `/musikproduktionskurs-för-tjejer` | Intro music production (women) | Medium | Not stated | Not stated | — | — | Contact | **APPARENTLY_ACTIVE** |
| Praktik | Utbildning | `/praktik` | Internship at YMU | Low | Not stated | Not stated | Uppsala | — | Contact | **APPARENTLY_ACTIVE** |
| Musikutgivning | Release | `/musikutgivning` | Release guidance; artist keeps rights | Medium | Not stated | Not stated | — | Producers network | Contact / meeting | **VERIFIED_ACTIVE** |
| Distribution (hub) | Release | `/distribution` | Music, podcast, studio overview | Medium | Not stated | Not stated | Starlight mentioned | Studio | Contact | **VERIFIED_ACTIVE** |
| Podcast production | Studio / Release | `/podcast` | Record, edit, publish podcasts | Medium | Not stated | Not stated | Starlight Studios | Studio | Contact | **VERIFIED_ACTIVE** |
| Starlight Studios rental | Studio | `/distribution`, `/om-oss` | Studio hire; events (möhippa, etc.) | High | Not stated | Not stated | Svederusgatan / Fyrislund | Studio resource | Contact | **VERIFIED_ACTIVE** |
| Planeringsmöte | General | Homepage, multiple | Free planning meeting | High | Not stated | Free (stated) | Unclear which address | — | Mailto / contact | **VERIFIED_ACTIVE** — verify offer |
| Grafisk profilering | Other | `/kontakt` meta | Mentioned in contact page description | Low | Not stated | Not stated | — | — | Contact | **UNCLEAR** — only in meta summary |
| Community | Community | `/community` | Community membership framing | Low | — | — | — | — | Explore | **APPARENTLY_ACTIVE** |

No public prices found except **kostnadsfri** / free-first-lesson language. Do not invent pricing.

---

## Page content audit (summary)

| PAGE | SECTION / PURPOSE | CONTENT (summary) | CTA | QUALITY | RECOMMENDATION |
|------|-------------------|-------------------|-----|---------|----------------|
| `/` | Hero ×3 duplicate | Same navigator copy repeated | Trustpilot, planeringsmöte | Weak — redundant | **CONSOLIDATE** |
| `/` | LÅT OSS VÄXA | Brand headline | — | Strong headline | **KEEP** |
| `/` | Services overview | Sång, utgivning, studio summaries | SÅNGPEDAGOGIK button | Medium | **KEEP_BUT_EDIT** |
| `/` | Tips & Tricks | 2 blog teasers | Read posts | Useful | **KEEP** |
| `/` | Footer | Address block, links | Om oss, Kontakt | Broken footer hrefs | **KEEP_BUT_EDIT** |
| `/om-oss` | Founder story | Biim, 2020, values | Trustpilot | Strong | **KEEP** |
| `/om-oss` | Starlight Studios | NASA/LP/neon description | — | Strong differentiator | **KEEP** |
| `/om-oss` | Partners | Tremoloop, MTMax | — | Credibility | **KEEP** — verify logos |
| `/kontakt` | Contact form | Name, email, message | Submit | Functional | **KEEP** |
| `/kontakt` | Location | Svederusgatan + Salabacksgatan | — | Conflicting | **VERIFY_WITH_OWNER** |
| `/sanglektioner-uppsala` | Offer | Free first lesson | Contact | Conversion-focused | **KEEP** — verify offer |
| `/distribution` | Release hub | Music, podcast, studio | Subpage links | Clear structure | **KEEP_BUT_EDIT** |
| Blog posts | Education | Podcast explainer; first singing lesson | Contact flow | Useful SEO | **KEEP** |

---

## Trust / social proof audit

| Item | Type | Classification | Notes |
|------|------|----------------|-------|
| Trustpilot link | Third-party reviews | **THIRD_PARTY_VERIFIABLE** | `trustpilot.com/review/yellowmusicunited.se` — no score embedded in HTML |
| Founder experience claims | First-party | **FIRST_PARTY_CLAIM** | "12 år", "10 år" on `/om-oss` — not independently verified |
| Artist independence / no royalties | First-party | **FIRST_PARTY_CLAIM** | Distribution pages — policy statement |
| Tremoloop / MTMax partners | Third-party logos | **OWNER_VERIFICATION_REQUIRED** | Names on `/om-oss`; logo reuse rights unclear |
| Customer testimonials | — | **None found** on crawled pages | |
| Google rating embed | — | **Not present** in HTML | |
| Awards / statistics | — | **None found** | |

---

## Social / external presence (verified links in HTML)

| Platform | URL | Verified on |
|----------|-----|-------------|
| Trustpilot | https://www.trustpilot.com/review/yellowmusicunited.se | All major pages |

**Not found:** verified `href` to Instagram, Facebook, YouTube, Spotify, TikTok, or Google Maps in crawled page HTML. Icons may exist without outbound URLs, or social is absent from template. **VERIFY_WITH_OWNER** for official social accounts.

Spotify/Apple Music mentioned in **copy** only (streaming platforms for releases) — not YMU profile links.

---

## Core messaging themes (verified)

1. **Navigator** — genom musikbranschen  
2. **Community** — förena musik med människor  
3. **Positivity, safety, courage** — positivitet, trygghet, mod  
4. **Artist independence** — no royalty grab (distribution)  
5. **Inclusion & equality** — founder values on `/om-oss`

---

## Content ownership (future)

Long-form copy should not live in JSX. Future homes: `src/content/`, CMS (Area 06), or MDX — unchanged from foundation plan.

---

## Related documents

- Brand constraints: [`brand-constraints.md`](brand-constraints.md)
- Asset inventory: [`asset-inventory.md`](asset-inventory.md)
- Phase 1 report: [`phase-1-audit-report.md`](phase-1-audit-report.md)
