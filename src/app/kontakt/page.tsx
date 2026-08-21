import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { KontaktPageContent } from "@/components/sections/hub/kontakt-page";
import { kontaktPage } from "@/content/areas/kontakt";

export const metadata: Metadata = {
  title: `${kontaktPage.metaTitle} · Yellow Music`,
  description: kontaktPage.metaDescription,
};

export default function KontaktRoutePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <KontaktPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
