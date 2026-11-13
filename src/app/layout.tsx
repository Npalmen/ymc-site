import type { Metadata } from "next";
import { headers } from "next/headers";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { SiteChrome } from "@/components/motion/site-chrome";
import { GoogleConsent } from "@/components/seo/google-consent";
import { JsonLd } from "@/components/seo/json-ld";
import { isIndexableHost, siteUrl } from "@/lib/seo";
import { loadSite } from "@/sanity/load";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const current = await loadSite();
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const indexable = isIndexableHost(host);
  const title = `${current.shortName} — Sånglektioner i Uppsala`;
  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: title,
      template: `%s | ${current.shortName}`,
    },
    description: current.description,
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: current.name,
      title,
      description: current.description,
      images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Yellow Music United — musikbolag i Uppsala" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: current.description,
      images: ["/brand/og.png"],
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const current = await loadSite();
  return (
    <html
      lang={current.locale}
      className={`${sourceSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-inverse"
        >
          Hoppa till innehåll
        </a>
        <GoogleConsent />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": ["MusicSchool", "LocalBusiness"],
            name: current.legalName,
            url: siteUrl(),
            image: `${siteUrl()}/brand/og.png`,
            email: current.contact.email,
            telephone: current.contact.phoneHref.replace("tel:", ""),
            address: {
              "@type": "PostalAddress",
              streetAddress: current.addresses.registered.street,
              postalCode: current.addresses.registered.postalCode,
              addressLocality: current.addresses.registered.city,
              addressCountry: "SE",
            },
            areaServed: { "@type": "City", name: "Uppsala" },
            founder: {
              "@type": "Person",
              name: "Biim Frischenfeldt",
              jobTitle: "Grundare",
            },
            sameAs: [current.social.trustpilot].filter(Boolean),
          }}
        />
        <SiteChrome>
          <div id="innehall" className="flex min-h-full flex-1 flex-col">
            {children}
          </div>
        </SiteChrome>
      </body>
    </html>
  );
}
