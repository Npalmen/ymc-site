import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { site } from "@/content/site";
import { loadSite } from "@/sanity/load";
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

export async function generateMetadata(): Promise<Metadata> {
  const current = await loadSite();
  const title = `${current.shortName} — Musikbolag i Uppsala`;
  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s | ${current.shortName}`,
    },
    description: current.description,
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: current.name,
      title,
      description: current.description,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const current = await loadSite();
  return (
    <html
      lang={current.locale}
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
              name: current.legalName,
              url: site.url,
              email: current.contact.email,
              telephone: current.contact.phoneHref.replace("tel:", ""),
              address: {
                "@type": "PostalAddress",
                streetAddress: current.addresses.registered.street,
                postalCode: current.addresses.registered.postalCode,
                addressLocality: current.addresses.registered.city,
                addressCountry: "SE",
              },
              areaServed: "Uppsala",
              founder: { "@type": "Person", name: "Biim Frischenfeldt" },
              sameAs: [current.social.trustpilot],
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
