import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics Dashboard decisions backed by data. — Smart Campuses" },
      { name: "description", content: "Real-time dashboards for principals, deans and trustees — academic performance, financial health and operational KPIs in one place." },
      { property: "og:title", content: "Analytics Dashboard decisions backed by data. — Smart Campuses" },
      { property: "og:description", content: "Real-time dashboards for principals, deans and trustees — academic performance, financial health and operational KPIs in one place." },
      { property: "og:url", content: "/features/analytics" },
    ],
    links: [{ rel: "canonical", href: "/features/analytics" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Analytics Dashboard"} highlight={"decisions backed by data."}
      description={"Real-time dashboards for principals, deans and trustees — academic performance, financial health and operational KPIs in one place."}
      sections={[
        { title: "What's included", bullets: ["Reports", "KPIs", "Institution Insights"] },
        { title: "Designed for leaders", body: "Pre-built dashboards for the questions you ask every Monday — plus a flexible report builder for the ones you ask once." },
      ]}
      related={[
        { label: "Reports", to: "/features/analytics/reports" },
        { label: "Kpis", to: "/features/analytics/kpis" },
        { label: "Insights", to: "/features/analytics/insights" }
      ]}
    />
  );
}
