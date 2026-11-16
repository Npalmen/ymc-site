import { draftMode } from "next/headers";
import { LineArt } from "@/components/layout/line-art";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { loadNavigation, loadSite } from "@/sanity/load";

export async function PageShell({ children }: { children: React.ReactNode }) {
  const [nav, site] = await Promise.all([loadNavigation(), loadSite()]);
  const preview = (await draftMode()).isEnabled;
  return (
    <div className={site.lineArt ? "site-page has-line-art" : "site-page"}>
      <LineArt src={site.lineArt} opacity={site.lineArtOpacity} />
      <SiteHeader
        groups={nav.serviceGroups}
        links={nav.topLinks}
        booking={nav.booking}
        phone={site.contact.phone}
        phoneHref={site.contact.phoneHref}
        email={site.contact.email}
        logo={site.logo}
      />
      <main className="flex-1">{preview ? <aside className="border-b border-border bg-brand-soft px-5 py-3 text-center text-body-sm">Förhandsvisning — ej publik · <a className="underline" href="/api/preview/exit">Avsluta förhandsvisning</a></aside> : null}{children}</main>
      <SiteFooter site={site} columns={nav.footerColumns} />
    </div>
  );
}
