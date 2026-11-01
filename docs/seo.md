# SEO and ads

Canonical URLs use `NEXT_PUBLIC_SITE_URL`, default `https://yellowmusicunited.se`. On any other host (including `*.vercel.app` and `*.workers.dev`) the root metadata sets `noindex`.

`sitemap.xml` and `robots.txt` use the same origin. `/studio`, `/design-system` and `/api/` are disallowed.

## Google tag

Leave `NEXT_PUBLIC_GTAG_ID` unset until a consent banner exists. The site renders no tag without it. When the variable is a `G-`, `GT-` or `AW-` id, `GoogleConsent` loads gtag with Consent Mode v2 defaults denied (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`). A future banner should call `gtag('consent', 'update', …)`. Do not commit a measurement ID.
