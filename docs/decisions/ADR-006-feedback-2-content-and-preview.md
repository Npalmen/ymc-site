# ADR-006 — Feedback 2: redigerbar text och förhandsvisning

Datum: 2026-11-16. Status: implementerat inom ägarens uttryckliga 14-punktsuppdrag.

## Beslut

- Distribution får samma publiceringsmodell som Community: `siteSettings.distributionEnabled`, av som standard. Innehåll och länkar bevaras i CMS, men filtreras i publika vyer och sitemap.
- Sidfot och formulärets gemensamma texter ägs av `siteSettings`. Pedagogik och kompletterande sångkort ligger kvar på `singingPage`; kurskort på respektive `course`. Svenska flikar och guiden är den redaktionella ingången.
- Tomma valfria ingresser och kontaktens studioruta renderar inget. Migreringarna är fältbaserade, använder revisionskontroll och bevarar stabila arraynycklar. En dold innehållsversion förhindrar att en senare tömd hjälptext/ingress fylls på vid omkörning.
- Next.js Draft Mode ger cookie-baserad åtkomst till dolda Community och Distribution via serverhemligheten `PREVIEW_SECRET`. Endast dessa två sökvägar tillåts som mål. Preview använder publicerade Sanity-data; opublicerade CMS-utkast och Sanity Presentation ingår inte.
- Preview är noindex, har en banderoll och en vanlig exit-länk utan prefetch. Publiceringsväxlar och publika länkar påverkas inte av preview-cookien.
- Metadata-streaming stängs av med `htmlLimitedBots: /.*/`. Produktionsprovet visade annars HTTP 200 för strömmade 404-sidor. Metadata och synlighetskontroll får nu bli klara innan svaret börjar skickas. Kostnaden är att första responsen väntar på metadata även för vanliga besökare; inga nya API-anrop införs för detta.

## Avgränsning

Ingen bokningsbackend, autentiseringsplattform, betalning eller Google-integration. Formuläret använder fortsatt mailto. Ingen push, PR eller deployment. CMS-migreringen förbereds och verifieras utan remote skrivning när token saknas.
