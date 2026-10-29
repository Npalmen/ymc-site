# Sanity CMS

Biim edits the live copy in Sanity Studio at `/studio`. The React pages stay in the repo. If Sanity is not configured, or the project has not been seeded, the site renders the files in `src/content`. A production build does not need Sanity credentials.

## What the owner creates

1. A Sanity account at [sanity.io/manage](https://www.sanity.io/manage). The Free plan can be used for this commercial site within Sanity’s published quotas. Check [sanity.io/pricing](https://www.sanity.io/pricing) for the current limits.
2. A project. Dataset name: `production`.
3. A robot token with **Editor** rights, used only to seed. Name it `seed`. Put it in `SANITY_API_WRITE_TOKEN`. Do not commit it. You can delete the token after seeding.
4. CORS origins (API → CORS): `http://localhost:3000` and `https://yellowmusicunited.se`, plus the Vercel preview origin if editors use it. Allow credentials.
5. A webhook (API → Webhooks):
   - URL: `https://yellowmusicunited.se/api/revalidate`
   - Trigger on create, update, and delete
   - Projection: `{_type}`
   - Secret: the same string as `SANITY_REVALIDATE_SECRET`
   - HTTP method POST

## Environment variables

| Name | Where | Purpose |
|------|--------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Build and runtime | Project id |
| `NEXT_PUBLIC_SANITY_DATASET` | Build and runtime | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Build and runtime | `2026-02-01` |
| `SANITY_API_WRITE_TOKEN` | Seed machine only | Writes the first documents |
| `SANITY_REVALIDATE_SECRET` | Runtime secret | Webhook signature |
| `NEXT_PUBLIC_SITE_URL` | Build | `https://yellowmusicunited.se` in production |

On Cloudflare, public variables must exist **during the build**. Put the secret in `npx wrangler secret put SANITY_REVALIDATE_SECRET`. On Vercel, add the same names in Project Settings. Empty Sanity variables are valid: the site then uses `src/content`.

## Seed

From a machine that has the env vars:

```bash
npm run sanity:seed
```

The script writes the current Swedish copy (pages, packages, FAQ, timeline, principles, reviews, menu) with stable ids. Running it again replaces those documents. It does not upload photographs. Add images in Studio.

## How editing reaches the site

Pages read Sanity with the cache tag `content`. The webhook calls `revalidateTag` on `/api/revalidate`. On Cloudflare that needs the R2 bucket and D1 table from [deploy-cloudflare.md](deploy-cloudflare.md). The next visit after a publish gets the new copy. There is no separate time-based refresh, so a missed webhook stays stale until the next deploy.

Images use `next/image` and Sanity’s own CDN (`cdn.sanity.io`), including hotspot crop. That path works on Vercel and on Cloudflare without Cloudflare Images.

## Studio

`/studio` is the embedded Studio. The interface language is Swedish (`@sanity/locale-sv-se`). Field titles and help texts are Swedish. The route is not in the public menu and is disallowed in `robots.txt`.

---

# Guide för Biim

Öppna `https://yellowmusicunited.se/studio` och logga in med kontot du fått.

Vänstermenyn heter **Innehåll**.

- **Webbplats och kontaktuppgifter** — telefon, e-post, adresser, Trustpilot, texten på knappen Boka nu, och länkarna Community, Om oss, Kontakt, FAQ.
- **Startsida**, **Sånglektioner**, **Steg för steg**, **Distribution**, **Community**, **Om oss**, **Kontakt**, **Boka**, **FAQ** — texterna på de sidorna.
- **Lektionspaket** — lägg till, ändra eller ta bort ett paket. Pris kan vara `Kostnadsfri` eller ett belopp. Kryssa i *Priset är inte satt ännu* om beloppet saknas.
- **Kurser** — musikproduktion och låtskrivning, och nya kurser. En ny kurs får adressen `/tjanster/utbildning/` plus kortnamnet. Lägg också en rad under **Tjänster i menyn** med samma adress om den ska synas i menyn.
- **Tjänster i menyn** — namn, ordning och adress. *Sidtyp: Egen enkel sida* skapar en ny sida. *Färdig sida* pekar bara på en sida som redan finns.
- **Recensioner** — bara riktiga omdömen. Låt *platshållare* vara ikryssad tills texten är ett riktigt citat. Betyg är 1–5 eller tomt.
- **Frågor och svar**, **Tidslinje**, **Principer** — lägg till och ta bort rader. Ordning är ett tal, lägst först.
- **Egna avsnitt** längst ned på en sida — ett extra textblock med valfri bild.

Rubriker: sätt stjärnor runt ordet som ska vara gult och kursivt. `Låt oss växa *tillsammans*.`

Bilder: ladda upp, skriv vad bilden föreställer, och dra beskärningen. Publicera med **Publish**. Sidan uppdateras strax efter det. Inget sparas om du bara stänger fönstret.

Skriv inte andras namn i en recension om du inte har omdömet. Lämna pris tomt hellre än att hitta på ett.
