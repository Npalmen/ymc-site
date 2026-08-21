# Yellow Music United — Design System Plan

**Document:** `docs/plans/areas/01-design-system.md`  
**Parent:** `docs/plans/MASTER-PLAN.md`  
**Domain:** Design System  
**Status:** PLANNED

---

# 1. Objective

Create the visual and interaction foundation for the Yellow Music United redesign.

This is not a rebrand and not a generic component library. The system must preserve the recognizable Yellow Music identity while making the website feel professionally art-directed, coherent and established.

The design system must be reusable across:

- homepage
- service pages
- booking
- contact/forms
- reviews/social proof
- editorial/content pages
- mobile navigation

Later pages should not need to re-decide the brand.

---

# 2. Preconditions and required reading

Area 01 may begin only when:

- `FOUNDATION_READY = satisfied`
- `BRAND_CONTENT_SOURCE_READY = satisfied`

Before work, read:

- `AGENTS.md`
- `docs/current-state.md`
- `docs/plans/MASTER-PLAN.md`
- `docs/brand/brand-constraints.md`
- `docs/brand/asset-inventory.md`
- `docs/brand/content-inventory.md`
- `docs/brand/phase-1-audit-report.md`
- this file

Phase 1 findings are authoritative for existing brand facts, observed colors, asset constraints and unresolved owner questions.

---

# 3. Target perception

The visual direction is:

```text
INDEPENDENT MUSIC COMPANY
+
CREATIVE STUDIO
+
EDITORIAL MUSIC DESIGN
+
HUMAN SERVICE BUSINESS
```

The target reaction is:

> Clearly Yellow Music, but now professionally art-directed and substantially more established.

Do not drift into:

- generic SaaS
- generic Wix
- corporate consultancy
- luxury beige lifestyle brand
- neon music-tech cliché
- festival-poster chaos
- Canva-style music template

---

# 4. Brand preservation hierarchy

Use Phase 1 classifications as authoritative.

## MUST_PRESERVE

- existing Yellow Music logo identity
- yellow as core brand association
- sunflower motif where appropriate
- founder/human photography
- authentic studio/music imagery
- warm, creative, approachable personality

## MAY_EVOLVE

- exact yellow shades
- supporting neutrals
- typography
- crop treatment
- layout density
- icon language
- motion language

## MAY_REDESIGN

- current Wix layout
- current cards
- current spacing
- navigation chrome
- button styling
- section composition
- footer structure
- mobile behavior

## DO_NOT_USE

- obvious Wix/template patterns
- generic stock imagery
- SaaS dashboard card language on marketing pages
- uncontrolled mixed typography
- decorative gradients without purpose
- excessive glassmorphism
- constant motion
- fake testimonials/ratings
- invented brand assets

---

# 5. Logo treatment

The logo is preserved.

Do not:

- redesign it
- redraw it
- distort it
- add effects directly to it
- invent unsupported variants

If the original vector logo is unavailable:

- use the best verified asset for prototype work only
- keep treatment neutral
- document the limitation
- request the original vector/source file before production

Do not block the entire design system solely because the vector is pending if the surrounding visual system can be evaluated safely.

---

# 6. Color system

Yellow remains the main brand accent, but not every section should be yellow.

Use yellow strategically for:

- emphasis
- CTA accents
- selected surfaces
- labels
- interaction states
- occasional large brand moments

Use warm neutral canvases so photography and yellow remain distinctive.

Create semantic tokens rather than scattered values:

```text
canvas
canvas-subtle
surface
surface-strong

ink
ink-muted
ink-subtle
ink-inverse

brand
brand-hover
brand-soft
brand-contrast

border
border-strong

focus
success
warning
error
```

Review the Phase 1 `OBSERVED` color values. If several yellows exist:

1. document them,
2. choose one reversible working brand yellow for prototype use,
3. explain the choice,
4. do not claim it is the historic official value unless verified.

Final implementation must satisfy accessible contrast.

Avoid cold SaaS gray systems and sterile pure-white pages.

---

# 7. Typography

Typography is one of the primary tools for removing the homemade feel.

Use:

- one primary modern sans-serif
- optionally one expressive editorial/display face

Maximum two core families.

## Primary sans

Use for:

- body
- navigation
- buttons
- forms
- metadata
- labels
- booking UI

Requirements:

