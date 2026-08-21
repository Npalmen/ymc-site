import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { YellowMusicPage } from "@/components/sections/hub/yellow-music-page";
import { yellowMusicPage } from "@/content/areas/yellow-music";

export const metadata: Metadata = {
  title: `${yellowMusicPage.metaTitle} · Yellow Music`,
  description: yellowMusicPage.metaDescription,
};

export default function YellowMusicRoutePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <YellowMusicPage />
      </main>
      <SiteFooter />
    </>
  );
}
