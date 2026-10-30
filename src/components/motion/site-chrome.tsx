import { MotionRoot } from "@/components/motion/motion-root";
import { loadNavigation, loadPlanning, loadSite } from "@/sanity/load";

export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const [planning, current, nav] = await Promise.all([loadPlanning(), loadSite(), loadNavigation()]);
  return (
    <MotionRoot copy={planning} recipient={current.contact.email} label={nav.booking.label}>
      {children}
    </MotionRoot>
  );
}
