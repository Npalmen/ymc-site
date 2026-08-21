# Asset Inventory

Inventory of reusable assets observed on the **current public site** ([yellowmusicunited.se](https://www.yellowmusicunited.se/)).  
**Status:** inventory only — assets have **not** been copied into this repository.

Hosting: Wix (`static.wixstatic.com`). URLs below are reference locations for future licensed export/migration.

---

## Logo

| Asset | Location / notes | Reuse |
|-------|------------------|-------|
| Site logo (header) | Wix media — linked from homepage header (`comp-kdcqct2s` image component) | **High** — preserve per brand constraints |
| Favicon / social OG | `294bab_2e5ebe78bee9469aa9c850333dc62233~mv2.jpg` (OG/Twitter image on homepage) | Verify intended use; may be promotional photo rather than logomark |

**Action:** Obtain original vector/SVG logo files from brand owner before redesign implementation.

---

## Portraits

| Asset | Title / context | Notes |
|-------|-----------------|-------|
| Biim in sunflower field | `Biim-Solrosfält` — homepage hero area | Strong brand asset; sunflower + founder |
| Biim Frischenfeldt | About page (`/om-oss`) — CEO/VD section | Professional portrait for team/about |

---

## Studio photography

| Asset | Title / context | Notes |
|-------|-----------------|-------|
| Yellow Studio / Starlight Studios | `Yellow Studio` — homepage services section | Studio interior; neon/LP aesthetic referenced in copy |
| Starlight Studios | About page — NASA/spaceship-inspired room, LP records, neon | Core differentiator for studio rental |

---

## Singing / coaching photography

| Asset | Context | Notes |
|-------|---------|-------|
| Coaching / vocal imagery | Services and about copy reference sångpedagogik | Specific image IDs to be catalogued when `/om-oss` assets are exported |
| Scene presence / performance | Referenced in services (scennärvaro) | Confirm on live subpages during content migration |

---

## Sunflower / brand photography

| Asset | Context | Notes |
|-------|---------|-------|
| Sunflower field portrait | See `Biim-Solrosfält` | Primary emotional brand image |
| Yellow-toned brand imagery | Homepage sections, Wix theme | Warm palette aligned with brand name |

---

## Community photography

| Asset | Context | Notes |
|-------|---------|-------|
| Community / collaboration | Copy emphasizes community and network | May include event or group photos on blog/service pages — full audit deferred to CMS/content migration phase |

---

## Icons

| Asset | Context | Notes |
|-------|---------|-------|
| Wix UI icons | Navigation, social, Trustpilot link styling | Not brand assets — replace in redesign |
| Trustpilot badge/link | Footer and multiple pages | External brand asset — link only, do not host copy without permission |

---

## Social assets

| Asset | Context | Notes |
|-------|---------|-------|
| Open Graph image | Homepage meta — sunflower/brand photo | Used for link previews |
| Social links | Header/footer (Instagram, Facebook, etc. — verify on live site) | Inventory URLs during SEO/social area work |

---

## Known Wix media IDs (homepage sample)

Reference only — **do not scrape** without confirming rights:

| Media ID | Observed use |
|----------|--------------|
| `294bab_2e5ebe78bee9469aa9c850333dc62233~mv2.jpg` | OG / social preview |
| `294bab_60a6e433e6d44178ba38346219e08d5e~mv2.jpeg` | Biim sunflower field |
| `294bab_483e53e227a445c38ac053885356adfe~mv2.jpg` | Yellow Studio interior |

---

## Repository placeholders

Future optimized assets should land under:

```text
public/brand/       → logo and brand marks (after export)
public/images/existing/  → archived originals (if migrated)
public/images/optimized/ → production web images
public/icons/       → UI icons designed for the new site
```

---

## Open questions

1. Confirm high-resolution logo source files (SVG preferred).
2. Full page-by-page image audit when information architecture is finalized.
3. Clarify usage rights for collaborator logos (Tremoloop Music, MTMax Music) on about page.
4. Resolve address discrepancy in current content (registered vs studio vs meeting locations) before map imagery.
