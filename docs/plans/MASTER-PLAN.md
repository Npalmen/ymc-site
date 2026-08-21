# Yellow Music United — Master Product Plan

**Document:** `docs/plans/MASTER-PLAN.md`  
**Role:** Product-level source of truth  
**Status:** ACTIVE

---

# 1. Product objective

Rebuild Yellow Music United's website into a professionally designed digital platform for the business while preserving the existing brand identity.

This is not merely a cosmetic redesign.

The finished platform should support the complete customer journey:

```text
DISCOVER
   ↓
UNDERSTAND
   ↓
TRUST
   ↓
CHOOSE SERVICE
   ↓
BOOK
   ↓
CONFIRMATION
   ↓
VISIT / SESSION
   ↓
FOLLOW-UP
   ↓
RETURN / REVIEW
```

The website should ultimately become Yellow Music's primary digital customer interface.

---

# 2. Brand objective

Preserve what already makes Yellow Music recognizable:

- existing logo
- yellow brand identity
- existing photography
- sunflower imagery
- creative personality
- warmth
- human presence
- approachable character

Improve:

- design quality
- hierarchy
- typography
- navigation
- spacing
- page composition
- responsiveness
- conversion paths
- credibility
- service clarity

Target outcome:

> The site should feel unmistakably like Yellow Music, but like Yellow Music has grown into an established and professionally presented creative music company.

---

# 3. Design direction

The visual direction is:

```text
INDEPENDENT MUSIC COMPANY
+
CREATIVE STUDIO
+
EDITORIAL MUSIC DESIGN
+
PROFESSIONAL SERVICE BUSINESS
```

Not:

```text
generic SaaS
generic Wix template
corporate consulting site
luxury fashion site
neon music-tech cliché
```

Core characteristics:

- strong photography
- editorial typography
- generous whitespace
- deliberate asymmetry
- strong grid
- yellow used intentionally
- warm neutral canvas
- restrained motion
- human storytelling
- clear conversion paths

---

# 4. Primary audiences

The architecture must support several customer intents without making the homepage confusing.

Broad customer groups include people interested in:

## Develop

- singing
- vocal coaching
- songwriting
- creative development
- education

## Create

- recording
- studio
- music production
- podcast production

## Release

- music distribution
- release guidance
- artist support

## Participate

- courses
- workshops
- community-related activities

The exact service inventory must be derived from current verified Yellow Music offerings.

Do not invent services.

---

# 5. Primary information architecture

Initial top-level navigation direction:

```text
Sång
Studio & skapande
Ge ut musik
Kurser & community
Om Yellow Music
```

Primary global CTA:

```text
Boka
```

Secondary utility:

```text
Kontakt
```

The main navigation must not expose every service and sub-page simultaneously.

Detailed services should be organized under meaningful customer-facing categories.

---

# 6. Core platform areas

The platform is divided into independent but connected areas.

| Area | Purpose | Plan |
|---|---|---|
| Design System | Visual language and component foundation | `01-design-system.md` |
| Information Architecture | Navigation, pages, service structure | `02-information-architecture.md` |
| Homepage | Primary brand/conversion experience | `03-homepage.md` |
| Booking | Availability and appointment flow | `04-booking.md` |
| Google Integrations | Calendar, Business Profile, Places | `05-google-integrations.md` |
| Content/CMS | Sustainable content management | `06-content-cms.md` |
| SEO/Local | Organic/local discovery | `07-seo-local-discovery.md` |
| Analytics | Measurement and conversion tracking | `08-analytics.md` |
| Launch | Production readiness and operations | `09-launch-operations.md` |

Area plans are authoritative for implementation details.

---

# 7. Target technical architecture

Initial frontend:

- Next.js App Router
- TypeScript
- Tailwind CSS
- server components by default
- next/image
- next/font

Conceptual architecture:

```text
PUBLIC WEBSITE
      │
      ├── Content
      ├── Services
      ├── Reviews
      ├── Contact
      │
      └── Booking
             │
             ├── Availability engine
             ├── Booking database
             ├── Notifications
             │
             └── Google adapter
                    ├── Calendar
                    ├── Business Profile
                    └── Places
```

External providers must be isolated behind internal adapters.

The application must not spread Google-specific types and assumptions throughout the UI.

---

# 8. Delivery strategy

Development occurs in controlled phases.

## PHASE 0 — FOUNDATION

