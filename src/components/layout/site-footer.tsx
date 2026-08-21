import Link from "next/link";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import {
  footerExploreNavigation,
  footerBrandNavigation,
  footerMoreNavigation,
} from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-strong bg-ink text-ink-inverse">
      <Container className="py-10 sm:py-12 lg:py-14">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative flex size-9 shrink-0 items-center justify-center border border-ink-inverse/20 bg-ink-inverse/5">
                <span className="absolute inset-y-1 left-0 w-0.5 bg-brand" aria-hidden />
                <span className="text-label text-brand tracking-[0.12em]">YM</span>
              </span>
              <span>
                <span className="block text-body-sm font-semibold leading-none">{site.shortName}</span>
                <span className="text-meta mt-1 block text-ink-inverse/50">Uppsala</span>
              </span>
            </Link>
            <p className="text-body-sm mt-5 max-w-sm text-ink-inverse/65">{site.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:gap-6">
            <div>
              <p className="text-label text-ink-inverse/45">Utforska</p>
              <ul className="mt-3 space-y-2 text-body-sm">
                {footerExploreNavigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-ink-inverse/75 hover:text-brand">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-label text-ink-inverse/45">Yellow Music</p>
              <ul className="mt-3 space-y-2 text-body-sm">
                {footerBrandNavigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-ink-inverse/75 hover:text-brand">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-label text-ink-inverse/45">Mer</p>
              <ul className="mt-3 space-y-2 text-body-sm">
                <li>
                  <a href={site.contact.phoneHref} className="text-ink-inverse/75 hover:text-brand">
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-ink-inverse/75 hover:text-brand"
                  >
                    {site.contact.email}
                  </a>
                </li>
                {footerMoreNavigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-ink-inverse/75 hover:text-brand"
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="rule-center mt-10 opacity-25" />
        <p className="text-meta mt-5 text-center text-ink-inverse/40 sm:mt-6">
          © {new Date().getFullYear()} {site.legalName}
        </p>
      </Container>
    </footer>
  );
}
