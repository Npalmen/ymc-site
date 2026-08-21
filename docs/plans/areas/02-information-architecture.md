# Yellow Music United — Information Architecture Plan

**Document:** `docs/plans/areas/02-information-architecture.md`  
**Parent:** `docs/plans/MASTER-PLAN.md`  
**Domain:** Information Architecture  
**Status:** IA PREVIEW READY

---

# 1. Objective

Transform Yellow Music United from a long one-page marketing site into a coherent multi-page music platform.

The site must support several distinct customer intents without making the homepage carry every service, story and proof element.

The information architecture must:

- make Yellow Music easy to understand
- give each major business area enough room to tell its story
- support SEO and local discovery
- support future booking
- support future Google integrations
- support editorial storytelling
- remain mobile-first
- preserve a strong, recognizable Yellow Music brand world

The homepage becomes a portal and orientation layer, not a complete catalogue.

---

# 2. Core principle

The user should quickly understand:

```text
WHAT CAN I DO HERE?
↓
WHERE SHOULD I GO?
↓
WHAT DOES THIS AREA OFFER?
↓
WHY SHOULD I TRUST YELLOW MUSIC?
↓
WHAT IS MY NEXT ACTION?
```

The architecture should reflect customer intent rather than internal business organization.

---

# 3. Primary customer worlds

Yellow Music should be organized around five primary creative worlds:

## 01 — Sång

For users who want to develop their voice, expression and stage confidence.

Potential content includes verified existing offerings such as:

- sånglektioner
- sångpedagogik
- scencoachning
- fonationsteknik
- sång & komp

Do not assume every current page remains standalone.

Area 02 determines grouping and route strategy based on content depth, user intent and SEO value.

## 02 — Studio & produktion

For users who want to create, record or produce.

Potential content includes:

- Starlight Studios
- studio/inspelning
- musikproduktion
- producentstöd
- podcast production if still active

This area may have a more atmospheric visual identity while staying inside the Yellow Music system.

## 03 — Utbildning

For users who want structured learning, courses or development programs.

Potential content includes:

- kurser
- workshops
- låtskrivande
- musikproduktionskurser
- praktik
- other verified educational offerings

Do not merge educational content into “Sång” merely because some courses involve voice.

## 04 — Ge ut musik

For artists who want help with release and distribution.

Potential content includes:

- distribution
- musikutgivning
- release guidance
- artist support
- rights/ownership information where verified

This area should feel like progression and forward movement.

## 05 — Community

For the wider Yellow Music creative environment.

Potential content includes:

- network/community
- collaboration
- events
- creative environment
- artist ecosystem
- selected stories/news where relevant

Community should not be a vague filler page. It needs a clear purpose and verified content.

---

# 4. Supporting areas

## Yellow Music

Company/founder/about area.

Contains:

- Biim
- Yellow Music story
- values
- philosophy
- history
- relevant credibility

Primary route direction:

```text
/yellow-music
```

Avoid generic corporate “Om oss” treatment where possible.

## Boka

Canonical booking entry:

```text
/boka
```

Booking remains a first-class domain.

All relevant services may link into the booking flow with service context later.

## Kontakt

Dedicated contact route:

```text
/kontakt
```

Should support:

- general contact
- relevant verified contact data
- location information once owner conflict is resolved
- booking alternative
- future map/Google integration

---

# 5. Proposed top-level navigation

Desktop/mobile primary navigation direction:

```text
Sång
Studio & produktion
Utbildning
Ge ut musik
Community
Yellow Music
```

Persistent primary CTA:

```text
Boka
```

Secondary utility:

```text
Kontakt
```

Do not expose every service in the top-level header.

---

# 6. Homepage role

The homepage must no longer attempt to fully explain all business areas.

Its role is:

```text
BRAND IMPACT
+
ORIENTATION
+
DISCOVERY
+
TRUST
+
NEXT ACTION
```

The homepage should:

1. establish Yellow Music emotionally
2. introduce the creative worlds
3. guide the visitor into the right area
4. feature selected current stories/services
5. introduce the human/company dimension
6. provide trust
7. lead to booking/contact

It should NOT:

- contain complete service descriptions for every offering
- reproduce every subpage
- become a giant FAQ/catalogue
- force users to scroll through unrelated services

---

# 7. Homepage revised structure

