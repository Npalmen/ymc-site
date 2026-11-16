# Feedback utkast 2 — verifiering

Datum: 2026-11-16. Branch: `ymu-feedback-2`. Ingen push, PR eller deployment.

## Resultat

- `npm run build`: godkänd, inklusive slutlig ändring för riktiga HTTP 404-svar.
- `npm run lint`: godkänd utan varningar.
- `npm run typecheck`: godkänd.
- `npm test`: 16 tester godkända. Täcker befintliga tester samt synlighetsväxlar, migreringens idempotens, bevarade `_key`, tomma valfria fält, giltiga Studio-grupper och Sanity-data genom sidornas faktiska loaders.
- Chromium: startsida, Om oss, Sånglektioner, Utbildning, Kontakt och Boka vid **390, 768 och 1440 px**. Inget horisontellt överflöde, inga figcaptions, distributionslänkar eller bokstavliga rubrikasterisker. Gemensam formulärrubrik verifierad på sida och i mobilruta/modal. Se [browser-checks.txt](browser-checks.txt).
- Produktionsbyggnad: båda dolda sidorna ger 404; giltig hemlighet ger preview-cookie, sida med noindex och banderoll; extern redirect nekas; exit återställer 404. Se [preview-checks.txt](preview-checks.txt). Testets hemlighet skapades tillfälligt och sparades aldrig.
- Visuell granskning: större huvudrubrik behåller två rader vid 390 px; värdeorden visas 01/02 över 03/04 i lika höga rader; rubrikerna är läsbara. Bokningsvyer och desktophero granskade.

## Bilder

Fullängdsbilder ligger i [before/](before/) och [after/](after/). Båda mapparna har `home`, `about`, `singing`, `education`, `contact`, `booking` med suffix `-390.png`, `-768.png`, `-1440.png` (18 bilder per omgång).

Eftermappen har dessutom närbilder av `hero`, `values`, `booking-sheet` och öppna `menu` vid alla tre bredderna samt `preview-community.png` och `preview-distribution.png`. Förebilderna togs från branchens ursprungliga kod med aktuellt publicerat CMS-innehåll. Bilderna är lokala webbläsarprov, inte en driftsättning eller uppdatering av Sanity.

## Sanity och kvarvarande driftsteg

PR #6:s migrering förhandsgranskades mot det befintliga datasetet: sju dokument. Den sammansatta Feedback-2-migreringen omfattar nio dokument; se [migration-preview.json](migration-preview.json). Migreringslogiken är testad och seeding skapar bara saknade dokument. `SANITY_API_TOKEN` saknades, så **ingen remote skrivning utfördes**. Pedagogiken och saknade kurskorttexter använder fallback tills migreringen applicerats. Loader-testet verifierar att redigerade CMS-värden sedan används och inte ersätts med fallback.

Följ [Studio-guiden](../../biim-studio-guide.md) för applicering, cacheuppdatering och miljövariabeln `PREVIEW_SECRET`. Sanity Presentation/opublicerade Sanity-utkast ingår inte; preview visar publicerat innehåll på dolda sidor. Ingen riktig formulärförfrågan skickades.

## Versionshantering

Logiska commits kunde inte skapas: `git add` returnerade `Unable to create '.git/index.lock': Permission denied`. Det är en miljöbegränsning, inte ett testfel. Alla ändringar ligger kvar ocommittade. `ymu-req2/` finns i `.gitignore` och har inte stagats.