Status:

`COMPLETE`

Deliver:

- repository
- Next.js foundation
- architectural directories
- documentation system
- brand inventory
- current-state
- operating instructions

Gate:

```text
FOUNDATION_READY
```

---

## PHASE 1 — BRAND & CONTENT AUDIT

Status:

`NOT_STARTED`

Inspect existing Yellow Music website.

Establish:

- exact reusable assets
- existing logo variants
- brand yellow
- content inventory
- services
- navigation
- company information
- contact information
- existing calls-to-action
- useful copy
- redundant copy
- obsolete copy
- missing content

No major UI implementation before this audit is complete.

Gate:

```text
BRAND_CONTENT_SOURCE_READY
```

---

## PHASE 2 — DESIGN SYSTEM

Status:

`NOT_STARTED`

Create:

- canvas/background system
- brand colors
- typography
- spacing scale
- containers
- grids
- buttons
- links
- image treatments
- section shells
- forms
- navigation primitives
- motion principles
- responsive principles

Build a small design-system preview before building the entire homepage.

Gate:

```text
DESIGN_SYSTEM_APPROVED
```

---

## PHASE 3 — HOMEPAGE

Status:

`NOT_STARTED`

Create a complete high-quality homepage.

Initial narrative:

```text
Navigation

Hero

Three paths
Utveckla / Skapa / Ge ut

Featured singing section

Studio / creation

Release / distribution

Yellow Music human story

Social proof

Community

Booking CTA

Footer
```

The homepage must establish the visual quality bar for all future pages.

Gate:

```text
HOMEPAGE_DESIGN_APPROVED
```

Required review at:

- desktop
- laptop
- tablet
- mobile

Do not automatically continue to every sub-page before the homepage direction is accepted.

---

## PHASE 4 — CORE WEBSITE

Status:

`NOT_STARTED`

Build reusable page templates and actual service routes.

Likely categories:

```text
/sang
/studio
/ge-ut-musik
/kurser
/om
/kontakt
```

Exact routes are determined by the information-architecture plan.

Do not create unnecessary pages simply because the current website has them.

Consolidation is allowed where it improves customer comprehension and SEO intent remains valid.

Gate:

```text
CORE_SITE_READY
```

---

## PHASE 5 — BOOKING

Status:

`NOT_STARTED`

Build Yellow Music's own booking experience.

Booking is a first-class product domain.

Do not solve booking by embedding an arbitrary iframe if a native experience is viable.

Initial experience:

```text
Choose service
      ↓
Choose relevant person/resource if applicable
      ↓
Choose date
      ↓
Choose available time
      ↓
Enter details
      ↓
Confirm
      ↓
Calendar sync
      ↓
Confirmation
```

Google Calendar will act as an availability constraint and operational calendar.

Detailed requirements live in:

`docs/plans/areas/04-booking.md`

Gate:

```text
BOOKING_PRODUCTION_READY
```

---

## PHASE 6 — GOOGLE ECOSYSTEM

Status:

`NOT_STARTED`

Integrate relevant public and authenticated Google services.

Potential integrations:

### Google Calendar

- availability
- blocking existing appointments
- booking event creation
- booking updates
- cancellations

### Google Business Profile

- booking/action link
- future business-profile management where appropriate

### Google Places

- rating
- review count
- selected review information
- Maps/place information

Detailed requirements live in:

`05-google-integrations.md`

Gate:

```text
GOOGLE_INTEGRATIONS_READY
```

---

## PHASE 7 — CONTENT MANAGEMENT

Status:

`NOT_STARTED`

Determine what the owner actually needs to edit.

Potential editable content:

- services
- text
- workshops/events
- team
- images
- temporary notices
- featured content
- booking settings

Do not introduce a CMS simply because websites often have one.

Select the simplest maintainable approach that matches real usage.

Gate:

```text
CONTENT_OPERATIONS_READY
```

---

## PHASE 8 — SEO & LOCAL DISCOVERY

Status:

`NOT_STARTED`

Implement:

- semantic structure
- metadata
- canonical URLs
- sitemap
- robots
- structured data
- LocalBusiness-relevant structured data where accurate
- service pages
- location relevance
- internal linking
- image metadata
- performance
- redirects from old URLs where needed

Protect existing useful search visibility during migration.

Gate:

```text
SEO_MIGRATION_READY
```

---

## PHASE 9 — ANALYTICS

