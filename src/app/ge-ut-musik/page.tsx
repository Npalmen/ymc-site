import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HubPage } from "@/components/sections/hub/hub-page";
import { geUtMusikHub } from "@/content/areas/ge-ut-musik";

export const metadata: Metadata = {
  title: `${geUtMusikHub.metaTitle} · Yellow Music`,
  description: geUtMusikHub.metaDescription,
};

export default function GeUtMusikPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HubPage content={geUtMusikHub} />
      </main>
      <SiteFooter />
    </>
  );
}