- excellent Swedish character support
- readable
- human
- contemporary
- professional without feeling corporate

Use `next/font`.

## Display/editorial face

Use selectively for:

- hero statements
- major section headings
- editorial moments
- selected quotes

Do not use it for dense UI or long body copy.

## Required type roles

```text
display-xl
display-lg
heading-xl
heading-lg
heading-md
heading-sm
body-lg
body
body-sm
label
meta
```

Use a deliberate responsive scale; fluid `clamp()` sizing is allowed.

Keep long-form body line length roughly 55–75 characters.

Before selection, evaluate a small shortlist for:

- brand fit
- Swedish glyphs
- readability
- licensing
- performance
- body/display pairing
- mobile behavior

Briefly document the selected pair and rejected finalists.

---

# 8. Grid and containers

Use a consistent editorial grid.

Desktop direction:

- centered max-width system
- broad canvas
- conceptual 12-column grid
- generous gutters
- support deliberate asymmetry

Create reusable container variants:

```text
container-wide
container-default
container-reading
container-full
```

Do not let each section invent its own width.

Mobile is not merely desktop stacked vertically. Explicitly design section order, crop, spacing and typography.

Required visual review widths:

```text
375
430
768
1024
1440
1920
```

---

# 9. Spacing and vertical rhythm

Create a consistent semantic spacing scale:

```text
micro
xs
sm
md
lg
xl
2xl
3xl
section
section-large
```

Section spacing must be materially larger than component spacing.

Avoid equal padding everywhere. Pages should have deliberate rhythm:

```text
quiet → expressive → quiet → dense → spacious
```

---

# 10. Editorial composition families

The site should not become a grid of generic cards.

Define reusable composition families:

## Editorial split
Text + large image, reversible left/right.

## Full-bleed media
Large image/video with adjacent or restrained overlaid statement.

## Numbered story
`01 / 02 / 03` + heading + supporting content. Useful for Develop / Create / Release.

## Feature block
Eyebrow + heading + concise copy + CTA + media.

## Human story
Portrait + editorial story + small metadata/quote.

## Social proof
Rating/source/quote/metadata; must support real data later.

## CTA close
Strong statement + primary + secondary action.

These are composition systems, not boxed SaaS components.

---

# 11. Card policy

Cards are allowed where they genuinely improve comprehension.

Appropriate examples:

- booking service choice
- compact review item
- structured resource selection
- event listing

Do not default to cards for:

- hero
- founder story
- editorial services
- every homepage section

Avoid the dashboard aesthetic.

---

# 12. Photography system

Photography is central to the brand.

Use:

- large intentional crops
- clear focal points
- generous whitespace
- asymmetric pairings
- occasional edge-to-edge media
- consistent treatment

Avoid:

- random image dimensions
- tiny thumbnails everywhere
- heavy filters
- generic overlays
- rounded rectangles by default
- forced black-and-white
- fake grain everywhere
- universal yellow duotone

Support reusable ratios such as:

```text
16:9
3:2
4:5
1:1
portrait-tall
editorial-wide
```

Images should mostly use square or subtly softened corners. Do not make every image look like an app card.

---

# 13. Sunflower motif

Sunflowers are part of the current visual world.

Use as:

- authentic photography
- occasional crop/texture
- transitional brand moment
- selective visual anchor

Do not turn into:

- clipart
- repetitive iconography
- pattern spam
- cartoon decoration

---

# 14. Surface system

Keep the number of surface families small:

```text
warm canvas
clean light surface
soft yellow surface
brand yellow surface
dark studio surface
```

Each surface must define compatible text, border and CTA behavior.

A darker studio treatment may be used selectively to create rhythm and reflect recording/production environments.

Avoid:

- site-wide black aesthetic
- cyberpunk
- RGB/neon gradients
- dark mode as a gimmick

---

# 15. Buttons and links

Define three action levels:

## Primary
Core conversion, especially `Boka`.

## Secondary
Exploration such as `Läs mer`, `Utforska`, `Se tjänsten`.

## Tertiary
Editorial text link.

Avoid extreme pill styling by default.

Hover/focus may use:

- small background shift
- underline movement
- subtle arrow movement
- minimal translation

Avoid:

- bounce
- glow
- large scaling
- cursor-following effects

Links should not all look like buttons.

---

# 16. Navigation primitives

Area 01 defines visual primitives, not final Area 02 IA.

