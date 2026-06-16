import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/support/system-status")({
  head: () => ({
    meta: [
      { title: "System Status real-time platform health. — Smart Campuses" },
      { name: "description", content: "Live status of all Smart Campuses services, incident history and scheduled maintenance windows." },
      { property: "og:title", content: "System Status real-time platform health. — Smart Campuses" },
      { property: "og:description", content: "Live status of all Smart Campuses services, incident history and scheduled maintenance windows." },
      { property: "og:url", content: "/support/system-status" },
    ],
    links: [{ rel: "canonical", href: "/support/system-status" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Support"}
      title={"System Status"} highlight={"real-time platform health."}
      description={"Live status of all Smart Campuses services, incident history and scheduled maintenance windows."}
      sections={[
        { title: "Components monitored", bullets: ["Web application", "Mobile app", "Parent portal", "Payments gateway", "Email and SMS delivery", "Reporting engine"] },
        { title: "Subscribe to updates", body: "Get email and SMS alerts the moment an incident is detected — and the moment it's resolved." },
      ]}
      related={[
        { label: "Support overview", to: "/support" },
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
