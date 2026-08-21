# Asset Inventory

Phase 1 audit of publicly visible assets on [yellowmusicunited.se](https://www.yellowmusicunited.se/).  
**Audit date:** 2026-08-21  
**Pages crawled:** 21 public HTML pages + 3 blog category URLs (verified 200)  
**Assets not downloaded** — Wix-hosted references only. Mark **RIGHTS_TO_VERIFY** where reuse rights are not established from the repository.

---

## Summary

| Category | PRIMARY | SECONDARY | Notes |
|----------|---------|-----------|-------|
| LOGO | 2 raster variants (site-wide) | — | No public vector |
| PORTRAIT | Biim sunflower, Biim CEO | — | Strong brand |
| STUDIO | Yellow Studio interior | Starlight story (copy-led) | Neon/LP aesthetic |
| VOCAL / COACHING | Service page imagery | Shared header/footer | Per-page heroes |
| SUNFLOWER / BRAND | Biim-Solrosfält, OG photo | Yellow-toned sections | |
| COMMUNITY | Community page images | Blog thumbnails | |
| PODCAST / RELEASE | Distribution cluster | Blog post images | |
| PARTNER | Tremoloop, MTMax logos (PNG) | — | **RIGHTS_TO_VERIFY** |
| LOCATION | Map/embed on contact | — | Address **VERIFY_WITH_OWNER** |

---

## Logo audit

| Variant | Type | Source | Format | Background | Resolution notes | Classification |
|---------|------|--------|--------|------------|------------------|----------------|
| Header logo | Site wordmark | All pages — header `WPhoto` components | Raster PNG (`294bab_62f4f29962314cab9831e03778db5842~mv2.png` implied) | Light header | Served via Wix responsive fill; not source file | **PRIMARY** — **MUST_PRESERVE** |
| Secondary header mark | Logo / icon | All pages — `294bab_108ef231c6304db4af72d8dbe94c51e1` | Raster PNG | Light | Appears on every page alongside wordmark | **PRIMARY** |
| Favicon / app icon | Not clearly isolated in audit HTML | — | — | — | Not verified separately from OG image | **VERIFY_WITH_OWNER** |
| OG / social preview | Promotional photo, not logomark | `/`, `/tjänster` meta | JPG `294bab_2e5ebe78bee9469aa9c850333dc62233` | Photo | 2500×2500 fill in meta | **SECONDARY** — brand photo, not logo file |

**Findings:**

- No **vector (SVG/EPS)** logo found on the public site.
- No separate dark-background logo variant verified.
- Horizontal vs stacked: header uses combined Wix photo layout — exact variant naming **VERIFY_WITH_OWNER**.
- **Action:** Owner must supply original vector/high-resolution logo before final UI implementation.

---

## Color audit (OBSERVED — not design tokens)

Extracted from inline CSS and HTML across crawled pages. Wix theme + page styles; **multiple yellows coexist**.

### Dominant / brand yellows (OBSERVED)

| Value | Context | Notes |
|-------|---------|-------|
| `#F7C006` | Theme CSS | Strong yellow |
| `#F7CC39` | Theme CSS | Strong yellow |
| `#F6B33B` | Theme CSS | Warm yellow |
| `#FFD261` | Theme CSS | Light yellow accent |
| `#ffcd00` | Theme CSS | Bright yellow |
| `#FFF2D4` | Theme CSS | Pale yellow / tint |

**Audit note:** Six+ yellow hex values appear — **inconsistent application**. Final single brand token set belongs to Area 01; do not arbitrarily pick one without consolidation analysis.

### Neutrals & text (OBSERVED)

| Value | Context |
|-------|---------|
| `#FFFFFF` / `#F0F0F0` | Backgrounds |
| `#000000` | Body text (inline) |
| `rgb(64, 57, 42)` | Footer / link brown-grey |
| `#757575`, `#969696`, `#B2B2B2` | Muted greys in theme |

### Non-brand / platform noise (DO_NOT_USE)

| Value | Context |
|-------|---------|
| `#116dff`, `#1a73e8`, `#3899ec` | Wix focus / platform blues |
| Various purples/pinks | Wix template defaults |

Wix `color_43` class used for body copy — maps to theme brown/dark tone, not a literal hex in markup.

---

## Asset catalogue

### LOGO

| Name | Source page | Type | Aspect | Subject | Current use | Future use | Importance | Reuse | Rights |
|------|-------------|------|--------|---------|-------------|------------|------------|-------|--------|
| Header wordmark | All pages | LOGO | ~horizontal | Yellow Music logo | Header | Nav, footer, OG fallback | PRIMARY | Reuse after vector export | RIGHTS_TO_VERIFY |
| Header companion mark | All pages | LOGO | square-ish | Brand mark | Header | Favicon candidate | PRIMARY | Same | RIGHTS_TO_VERIFY |

### PORTRAIT

| Name | Source page | Type | Aspect | Resolution (served) | Subject | Importance | Reuse |
|------|-------------|------|--------|----------------------|---------|------------|-------|
| Biim-Solrosfält | `/` | PORTRAIT | ~3:4 (277×368) | Wix fill | Biim in sunflower field | PRIMARY | Hero, about, emotional brand |
| Biim CEO portrait | `/om-oss` | PORTRAIT | ~3:4 (238×317) | PNG `Biim_heic.png` | Biim Frischenfeldt | PRIMARY | About, team, trust |

### STUDIO

| Name | Source page | Type | Aspect | Subject | Importance | Reuse |
|------|-------------|------|--------|---------|------------|-------|
| Yellow Studio | `/` | STUDIO | ~3:4 (276×368) | Studio interior / equipment | PRIMARY | Studio & skapande, homepage |
| Starlight Studios | `/om-oss` (copy) | STUDIO | — | NASA/LP/neon room (described) | SECONDARY | Studio rental pages |

### VOCAL / COACHING

| Name | Source page | Type | Importance | Notes |
|------|-------------|------|------------|-------|
| Sångpedagogik hero set | `/sångpedagogik`, `/utbildning` | VOCAL | SECONDARY | Shared imagery `294bab_f5531a420dca…` (portrait 2500×3125 OG) |
| Service-specific headers | `/fonationsteknik`, `/scencoachning`, etc. | VOCAL | OPTIONAL | Per-service; audit did not isolate unique IDs for all |

### SUNFLOWER / BRAND

| Name | Source page | Type | Importance |
|------|-------------|------|------------|
| OG brand photo | `/`, `/tjänster` | SUNFLOWER / BRAND | PRIMARY — link previews |
| Biim-Solrosfält | `/` | SUNFLOWER / BRAND | PRIMARY |

### COMMUNITY

| Name | Source page | Type | Importance |
|------|-------------|------|------------|
| Community page visuals | `/community` | COMMUNITY | SECONDARY — `294bab_eb56d528…`, `294bab_703bb8a3…` |
| Blog thumbnails | `/`, `/yellowmusic-blogg` | COMMUNITY | OPTIONAL |

### PODCAST / RELEASE / OTHER

| Name | Source page | Type | Importance |
|------|-------------|------|------------|
| Distribution visuals | `/distribution` | MUSIC PRODUCTION | SECONDARY |
| Podcast blog image | `/post/vad-är-en-podcast` | PODCAST | OPTIONAL |
| Singing blog image | `/post/jag-vill-sjunga…` | VOCAL | OPTIONAL |

### PARTNER (third-party)

| Name | Source page | Type | Importance | Rights |
|------|-------------|------|------------|--------|
| Tremoloop Music logo | `/om-oss` | OTHER | SECONDARY | RIGHTS_TO_VERIFY |
| MTMax Music logo | `/om-oss` | OTHER | SECONDARY | RIGHTS_TO_VERIFY |

---

## Key Wix media IDs (reference URLs only)

| Media ID | Title / role | Pages |
|----------|--------------|-------|
| `294bab_62f4f29962314cab9831e03778db5842` | Header logo (site-wide) | All 21 |
| `294bab_108ef231c6304db4af72d8dbe94c51e1` | Header companion mark | All 21 |
| `294bab_2e5ebe78bee9469aa9c850333dc62233` | OG / social photo | `/`, `/tjänster` |
| `294bab_60a6e433e6d44178ba38346219e08d5e` | Biim-Solrosfält | `/`, `/community` |
| `294bab_483e53e227a445c38ac053885356adfe` | Yellow Studio | `/` |
| `294bab_9126562c358a4d3ea3db06c720bacc23` | Biim portrait PNG | `/om-oss` |
| `294bab_f5531a420dca47e98c3ae50cedf49629` | Sångpedagogik hero | `/sångpedagogik`, `/utbildning` |
| `98416ec758e64f11b1cf453cfb2337a4` | Podcast blog | blog |
| `99ed109eb2324b4ebfab7f82850e9fc6` | Singing blog | blog |

Full ID list: 54 unique Wix media references across crawl (see `.audit-temp/extract.json` — not committed).

---

## Repository placeholders (future migration)

```text
public/brand/              → logo after owner export
public/images/existing/    → archived originals
public/images/optimized/   → production web images
public/icons/              → new UI icons (not Wix)
```

---

## ASSETS_TO_REQUEST_FROM_OWNER

See [`phase-1-audit-report.md`](phase-1-audit-report.md) for prioritized request list.
