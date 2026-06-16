import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/solutions/multi-campus")({
  head: () => ({
    meta: [
      { title: "Multi-Campus Solutions one console, every branch. — Smart Campuses" },
      { name: "description", content: "Run a network of campuses with centralized control, branch-level autonomy and consolidated reporting." },
      { property: "og:title", content: "Multi-Campus Solutions one console, every branch. — Smart Campuses" },
      { property: "og:description", content: "Run a network of campuses with centralized control, branch-level autonomy and consolidated reporting." },
      { property: "og:url", content: "/solutions/multi-campus" },
    ],
    links: [{ rel: "canonical", href: "/solutions/multi-campus" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Solution"}
      title={"Multi-Campus Solutions"} highlight={"one console, every branch."}
      description={"Run a network of campuses with centralized control, branch-level autonomy and consolidated reporting."}
      sections={[
        { title: "Centralized dashboard", body: "Roll-up of enrollment, attendance, fee collection and academic performance across every campus, in real time." },
        { title: "Branch management", body: "Per-branch configuration of fee structures, programs, staff and calendars — with policies inherited from headquarters." },
        { title: "Unified reporting", bullets: ["Cross-campus benchmarking", "Consolidated financial reports", "Brand-wide academic analytics", "Group-level user provisioning"] },
      ]}
      related={[
        { label: "All Solutions", to: "/solutions" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