Support:

- desktop header
- mobile header
- mobile menu
- active state
- primary CTA
- dropdown/expanded navigation if later required

Desktop header should feel restrained, light and professional.

Avoid:

- floating SaaS-pill nav
- excessive glass effects
- oversized header height
- icon clutter

Mobile navigation requires:

- clear open/close state
- comfortable hit targets
- strong hierarchy
- visible booking CTA
- no horizontal overflow

Do not hardcode future navigation labels into generic visual primitives.

---

# 17. Forms

Define visual language for:

- label
- input
- textarea
- select
- checkbox
- radio
- helper text
- validation
- disabled
- success

Forms must visually belong to Yellow Music and not rely on unstyled browser defaults.

---

# 18. Booking visual language

Booking is a future first-class product domain.

Area 01 defines only its visual primitives.

The booking experience must look like:

```text
Yellow Music
```

not:

```text
embedded third-party booking app
```

Support future visual states for:

- service selector
- staff/resource selector
- date selector
- time-slot selector
- customer form
- booking review
- confirmation
- loading
- empty
- error

Do not implement booking logic here.

Booking selection surfaces can be more structured than editorial marketing content but should still avoid generic SaaS styling.

---

# 19. Social proof / reviews

Create visual primitives capable of receiving real data later:

- source
- rating
- review count
- reviewer
- quote
- date

Do not hardcode fake ratings or reviews.

Neutral placeholder states are allowed in the design-system preview.

---

# 20. Icon system

Use one coherent icon family.

Prefer simple consistent line icons.

Do not mix:

- emojis
- multiple libraries
- filled/outlined random sets
- decorative music icons throughout

Music identity should primarily come from imagery, typography and content.

---

# 21. Motion system

Motion should add polish, not spectacle.

Allowed categories:

- reveal
- hover
- navigation transition
- subtle image scale
- small parallax
- underline movement
- section entrance

Motion should generally be:

- short
- low amplitude
- smooth
- reversible

Respect `prefers-reduced-motion`.

Do not use:

- scroll-jacking
- forced snapping
- long pinned sequences
- constantly moving decoration

Prefer CSS. Use Framer Motion only when genuinely justified.

---

# 22. Radius, border and shadow policy

Use a limited radius scale:

```text
none
small
medium
large
```

Do not invent arbitrary radii per component.

Borders should be restrained and warm/neutral.

Use shadows rarely. Preferred hierarchy:

1. spacing/typography
2. surface contrast
3. border
4. shadow only when needed

Avoid floating-card aesthetics.

---

# 23. Accessibility baseline

Required:

- WCAG-aware contrast
- visible focus states
- keyboard usability
- sufficient hit targets
- proper form labels
- reduced-motion support
- semantic HTML
- no information communicated by color alone

Do not remove focus outlines without an accessible replacement.

---

# 24. Performance baseline

Prefer:

- server components
- CSS transitions
- `next/image`
- `next/font`
- optimized local assets

Do not add heavy design dependencies without a clear reason.

---

# 25. Component architecture

Suggested primitives:

```text
src/components/ui/
  button.tsx
  link.tsx
  container.tsx
  section.tsx
  heading.tsx
  text.tsx
  image-frame.tsx
  eyebrow.tsx
  icon.tsx
```

Layout:

```text
src/components/layout/
  site-header.tsx
  site-footer.tsx
  page-shell.tsx
```

Do not create speculative components with no current use.

---

# 26. Token architecture

Use semantic CSS custom properties.

Conceptual shape:

```text
--color-canvas
--color-surface
--color-ink
--color-muted
--color-brand
--color-brand-soft
--color-border

--radius-sm
--radius-md
--radius-lg

--space-...
```

Tailwind utilities may consume these variables.

Avoid maintaining duplicate independent token systems.

---

# 27. Design-system preview route

Build an internal preview route:

```text
/design-system
```

Purpose:

- visual review
- responsive review
- compare typography
- inspect surfaces
- validate components
- inspect booking primitives

Do not add it to public navigation.

It may be removed or protected before production.

---

# 28. Required preview contents

## A. Brand foundations
- canvases
- observed yellow family
- selected working yellow
- neutrals

## B. Typography
- display
- headings
- body
- labels
- metadata

## C. Buttons/links
- primary
- secondary
- tertiary
- disabled
- focus