Recommended direction:

1. Header
2. Hero
3. Yellow Orbit / creative-world navigation
4. Featured story/service
5. Human story / Yellow Music
6. Trust
7. Final CTA
8. Footer

The homepage should be shorter than the current one-page version.

---

# 8. Yellow Orbit as navigational system

Yellow Orbit is not a decorative extra.

It is a recurring orientation device across the multi-page site.

Conceptual inspiration:

- sunflower phyllotaxis
- vinyl grooves
- musical resonance
- creative progression

Do not render literal flowers, records or music notes.

## 8.1 Homepage Orbit

On desktop:

- can act as a larger visual navigation composition
- each primary world is represented as a node/position
- interactions should remain clear and accessible
- text labels remain primary; the graphic is supportive

On mobile:

- do NOT shrink a desktop orbit into an unusable circle
- convert the system into a vertical/scroll-friendly creative navigator
- maintain large touch targets
- preserve numbering and relationship between worlds

Mobile usability overrides visual symmetry.

## 8.2 Area-page Orbit

Each major area page should indicate its position in the Yellow Music system.

Example:

```text
01 — SÅNG
```

The active area can receive a distinct orbit/node state.

Related-area navigation may appear near the end:

```text
FORTSÄTT UTFORSKA

02 Studio & produktion →
03 Utbildning →
```

Do not trap users inside one content silo.

## 8.3 Orbit accessibility

Orbit interaction must never be the only navigation method.

Always provide:

- readable text links
- semantic anchors
- keyboard support
- visible focus
- touch-friendly controls

Decorative geometry is `aria-hidden` where appropriate.

---

# 9. Page hierarchy

Proposed conceptual route tree:

```text
/
├── /sang
│   ├── /sang/sanglektioner
│   ├── /sang/scencoachning
│   ├── /sang/fonationsteknik
│   └── /sang/sang-och-komp
│
├── /studio
│   ├── /studio/starlight-studios
│   ├── /studio/musikproduktion
│   └── /studio/podcast
│
├── /utbildning
│   ├── /utbildning/latskrivande
│   ├── /utbildning/musikproduktionskurs
│   ├── /utbildning/praktik
│   └── /utbildning/[future-verified-course]
│
├── /ge-ut-musik
│   ├── /ge-ut-musik/distribution
│   └── /ge-ut-musik/musikutgivning
│
├── /community
├── /yellow-music
├── /boka
└── /kontakt
```

This tree is a planning direction, not permission to create every route blindly.

Each child route must justify itself through:

- distinct user intent
- meaningful content depth
- SEO value
- booking/service relevance
- avoidance of duplicate thin pages

---

# 10. Hub-page model

Each major world should have a hub page.

Hub pages are not just link directories.

A hub should answer:

```text
WHAT IS THIS AREA?
WHO IS IT FOR?
WHAT CAN I DO?
HOW DOES YELLOW MUSIC APPROACH IT?
WHAT SERVICES/OPTIONS EXIST?
WHAT SHOULD I DO NEXT?
```

Example `/sang`:

- strong editorial hero
- Yellow Orbit active state: 01
- short positioning
- key ways to develop
- relevant services
- founder/pedagogy trust
- selected image/story
- booking CTA
- related-world links

---

# 11. Detail-page model

Detail pages exist where a service needs enough dedicated explanation.

Potential structure:

```text
AREA CONTEXT
↓
SERVICE HERO
↓
WHO IT IS FOR
↓
WHAT YOU DO / WHAT IS INCLUDED
↓
APPROACH
↓
PRACTICAL INFO
↓
RELATED CONTENT
↓
BOOKING CTA
```

Avoid massive repetitive pages.

Do not copy the same generic intro/CTA across all services.

---

# 12. Page differentiation

Each world should share the same design language but have a distinct expression.

## Sång

Character:

- human
- warm
- expressive
- growth
- personal guidance

Visual direction:

- portrait/voice photography
- more organic Orbit/Bloomline behavior
- soft warm surfaces

## Studio & produktion

Character:

- immersive
- creative
- atmospheric
- focused

Visual direction:

- selective dark surfaces
- rhythmic/resonance behavior
- studio photography
- stronger contrast

## Utbildning

Character:

- structured creativity
- learning
- progression
- practical inspiration

Visual direction:

