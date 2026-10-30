# Sanity CMS

Biim edits the live copy in Sanity Studio at `/studio`. The React pages stay in the repo. The public project is `vjv9ko18`, dataset `production`. Until `siteSettings` has been published, the site renders the files in `src/content`. A production build does not need a write token.

## What the owner creates

1. Confirm access to the existing Sanity project `vjv9ko18` (dataset `production`, public). The Free plan can be used for this commercial site within Sanity’s published quotas. Check [sanity.io/pricing](https://www.sanity.io/pricing) for the current limits.
2. A robot token with **Editor** rights, used only for the seed command below. Do not commit it. You can delete the token after seeding.
3. CORS origins, with credentials allowed. Add each of these in the project API settings:

   - `http://localhost:3000`
   - `https://yellowmusicunited.se`
   - `https://www.yellowmusicunited.se`
   - `https://ymc-site.vercel.app`
   - `https://*.vercel.app` (Vercel preview deployments)
   - `https://*.workers.dev` (Cloudflare Worker URLs)

4. A webhook (API → Webhooks):
   - URL: `https://yellowmusicunited.se/api/revalidate`
   - Trigger on create, update, and delete
   - Projection: `{_type}`
   - Secret: the same string as `SANITY_REVALIDATE_SECRET`
   - HTTP method POST

## Environment variables

| Name | Where | Purpose |
|------|--------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Already `vjv9ko18` in code and `.env.example` | Public project id |
| `NEXT_PUBLIC_SANITY_DATASET` | Already `production` | Public dataset |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Build and runtime | `2026-02-01` |
| `SANITY_API_TOKEN` | Seed command only. Never commit it | Editor token for the one-time write |
| `SANITY_REVALIDATE_SECRET` | Runtime secret | Webhook signature |
| `NEXT_PUBLIC_SITE_URL` | Build | `https://yellowmusicunited.se` in production |

The project id and dataset are not secrets. They are the defaults in `src/sanity/env.ts` and `sanity.config.ts`, so a host does not have to set them. Put the webhook secret in `npx wrangler secret put SANITY_REVALIDATE_SECRET` and in the Vercel project if previews should revalidate.

## Seed

One command. The token stays in the shell, not in a file:

```bash
SANITY_API_TOKEN=sk... npm run sanity:seed
```

The script writes the current Swedish copy (pages, packages, FAQ, timeline, principles, reviews, menu) with stable ids. It uses `createOrReplace`, so running it again updates those same documents instead of creating duplicates. A second run overwrites later edits to those ids. It does not upload photographs. Add images in Studio.

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
