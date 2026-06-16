import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/solutions/training-institutes")({
  head: () => ({
    meta: [
      { title: "For Training Institutes courses and certifications at scale. — Smart Campuses" },
      { name: "description", content: "Built for vocational, coaching and professional training institutes — quick batch setup, online learning and certificate issuance." },
      { property: "og:title", content: "For Training Institutes courses and certifications at scale. — Smart Campuses" },
      { property: "og:description", content: "Built for vocational, coaching and professional training institutes — quick batch setup, online learning and certificate issuance." },
      { property: "og:url", content: "/solutions/training-institutes" },
    ],
    links: [{ rel: "canonical", href: "/solutions/training-institutes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Solution"}
      title={"For Training Institutes"} highlight={"courses and certifications at scale."}
      description={"Built for vocational, coaching and professional training institutes — quick batch setup, online learning and certificate issuance."}
      sections={[
        { title: "Course management", body: "Short courses, long programs, blended batches and self-paced cohorts — manage them all from one console." },
        { title: "Certifications", body: "Auto-issue branded, verifiable certificates with custom criteria and templates per program." },
        { title: "Student tracking", bullets: ["Batch-wise progress", "Assessment scores and skill ratings", "Drop-off and engagement metrics", "Placement and outcome tracking"] },
      ]}
      related={[
        { label: "All Solutions", to: "/solutions" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
