import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/analytics/reports")({
  head: () => ({
    meta: [
      { title: "Analytics · Reports pre-built and custom. — Smart Campuses" },
      { name: "description", content: "Hundreds of pre-built reports for academics, finance, HR and operations — plus a no-code report builder for the rest." },
      { property: "og:title", content: "Analytics · Reports pre-built and custom. — Smart Campuses" },
      { property: "og:description", content: "Hundreds of pre-built reports for academics, finance, HR and operations — plus a no-code report builder for the rest." },
      { property: "og:url", content: "/features/analytics/reports" },
    ],
    links: [{ rel: "canonical", href: "/features/analytics/reports" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Analytics · Reports"} highlight={"pre-built and custom."}
      description={"Hundreds of pre-built reports for academics, finance, HR and operations — plus a no-code report builder for the rest."}
      sections={[
        { title: "Out of the box", bullets: ["Academic performance reports", "Fee collection and dues reports", "Attendance and HR reports", "Admissions funnel reports"] },
        { title: "Build your own", body: "Drag-and-drop fields, filters and visualizations to answer your specific questions without involving IT." },
      ]}
      related={[
        { label: "Back to Analytics", to: "/features/analytics" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
