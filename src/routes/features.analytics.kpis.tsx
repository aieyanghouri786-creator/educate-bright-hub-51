import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/analytics/kpis")({
  head: () => ({
    meta: [
      { title: "Analytics · KPIs the numbers that matter. — Smart Campuses" },
      { name: "description", content: "Track the metrics your leadership team reviews every Monday — academic, financial and operational — on one dashboard." },
      { property: "og:title", content: "Analytics · KPIs the numbers that matter. — Smart Campuses" },
      { property: "og:description", content: "Track the metrics your leadership team reviews every Monday — academic, financial and operational — on one dashboard." },
      { property: "og:url", content: "/features/analytics/kpis" },
    ],
    links: [{ rel: "canonical", href: "/features/analytics/kpis" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Analytics · KPIs"} highlight={"the numbers that matter."}
      description={"Track the metrics your leadership team reviews every Monday — academic, financial and operational — on one dashboard."}
      sections={[
        { title: "KPI library", bullets: ["Enrollment and retention", "Fee collection efficiency", "Student-teacher ratios", "Examination pass rates", "Faculty utilization"] },
      ]}
      related={[
        { label: "Back to Analytics", to: "/features/analytics" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
