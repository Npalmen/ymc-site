import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HubPage } from "@/components/sections/hub/hub-page";
import { utbildningHub } from "@/content/areas/utbildning";

export const metadata: Metadata = {
  title: `${utbildningHub.metaTitle} · Yellow Music`,
  description: utbildningHub.metaDescription,
};

export default function UtbildningPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HubPage content={utbildningHub} />
      </main>
      <SiteFooter />
    </>
  );
}
