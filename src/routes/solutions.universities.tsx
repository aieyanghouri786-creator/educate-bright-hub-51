import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/solutions/universities")({
  head: () => ({
    meta: [
      { title: "For Universities the higher-education backbone. — Smart Campuses" },
      { name: "description", content: "A unified platform for multi-faculty universities — from departments and research to alumni and convocation." },
      { property: "og:title", content: "For Universities the higher-education backbone. — Smart Campuses" },
      { property: "og:description", content: "A unified platform for multi-faculty universities — from departments and research to alumni and convocation." },
      { property: "og:url", content: "/solutions/universities" },
    ],
    links: [{ rel: "canonical", href: "/solutions/universities" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Solution"}
      title={"For Universities"} highlight={"the higher-education backbone."}
      description={"A unified platform for multi-faculty universities — from departments and research to alumni and convocation."}
      sections={[
        { title: "Multi-faculty management", body: "Faculties, schools, departments and programs configured with their own academic rules, calendars and approval flows." },
        { title: "Research management", bullets: ["Research projects and grants", "Publications and citations", "Scholar registration and supervision", "Ethics and compliance workflows"] },
        { title: "Alumni management", body: "Lifelong alumni records, events, donations and engagement campaigns — keeping graduates connected to the institution." },
      ]}
      related={[
        { label: "All Solutions", to: "/solutions" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