## D. Image treatments
Use verified local assets if available and permitted; otherwise explicit placeholders.

## E. Editorial compositions
- split
- numbered story
- human story
- dark studio section

## F. Forms
Fields and validation states.

## G. Booking visual primitives
Fixture-only:
- service choice
- date shell
- time slot
- confirmation shell

No booking logic.

---

# 29. Asset policy

During Area 01:

- use only verified local assets or owner-supplied assets
- do not hotlink Wix in production components
- do not invent missing assets
- use explicit placeholders where rights/source files remain unresolved
- request original vector logo and high-resolution photography early

The design system must still be reviewable even before every final asset arrives.

---

# 30. Anti-pattern checklist

Reject the direction if it begins to resemble:

- SaaS landing page
- Wix template
- Canva music template
- neon recording studio site
- festival poster
- influencer/lifestyle page
- luxury beige serif brand
- card-heavy dashboard

Warning signs:

- every section inside rounded cards
- gradients as default
- more than two type families
- yellow everywhere
- text over every image
- giant pills
- large drop shadows
- low-contrast text
- constant decorative animation

---

# 31. Implementation phases

Do not build Area 01 in one uncontrolled pass.

## D0 — Audit synthesis

Deliver:

- concise visual brief
- confirmed preservation rules
- observed-color summary
- asset constraints
- owner-dependent items

Gate:

```text
DESIGN_INPUTS_READY
```

## D1 — Tokens

Deliver:

- semantic color system
- working brand yellow
- neutrals
- spacing
- radii
- borders
- containers
- responsive strategy

Gate:

```text
DESIGN_TOKENS_READY
```

## D2 — Typography

Deliver:

- selected primary sans
- selected display face if used
- responsive type scale
- line-height rules
- line-length rules

Gate:

```text
TYPOGRAPHY_READY
```

## D3 — Core primitives

Deliver:

- container
- section
- heading/text
- button
- link
- eyebrow
- image frame
- form controls

Gate:

```text
UI_PRIMITIVES_READY
```

## D4 — Composition system

Deliver:

- editorial split
- numbered story
- feature block
- human story
- CTA close
- dark studio treatment

Gate:

```text
COMPOSITION_SYSTEM_READY
```

## D5 — Navigation + booking visual primitives

Deliver:

- header shell
- mobile menu shell
- booking service choice
- time-slot treatment
- selected/disabled states
- review/confirmation shell

No real booking.

Gate:

```text
INTERACTION_PRIMITIVES_READY
```

## D6 — Design-system preview

Deliver `/design-system`.

Verify at:

```text
375
430
768
1024
1440
1920
```

Gate:

```text
DESIGN_SYSTEM_PREVIEW_READY
```

## D7 — Explicit review/freeze

Review:

- clearly Yellow Music
- not SaaS
- not template-like
- photography remains central
- yellow is controlled
- typography feels professional
- mobile is intentional
- booking primitives belong to the site
- accessibility baseline is visible

Final gate:

```text
DESIGN_SYSTEM_APPROVED
```

Do not start homepage implementation automatically.

---

# 32. Validation

Run:

```bash
npm run lint
npm run build
```

Build/lint are necessary but do not constitute visual approval.

Perform visual review at the required responsive widths.

---

# 33. Documentation updates

When Area 01 reaches review:

Update as appropriate:

- `docs/current-state.md`
- `docs/plans/areas/01-design-system.md`
- `docs/verification/README.md`

Record:

- selected fonts
- selected working color tokens
- important component decisions
- owner dependencies still open

Create an ADR only for a materially important, durable architecture decision.

---

# 34. Definition of done

Area 01 is complete only when:

- preservation rules are represented in implementation
- semantic tokens exist
- typography is intentionally selected
- core UI primitives exist
- editorial composition system exists
- image treatment is defined
- form visual language exists
- booking visual language exists
- responsive behavior is reviewed
- accessibility baseline is implemented
- `/design-system` preview exists
- lint passes
- build passes
- explicit visual review is completed
- documentation matches reality
- `DESIGN_SYSTEM_APPROVED` is explicitly satisfied

---

# 35. Mandatory stop condition

When:

```text
DESIGN_SYSTEM_PREVIEW_READY
```

is reached, stop.

Do not begin Area 03 / Homepage.

The next step requires explicit human visual review before:

```text
DESIGN_SYSTEM_APPROVED
```
