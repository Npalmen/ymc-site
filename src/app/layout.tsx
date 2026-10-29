import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — Musikbolag i Uppsala`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    title: `${site.shortName} — Musikbolag i Uppsala`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.locale}
      className={`${sourceSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-inverse"
        >
          Hoppa till innehåll
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              name: site.legalName,
              url: site.url,
              email: site.contact.email,
              telephone: "+46730805269",
              address: {
                "@type": "PostalAddress",
                streetAddress: site.addresses.registered.street,
                postalCode: site.addresses.registered.postalCode,
                addressLocality: site.addresses.registered.city,
                addressCountry: "SE",
              },
              areaServed: "Uppsala",
              founder: { "@type": "Person", name: "Biim Frischenfeldt" },
              sameAs: [site.social.trustpilot],
            }),
          }}
        />
        <div id="innehall" className="flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
