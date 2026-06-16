import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/case-studies/multi-campus-deployment")({
  head: () => ({
    meta: [
      { title: "Multi-Campus Deployment 12 branches, one console. — Smart Campuses" },
      { name: "description", content: "A K-12 group running 12 branches across 3 states standardized operations and unlocked benchmarking they'd never had before." },
      { property: "og:title", content: "Multi-Campus Deployment 12 branches, one console. — Smart Campuses" },
      { property: "og:description", content: "A K-12 group running 12 branches across 3 states standardized operations and unlocked benchmarking they'd never had before." },
      { property: "og:url", content: "/case-studies/multi-campus-deployment" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/multi-campus-deployment" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Case Study"}
      title={"Multi-Campus Deployment"} highlight={"12 branches, one console."}
      description={"A K-12 group running 12 branches across 3 states standardized operations and unlocked benchmarking they'd never had before."}
      sections={[
        { title: "The challenge", body: "Each branch ran differently. Fee structures varied. Group leadership had no real-time view of enrollment or performance." },
        { title: "The implementation", body: "Headquarter-controlled policies with branch-level autonomy — fee structures, calendars and programs configured centrally, run locally." },
        { title: "The results", bullets: ["Cross-branch academic benchmarking", "Group-level financial consolidation", "Best-practice playbooks shared across branches", "30% lower per-branch IT spend"] },
      ]}
      related={[
        { label: "All case studies", to: "/case-studies" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
