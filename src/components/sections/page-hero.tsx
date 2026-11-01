import Link from "next/link";
import type { RichLine } from "@/content/rich-text";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { RichLine as RichLineView } from "@/components/ui/rich-line";
import { siteUrl } from "@/lib/seo";

type Crumb = { href: string; label: string };

export function PageHero({
  eyebrow,
  title,
  lede,
  trail,
  path,
  children,
}: {
  eyebrow: string;
  title: RichLine;
  lede: string;
  trail?: Crumb[];
  path?: string;
  children?: React.ReactNode;
}) {
  const currentLabel = title.map((part) => part.text).join("").replace(/\s+/g, " ").trim();
  const crumbs = path
    ? [{ href: "/", label: "Hem" }, ...(trail ?? []), { href: path, label: currentLabel }]
    : [];
  return (
    <section className="pb-4 pt-8 sm:pb-6 sm:pt-14">
      {crumbs.length > 1 ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: crumbs.map((crumb, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: crumb.label,
              item: `${siteUrl()}${crumb.href}`,
            })),
          }}
        />
      ) : null}
      <Container>
        {trail && trail.length > 0 ? (
          <nav aria-label="Brödsmulor" className="mb-5">
            <ol className="flex flex-wrap items-center gap-x-2 text-body-sm text-ink-muted">
              {trail.map((crumb, index) => (
                <li key={crumb.href} className="inline-flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  <Link href={crumb.href} className="inline-flex min-h-11 items-center hover:text-ink">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <Pill>{eyebrow}</Pill>
        <h1 className="text-hero mt-5 max-w-[12em]">
          <RichLineView parts={title} />
        </h1>
        <p className="text-body-lg mt-5 max-w-[38rem] text-ink-muted">{lede}</p>
        {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
      </Container>
    </section>
  );
}
