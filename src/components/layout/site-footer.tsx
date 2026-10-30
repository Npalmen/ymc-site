import Link from "next/link";
import { footerColumns as fallbackColumns, type NavLink } from "@/content/navigation";
import { site as fallbackSite, type SiteConfig } from "@/content/site";

export function SiteFooter({
  site = fallbackSite,
  columns = fallbackColumns,
}: {
  site?: SiteConfig;
  columns?: { title: string; links: NavLink[] }[];
}) {
  return (
    <footer className="bg-studio text-ink-inverse">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-5 py-14 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-2 font-display text-3xl">
              Yellow Music
              <span className="size-1.5 translate-y-[-0.35rem] rounded-full bg-brand" aria-hidden />
            </Link>
            <p className="mt-4 max-w-sm text-body-sm text-ink-inverse/70">{site.description}</p>
            <p className="mt-6 text-body-sm text-ink-inverse/80">
              {site.legalName}
              <br />
              {site.addresses.registered.street}
              <br />
              {site.addresses.registered.postalCode} {site.addresses.registered.city}
            </p>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-inverse/75">
              Studio: Starlight Studios, {site.addresses.studio.area}.{" "}
              {site.addresses.studio.street}.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-inverse/70">
                  {column.title}
                </p>
                <ul className="mt-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-body-sm text-ink-inverse/80 hover:text-brand sm:min-h-9"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-body-sm text-ink-inverse/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="inline-flex min-h-11 items-center hover:text-brand" href={site.contact.phoneHref}>
              {site.contact.phone}
            </a>
            <a
              className="inline-flex min-h-11 items-center hover:text-brand"
              href={`mailto:${site.contact.email}`}
            >
              {site.contact.email}
            </a>
            <a
              className="inline-flex min-h-11 items-center hover:text-brand"
              href={site.social.trustpilot}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
