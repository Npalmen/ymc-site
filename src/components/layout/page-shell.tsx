import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { loadNavigation, loadSite } from "@/sanity/load";

export async function PageShell({ children }: { children: React.ReactNode }) {
  const [nav, site] = await Promise.all([loadNavigation(), loadSite()]);
  return (
    <>
      <SiteHeader
        groups={nav.serviceGroups}
        links={nav.topLinks}
        booking={nav.booking}
        phone={site.contact.phone}
        phoneHref={site.contact.phoneHref}
        email={site.contact.email}
        logo={site.logo}
      />
      <main className="flex-1">{children}</main>
      <SiteFooter site={site} columns={nav.footerColumns} />
    </>
  );
}
