# Route Map

**Status:** Client revision, 2026-10-29. See ADR-004. Earlier five-world preview routes redirect.

## Implemented routes (public)

| Route | Purpose | Legacy |
|-------|---------|--------|
| `/` | Homepage | `/` |
| `/tjanster` | Services index | `/tjänster` |
| `/tjanster/sanglektioner` | Singing lessons | `/sångpedagogik`, `/sanglektioner-uppsala`, technique pages |
| `/tjanster/sanglektioner/steg-for-steg` | How lessons proceed | — |
| `/tjanster/sanglektioner/lektionspaket` | Trial, 6 and 12 sessions | — |
| `/tjanster/utbildning` | Education hub, praktik note | `/utbildning`, `/praktik` |
| `/tjanster/utbildning/musikproduktion-for-tjejer` | Production course | `/musikproduktionskurs-för-tjejer` |
| `/tjanster/utbildning/latskrivning` | Songwriting | `/låtskrivande` |
| `/tjanster/distribution` | Release, podcast, studio hire | `/distribution`, `/musikutgivning`, `/podcast` |
| `/community` | Community | `/community`, blog (deferred) |
| `/om-oss` | Founder, values, Starlight | `/om-oss`, former `/yellow-music`, `/studio` |
| `/kontakt` | Contact | `/kontakt` |
| `/boka` | Planning-meeting form, no calendar | contact / mailto flows |
| `/faq` | Questions from verified facts | — |
| `/design-system` | Internal preview | — |

Preview routes `/sang`, `/studio`, `/utbildning`, `/ge-ut-musik` and `/yellow-music` 307-redirect. Wix paths redirect in `next.config.ts` as temporary 307s until Area 07 sets final 301s.

## Earlier child-route notes

These paths were planned before ADR-004 and are not the public URLs. The table is kept so the old intent is traceable. Do not link to them.

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