- modular editorial structures
- timeline/progression where useful
- warmer learning-oriented image sets

Do not turn into LMS/dashboard design.

## Ge ut musik

Character:

- forward motion
- clarity
- control
- artist-first support

Visual direction:

- directional Orbit lines
- editorial process storytelling
- strong concise sections

## Community

Character:

- connection
- participation
- creative environment
- people

Visual direction:

- image-rich
- collage/editorial pairings where justified
- multiple human voices only when verified

---

# 13. Smart cross-linking

The multi-page architecture must feel connected.

Use contextual related links rather than forcing users back to the homepage.

Examples:

```text
Sång → Låtskrivande
Sång → Studio

Studio → Ge ut musik
Studio → Musikproduktion

Utbildning → Community
Utbildning → Studio
```

Cross-links must be contextually meaningful.

Do not generate arbitrary related-page lists.

---

# 14. Navigation behavior

## Desktop

Header should support:

- primary worlds
- Yellow Music
- contact utility
- Boka CTA

If all labels do not fit comfortably:

- use intentional grouped navigation
- do not compress typography excessively
- do not create unreadable tiny nav

A refined mega/dropdown may be considered only if useful.

## Mobile

Mobile navigation is critical.

Suggested structure:

```text
01 Sång
02 Studio & produktion
03 Utbildning
04 Ge ut musik
05 Community

Yellow Music
Kontakt

Boka →
```

The open menu may use Yellow Orbit visual language subtly.

Do not create deeply nested accordion trees unless necessary.

Child services can be discovered on hub pages rather than exposing every route immediately.

---

# 15. Booking linkage

Every service page should eventually be able to send context into:

```text
/boka
```

Conceptually:

```text
/sang/sanglektioner
→ Boka sånglektion
→ /boka?service=...
```

Final implementation details belong to Booking Plan.

Area 02 only establishes booking entry points and contextual intent.

Do not implement booking logic now.

---

# 16. Contact linkage

Contact should remain available when:

- user is unsure what to book
- service needs conversation first
- booking is unavailable
- user has general questions

Do not make “Boka” the only possible action everywhere.

---

# 17. SEO principles

Multi-page architecture should improve search intent matching.

Potential distinct search intents include:

- sånglektioner Uppsala
- sångpedagog Uppsala
- scencoachning
- musikstudio Uppsala
- musikproduktion
- låtskrivarkurs
- musikdistribution
- musikutgivning

Do not create thin pages solely to target keywords.

Preserve/redirect useful existing URLs during migration.

Final SEO mapping belongs to Area 07.

---

# 18. Legacy URL migration

Before launch, create a mapping:

```text
OLD URL
→
NEW CANONICAL URL
```

Examples must be based on actual current-site routes.

Do not delete useful existing search routes without redirects.

Area 02 documents intended consolidation. Area 07 handles final SEO/redirect implementation.

---

# 19. Content ownership

Content should live in structured content modules rather than JSX.

Suggested direction:

```text
src/content/
  site.ts
  navigation.ts
  homepage.ts
  areas/
    sang.ts
    studio.ts
    utbildning.ts
    ge-ut-musik.ts
    community.ts
    yellow-music.ts
```

Service detail content may be further separated where needed.

Do not implement CMS yet.

---

# 20. Route composition

Use reusable page composition components without making all pages identical.

Potential shared patterns:

- AreaHero
- AreaIntro
- ServiceIndex
- EditorialStory
- RelatedWorlds
- BookingCta
- TrustBlock
- OrbitContext

Avoid a generic template where only text and image change.

Each area should have deliberate art direction.

---

# 21. Homepage reduction plan

When Area 02 is implemented, remove or reduce homepage sections that duplicate future area pages.

## Keep / strengthen

- hero
- creative-world navigation
- selected feature
- founder/brand story
- trust
- final CTA

## Remove / reduce

- full singing explanation
- full studio explanation
- full distribution explanation
- oversized placeholders for every category
- complete service catalogue

The homepage should create desire to explore rather than answer everything.

---

# 22. Breadcrumb / context strategy

Traditional breadcrumbs may be useful on deeper service pages:

```text
Yellow Music / Sång / Scencoachning
```

But styling should be editorial and subtle.

Major hub pages should rely more on Orbit/area context.

