# Deploy on Cloudflare

Yellow Music stays a Next.js app. Vercel can keep building previews with `npm run build`. Production on Cloudflare uses the OpenNext adapter, which turns that build into a Worker.

The Workers Free plan has no ban on commercial sites. It is capped (about 100,000 requests per day and 10 ms of CPU per request). A Next.js page can exceed 10 ms and then Cloudflare returns error 1102. If that happens, turn on the Workers Paid plan (from $5 per month). Static files do not count as Worker requests.

Do not move e-post to Cloudflare. The domain stays registered at One.com. Google Workspace keeps the mail.

## 1. Accounts and the GitHub connection

1. Create a free account at [cloudflare.com](https://dash.cloudflare.com/sign-up).
2. Install Wrangler locally once: `npx wrangler login`.
3. In the Cloudflare dashboard, open **Workers & Pages** → **Create** → **Import a repository** and choose this GitHub repo.
4. Build settings:
   - Build command: `npm run deploy`
   - The `build` script must stay `next build`. Vercel uses that. `npm run deploy` runs the OpenNext build and then `wrangler deploy`.
5. The public Sanity id `vjv9ko18` and dataset `production` are already in the source. Set `SANITY_REVALIDATE_SECRET` as a Worker secret before relying on the webhook. See [cms.md](cms.md).

`npm run deploy` needs a Cloudflare API token in CI (`CLOUDFLARE_API_TOKEN`) with Workers, R2, and D1 edit rights, plus `CLOUDFLARE_ACCOUNT_ID`.

## 2. Create the cache stores

On-demand updates use three free-tier resources. Create them once:

```bash
npx wrangler r2 bucket create yellow-music-next-cache
npx wrangler d1 create yellow-music-tag-cache
npx wrangler d1 execute yellow-music-tag-cache --remote --file=cloudflare/d1-tag-cache.sql
```

Copy the D1 `database_id` into `wrangler.jsonc` (replace `00000000-0000-0000-0000-000000000000`).

The Durable Object in that file is SQLite-backed, which the free plan allows. It only coordinates cache refresh. It is not a database for the site content.

## 3. Point yellowmusicunited.se at Cloudflare without breaking mail

1. In One.com, open the DNS zone for `yellowmusicunited.se` and write down every record. Especially MX, TXT (SPF, DKIM, DMARC), and any Google verification CNAMEs.
2. In Cloudflare, **Add a site** → `yellowmusicunited.se` → Free plan.
3. Recreate the mail records in Cloudflare **before** you switch nameservers. Typical Google Workspace MX records (confirm they still match Google’s current list):

   | Type | Name | Content | Priority | Proxy |
   |------|------|---------|----------|-------|
   | MX | `@` | `aspmx.l.google.com` | 1 | DNS only |
   | MX | `@` | `alt1.aspmx.l.google.com` | 5 | DNS only |
   | MX | `@` | `alt2.aspmx.l.google.com` | 5 | DNS only |
   | MX | `@` | `alt3.aspmx.l.google.com` | 10 | DNS only |
   | MX | `@` | `alt4.aspmx.l.google.com` | 10 | DNS only |

   Copy the existing SPF TXT (`v=spf1 ... include:_spf.google.com ...`) and DKIM/DMARC records exactly. Do not enable Cloudflare Email Routing. Do not delete MX records.

4. Cloudflare shows two nameservers. At One.com, change the domain’s nameservers to those. The registration stays at One.com. Only DNS hosting moves.
5. After the Worker deploy is green, add a **custom domain** on the Worker for `yellowmusicunited.se` and `www.yellowmusicunited.se`. That creates the website records. Leave the MX records untouched.
6. Send a test email to `info@yellowmusicunited.se` after the nameserver change.

## 4. Vercel previews

Leave the Vercel project connected to GitHub. Its build command stays `npm run build` / `next build`. Preview URLs keep working. Do not attach `yellowmusicunited.se` to Vercel once the domain is on the Worker, or the two hosts will fight over the same name.

## 5. Local commands

```bash
npm run dev          # Next.js, same as today
npm run build        # Vercel-compatible build
npm run cf:build     # OpenNext output in .open-next
npm run preview      # build and run the Worker locally
npm run deploy       # build and publish
```

`.dev.vars` is gitignored. Put local Worker secrets there, not in `wrangler.jsonc`.