Status:

`NOT_STARTED`

Measure useful business outcomes rather than vanity metrics.

Core events should eventually include:

```text
booking_started
service_selected
date_selected
booking_completed
contact_started
contact_completed
phone_clicked
email_clicked
maps_clicked
review_clicked
```

No analytics implementation may compromise booking privacy.

Gate:

```text
MEASUREMENT_READY
```

---

## PHASE 10 — PRODUCTION HARDENING

Status:

`NOT_STARTED`

Verify:

- accessibility
- responsive design
- cross-browser behavior
- image optimization
- performance
- SEO
- forms
- errors
- booking concurrency
- calendar failures
- empty states
- loading states
- legal pages
- privacy requirements
- cookie requirements if applicable
- secrets
- production environment
- backups if persistent booking data exists

Gate:

```text
PRODUCTION_READY
```

---

## PHASE 11 — LAUNCH

Status:

`NOT_STARTED`

Launch procedure must include:

- production deployment
- domain configuration
- redirects
- sitemap
- Google Search Console
- analytics verification
- Google Business Profile link verification
- booking production test
- Calendar production test
- contact test
- mobile verification
- rollback plan

Gate:

```text
YELLOW_MUSIC_LIVE
```

---

# 9. Booking as a platform capability

Booking is intentionally separated from generic page UI.

Reason:

Future services may require different combinations of:

```text
SERVICE
+
PERSON
+
ROOM
+
DURATION
+
CALENDAR
+
BUFFER
+
AVAILABILITY RULE
```

Examples:

A singing lesson may require:

```text
teacher + time
```

A studio session may require:

```text
studio + time
```

A coached studio session might require:

```text
person + studio + time
```

The booking architecture must support these combinations rather than assuming all bookings are identical.

---

# 10. Future extensibility

The architecture should leave room for later capabilities such as:

- payment
- deposits
- discount codes
- packages
- memberships
- recurring lessons
- waiting lists
- gift cards
- customer accounts
- customer history
- attendance
- review requests
- automated reminders

These are NOT automatically included in initial scope.

Do not implement speculative complexity prematurely.

---

# 11. Security principles

All future integrations must follow:

- least privilege
- server-side secrets
- no OAuth tokens exposed to client
- encrypted sensitive credentials where applicable
- explicit authorization
- input validation
- rate limiting for public transactional endpoints
- idempotent writes
- auditability for booking changes

---

# 12. Data principles

Collect only information needed to operate the service.

Do not create unnecessary customer profiles.

Booking information is personal data and must be handled accordingly.

No sensitive information should be placed inside URLs, analytics events or client-side logs.

---

# 13. Responsive quality bar

Every major interface must explicitly support:

- ~375 px
- ~430 px
- ~768 px
- ~1024 px
- ~1440 px
- wide desktop

Mobile is a dedicated design target.

Desktop layouts must not merely collapse into an accidental vertical stack.

---

# 14. Quality bar

The site must not merely be:

> better than the current Wix site.

The quality target is:

> a professionally art-directed website that plausibly belongs to an established creative music company.

Every page should demonstrate:

- clear hierarchy
- consistent spacing
- strong imagery
- deliberate typography
- restrained motion
- excellent mobile composition
- obvious customer intent
- obvious next action

---

# 15. Scope control

Cursor must not expand a task simply because related work is obvious.

Example:

If working on homepage design:

Do not implement Google OAuth.

If working on booking availability:

Do not redesign the footer.

If working on Google reviews:

Do not refactor unrelated service content.

Use the relevant area plan.

---

# 16. Definition of done

An area is not complete until:

1. implementation exists
2. acceptance criteria pass
3. relevant automated checks pass
4. visual verification is performed where applicable
5. edge cases are tested
6. documentation reflects reality
7. current-state is updated

---

# 17. Current priority order

Recommended initial order:

```text
1. Foundation
2. Brand/content audit
3. Design system
4. Homepage
5. Core pages
6. Booking
7. Google integrations
8. SEO/content operations
9. Analytics
10. Production hardening
11. Launch
```

Booking architecture may be designed earlier, but should not derail the visual prototype.

The first major product milestone is:

```text
HOMEPAGE_DESIGN_APPROVED
```

The first major operational milestone is:

```text
BOOKING_PRODUCTION_READY
```

The final milestone is:

```text
YELLOW_MUSIC_LIVE
```
