# Brand Constraints

Yellow Music United is being **redesigned**, not rebranded. This document is the Phase 1 audit-backed source of truth for what to preserve, what may evolve, and what to avoid.

**Audit date:** 2026-08-21  
**Primary source:** https://www.yellowmusicunited.se/ (Wix)

---

## Target perception (unchanged)

> Clearly Yellow Music, but professionally art-directed and substantially more established.

The site should feel like a serious creative partner in Uppsala — welcoming to beginners and experienced artists — without losing warmth.

---

## Existing identity to preserve

Evidence from the live site supports preserving:

| Element | Evidence | Notes |
|---------|----------|-------|
| **Logo / wordmark** | Header/footer on all crawled pages (`294bab_62f4f299…`, `294bab_108ef231…` Wix media) | Raster PNG on Wix; vector source not public |
| **Yellow brand association** | Site name, repeated yellow tones in theme/CSS, sunflower photography | Multiple yellow hex values in use — see asset inventory |
| **Sunflower motif** | Homepage image titled `Biim-Solrosfält`; OG image uses brand photography | Strong emotional anchor |
| **Photography character** | Authentic founder portrait (`Biim_heic.png`), studio interior (`Yellow Studio`), community imagery | Not generic stock |
| **Starlight Studios story** | About page — LP records, neon, NASA/spaceship-inspired room | Distinctive studio identity |
| **Creative / human character** | Founder-led copy (Biim Frischenfeldt), warm direct address | Personal guide, not faceless agency |
| **Brand language** | Navigator metaphor; *positivitet, trygghet, mod*; community framing | Repeated across homepage sections |
| **Values statement** | About page: *Inkludering - Jämställdhet - Positiv kreativitet* | Credible differentiator |

---

## Existing identity weaknesses (analysis only)

Observed on the current Wix site — **not design solutions**:

| Weakness | Observation |
|----------|-------------|
| **Template-driven feel** | Wix dropdown menu, repeated section patterns, mixed font stacks (Arial / Wix system) |
| **Visual fragmentation** | Homepage repeats the same hero paragraphs three times; inconsistent heading hierarchy (H1/H2 styling mixed) |
| **Weak hierarchy** | Long blocks of similar-weight text; many sections compete for attention |
| **Homemade layout** | Overlapping horizontal rules, button styles vary (`StylableButton`, rich text links) |
| **Inconsistent color application** | Multiple yellow hex values; Wix platform blues (`#116dff`) appear in focus rings unrelated to brand |
| **Navigation complexity** | Top-level buckets (SÅNGPEDAGOGIK, TJÄNSTER, UTBILDNING, COMMUNITY) overlap conceptually |
| **Duplicated destinations** | `/sångpedagogik` and `/utbildning` share OG image and similar meta; `/om-oss` vs homepage story overlap |
| **Business information drift** | Three different address contexts (see content inventory) undermine trust |
| **Limited verified social proof** | Trustpilot link only; no embedded reviews or verified social profiles in HTML |

---

## Brand preservation rules

| Element | Classification | Rationale |
|---------|----------------|-----------|
| Logo mark (existing artwork) | **MUST_PRESERVE** | Core recognition; do not redraw without owner decision |
| Yellow identity / sunflower photography | **MUST_PRESERVE** | Defines “Yellow Music” emotionally and visually |
| Founder story & values (Biim, Starlight, community) | **MUST_PRESERVE** | Authentic voice; verified on `/om-oss` |
| Authentic studio & portrait photography | **MUST_PRESERVE** | Replace only with owner-approved originals |
| Navigator / trygghet / mod language | **MUST_PRESERVE** | Consistent verified messaging |
| Wix page layouts & section order | **MAY_REDESIGN** | Product goal is layout improvement |
| Current typography (Arial-heavy) | **MAY_EVOLVE** | Hierarchy and font selection can change |
| Wix template chrome, chat widget, platform UI | **DO_NOT_USE** | Generic; replace in redesign |
| Wix default blues / unrelated palette noise | **DO_NOT_USE** | Not part of Yellow identity |
| Duplicated homepage copy blocks | **DO_NOT_USE** | Consolidate in new IA/content |
| Unverified addresses in customer-facing UI | **DO_NOT_USE** until owner confirms | Use placeholder or single verified address only |

---

## Voice & tone

Derived from verified copy — maintain in future content work:

- Swedish primary audience; professional but approachable
- Emphasis on **vägledning**, **trygghet**, **mod**, **community**
- Navigator metaphor: next step in the creative journey
- Inclusive, gender-equality aware positioning (founder story on `/om-oss`)

Do not invent credentials, statistics, testimonials, or service claims not on the public site.

---

## Design direction reference (Master Plan)

Future visual work aligns with Master Plan §3:

```text
INDEPENDENT MUSIC COMPANY + CREATIVE STUDIO + EDITORIAL MUSIC DESIGN + PROFESSIONAL SERVICE BUSINESS
```

Avoid: generic SaaS, generic Wix template, corporate consulting, luxury fashion, neon music-tech cliché.

**Final typography, palette tokens, and components belong to Area 01 — not this document.**

---

## Related documents

- Asset inventory: [`asset-inventory.md`](asset-inventory.md)
- Content inventory: [`content-inventory.md`](content-inventory.md)
- Phase 1 gate report: [`phase-1-audit-report.md`](phase-1-audit-report.md)
