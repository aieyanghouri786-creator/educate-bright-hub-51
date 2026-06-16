import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/analytics/insights")({
  head: () => ({
    meta: [
      { title: "Analytics · Institution Insights beyond the dashboard. — Smart Campuses" },
      { name: "description", content: "Trend analysis, cohort comparisons and predictive signals that help leadership act earlier." },
      { property: "og:title", content: "Analytics · Institution Insights beyond the dashboard. — Smart Campuses" },
      { property: "og:description", content: "Trend analysis, cohort comparisons and predictive signals that help leadership act earlier." },
      { property: "og:url", content: "/features/analytics/insights" },
    ],
    links: [{ rel: "canonical", href: "/features/analytics/insights" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Analytics · Institution Insights"} highlight={"beyond the dashboard."}
      description={"Trend analysis, cohort comparisons and predictive signals that help leadership act earlier."}
      sections={[
        { title: "What you'll find", bullets: ["Multi-year trend analysis", "Cohort and program comparisons", "Predictive at-risk indicators", "Benchmark vs peer institutions"] },
      ]}
      related={[
        { label: "Back to Analytics", to: "/features/analytics" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
