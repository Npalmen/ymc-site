import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeYellowOrbit } from "@/components/sections/home/home-yellow-orbit";
import { HomeFeatured } from "@/components/sections/home/home-featured";
import { HomeAboutSection } from "@/components/sections/home/home-about-section";
import { HomeTrust } from "@/components/sections/home/home-trust";
import { HomeCtaClose } from "@/components/sections/home/home-cta-close";
import { homepage } from "@/content/homepage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.shortName,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HomeHero />
        <HomeYellowOrbit />
        <HomeFeatured />
        <HomeAboutSection />
        <HomeTrust
          eyebrow={homepage.trust.eyebrow}
          title={homepage.trust.title}
          body={homepage.trust.body}
          cta={homepage.trust.cta}
        />
        <HomeCtaClose title={homepage.cta.title} body={homepage.cta.body} />
      </main>
      <SiteFooter />
    </>
  );
}
