# Route Map — Area 02 (IA1)

**Gate:** `ROUTE_MAP_READY` · **Status:** Implemented shells through `IA_PREVIEW_READY`

## Implemented routes (IA preview)

| Route | Purpose | Audience | Booking | Legacy Wix |
|-------|---------|----------|---------|------------|
| `/` | Portal — brand, orbit nav, featured story, trust | All | High | `/` |
| `/sang` | Sång hub | Vocalists, beginners–experienced | High | `/sångpedagogik`, cluster |
| `/studio` | Studio & produktion hub | Creators, podcast, recording | High | `/distribution`, `/podcast` |
| `/utbildning` | Utbildning hub | Learners, courses | Medium | `/utbildning`, `/låtskrivande` |
| `/ge-ut-musik` | Release hub | Independent artists | Medium | `/musikutgivning`, `/distribution` |
| `/community` | Community hub | Network, collaboration | Low | `/community` |
| `/yellow-music` | Company / founder / values | Trust seekers | Medium | `/om-oss` |
| `/boka` | Booking entry (placeholder) | Ready to book | — | contact flows |
| `/kontakt` | General contact | Unsure / general | Medium | `/kontakt` |
| `/design-system` | Internal DS preview | Team | — | — |

## Planned child routes (NOT built in IA preview)

Documented for migration; hub pages list services without dead links.

| Planned route | World | Legacy | SEO intent |
|---------------|-------|--------|------------|
| `/sang/sanglektioner` | Sång | `/sanglektioner-uppsala` | sånglektioner Uppsala |
| `/sang/scencoachning` | Sång | `/scencoachning` | scencoachning |
| `/sang/fonationsteknik` | Sång | `/fonationsteknik` | fonationsteknik |
| `/sang/sang-och-komp` | Sång | `/sångochkomp` | sång & komp |
| `/studio/starlight-studios` | Studio | `/om-oss` copy | musikstudio Uppsala |
| `/studio/musikproduktion` | Studio | courses | musikproduktion |
| `/studio/podcast` | Studio | `/podcast` | podcast inspelning |
| `/utbildning/latskrivande` | Utbildning | `/låtskrivande` | låtskrivarkurs |
| `/utbildning/musikproduktionskurs` | Utbildning | `/musikproduktionskurs-för-tjejer` | produktionskurs |
| `/utbildning/praktik` | Utbildning | `/praktik` | praktik |
| `/ge-ut-musik/distribution` | Ge ut | `/distribution` | distribution |
| `/ge-ut-musik/musikutgivning` | Ge ut | `/musikutgivning` | musikutgivning |

## Consolidation decisions (IA0)

- **Sångpedagogik hub** → `/sang` (child pages later)
- **Hälsosam sångteknik** → listed on `/sang` hub; child route deferred
- **`/utbildning` duplicate OG with sångpedagogik** → separate world hub at `/utbildning`
- **Distribution hub** → split: studio overview vs `/ge-ut-musik` release focus
- **Blog** → deferred (Area 06/CMS); not in IA preview

## Redirects

Final 301 mapping belongs to Area 07. No redirects implemented in preview build.
