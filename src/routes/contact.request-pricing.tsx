import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/contact/request-pricing")({
  head: () => ({
    meta: [
      { title: "Request a custom quote. — Smart Campuses" },
      { name: "description", content: "Pricing depends on student count, modules, campuses and integrations. Tell us about your institution and we'll send a tailored quote within 24 hours." },
      { property: "og:title", content: "Request a custom quote. — Smart Campuses" },
      { property: "og:description", content: "Pricing depends on student count, modules, campuses and integrations. Tell us about your institution and we'll send a tailored quote within 24 hours." },
      { property: "og:url", content: "/contact/request-pricing" },
    ],
    links: [{ rel: "canonical", href: "/contact/request-pricing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Contact · Pricing"}
      title={"Request a"} highlight={"custom quote."}
      description={"Pricing depends on student count, modules, campuses and integrations. Tell us about your institution and we'll send a tailored quote within 24 hours."}
      sections={[
        { title: "What we need", bullets: ["Institution type and size", "Number of active students and staff", "Modules you're most interested in", "Any integrations or custom requirements"] },
        { title: "Standard plans", body: "If you want a ballpark first, the standard plans (Starter, Professional, Enterprise) are listed on the Pricing page." },
      ]}
      related={[
        { label: "View Pricing", to: "/pricing" },
        { label: "Schedule demo", to: "/contact/schedule-demo" },
        { label: "Talk to us", to: "/contact" }
      ]}
    />
  );
}