Do not clutter top-level pages with unnecessary breadcrumbs.

---

# 23. Footer architecture

Footer should reflect the actual multi-page site.

Suggested groups:

## Utforska

- Sång
- Studio & produktion
- Utbildning
- Ge ut musik
- Community

## Yellow Music

- Yellow Music
- Kontakt
- Boka

## More / resources

Only verified and relevant:

- Distribution
- Trustpilot
- social links
- legal/privacy

Do not make the footer a dump of every URL.

---

# 24. Mobile-first content rules

Because mobile is priority 1:

- hub intros must be concise
- key action visible early
- avoid five cards in a horizontal interaction
- no tiny Orbit labels
- related-world navigation must be tappable
- content hierarchy must survive narrow screens
- large images need controlled heights
- avoid excessive repeated explanatory text

A mobile user should be able to move between worlds easily with one thumb.

---

# 25. IA anti-patterns

Do not:

- create a one-page site disguised as multiple routes
- create dozens of thin pages
- expose every child page in main nav
- build mega menus before content requires them
- duplicate the same copy across hub/detail pages
- make booking the only conversion path
- hide important services behind vague creative labels
- make Yellow Orbit necessary to understand navigation
- prioritize cleverness over clarity

---

# 26. Implementation sequence

## IA0 — Inventory reconciliation

Compare:

- Phase 1 service inventory
- existing current-site routes
- current `navigation.ts`
- Master Plan
- this Area 02 plan

Resolve factual route candidates.

Gate:

```text
IA_INPUTS_READY
```

## IA1 — Route map

Produce final route map with:

- canonical path
- page purpose
- target audience
- content owner
- booking relevance
- SEO intent
- legacy route mapping

Gate:

```text
ROUTE_MAP_READY
```

## IA2 — Navigation model

Define:

- desktop nav
- mobile nav
- footer nav
- related-world linking
- area context
- Orbit behavior

Gate:

```text
NAVIGATION_MODEL_READY
```

## IA3 — Homepage role update

Refactor homepage from long one-page structure into portal role.

Do not redesign visual identity from scratch.

Gate:

```text
HOMEPAGE_PORTAL_READY
```

## IA4 — Hub-page shells

Implement initial hub-page shells for:

- Sång
- Studio & produktion
- Utbildning
- Ge ut musik
- Community
- Yellow Music

Use verified content only.

Do not create every child detail page yet unless content and plan justify it.

Gate:

```text
AREA_HUBS_READY
```

## IA5 — Cross-linking and responsive validation

Verify:

- mobile navigation
- Orbit contextual navigation
- related-world paths
- booking/contact entry points
- footer
- no dead links
- no duplicate routes

Gate:

```text
IA_PREVIEW_READY
```

Stop for human review.

---

# 27. Visual review requirement

Before approval, review at minimum:

```text
375
390
430
768
1024
1440
1920
```

Mobile review is primary.

Verify:

- users understand the five worlds
- navigation is clear
- homepage feels lighter
- hub pages feel meaningfully different
- Yellow Orbit adds identity without confusion
- Boka remains accessible
- no page becomes overly long without reason

---

# 28. Documentation updates

When Area 02 work progresses, update:

- `docs/current-state.md`
- `docs/plans/areas/02-information-architecture.md`
- `docs/verification/README.md`
- content/route mapping documents if created

Do not silently change the Master Plan.

---

# 29. Definition of done

Area 02 is complete only when:

- final route map exists
- major customer worlds are clear
- homepage role is reduced to portal/orientation
- desktop/mobile nav model is implemented
- footer architecture reflects real site structure
- hub-page shells exist where approved
- related-world navigation works
- booking/contact entry points are coherent
- mobile architecture is visually verified
- lint passes
- build passes
- no broken routes
- documentation matches implementation
- human review approves the IA preview

Final gate:

```text
INFORMATION_ARCHITECTURE_APPROVED
```

---

# 30. Mandatory stop condition

Stop when:

```text
IA_PREVIEW_READY
```

is reached.

Do not automatically build all detail pages.

Do not begin Booking, Google, CMS or SEO implementation.

Human review must determine:

- whether the site feels like a coherent multi-page Yellow Music world
- whether the homepage is sufficiently focused
- whether Yellow Orbit genuinely improves identity and navigation
- which child detail pages should be built next
