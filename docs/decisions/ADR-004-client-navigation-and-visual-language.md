# ADR-004 — Client navigation and Adviora-adapted visual language

**Status:** accepted  
**Date:** 2026-10-29

## Context

The master plan and Area 02 describe five creative worlds (Sång, Studio, Utbildning, Ge ut musik, Community) and a Yellow Orbit navigator.

Biim Frischenfeldt specified a different public menu, and asked for the site to adapt the Adviora template (warm paper, serif headings with a coloured italic word, pill labels, rounded cards, circular menu button) to a yellow/sunflower palette. She also specified section patterns: a sticky split on the homepage, lesson-package cards, a pedagogy comparison that does not name a competitor, a planning-meeting block, a founder story with a pull quote, a vertical timeline, a principles card, and tilted review cards.

That request conflicts with Master Plan §5 and with parts of Area 01 (avoid pills by default, avoid a luxury-beige consulting look) and Area 02 (five-world top navigation, stop before detail pages).

## Decision

The public information architecture follows Biim’s menu:

```text
Tjänster
  Sånglektioner
    Steg för steg
    Mina lektionspaket
  Utbildning
    Musikproduktion för tjejer
    Låtskrivning
  Distribution
Community
Om oss
Kontakt
Boka nu
FAQ
```

Studio is not a top-level item. Starlight Studios stays on Om oss and Distribution. Old preview routes redirect.

The visual language keeps Fraunces and Source Sans 3, the working brand yellow `#F7C006`, and warm paper. Italic accent words use `#8C5A12` so they pass WCAG AA on the canvas. Bright yellow is for fills, dots, and text on dark surfaces. Pills are used for section labels and primary actions. Motion is CSS-only, including a view-timeline rise, and is skipped when `prefers-reduced-motion` is set.

Reviews, unpublished prices, and missing photography stay explicitly marked. No invented testimonials.

Booking and Google integrations stay out of scope. The planning form opens a mailto.

## Consequences

- Master Plan §5 remains the historical product direction. This ADR is the client override for the current public site.
- Area 02’s five-world orbit is no longer the public navigator.
- Final 301 redirects for the live Wix URLs still belong to Area 07. The redirects in `next.config.ts` are temporary (307).
- Prices, approved photos, the vector logo, and real reviews are still owner dependencies.
