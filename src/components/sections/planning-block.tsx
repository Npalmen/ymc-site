import { PlanningMeeting } from "@/components/sections/planning-meeting";
import { loadPlanning, loadSite } from "@/sanity/load";

export async function PlanningBlock({ defaultTopic }: { defaultTopic?: string }) {
  const [planning, current] = await Promise.all([loadPlanning(), loadSite()]);
  return (
    <PlanningMeeting
      defaultTopic={defaultTopic}
      copy={planning}
      topics={planning.topics}
      recipient={current.contact.email}
    />
  );
}
