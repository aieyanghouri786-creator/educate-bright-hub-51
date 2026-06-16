import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/contact/schedule-demo")({
  head: () => ({
    meta: [
      { title: "Schedule a personalized demo. — Smart Campuses" },
      { name: "description", content: "See Smart Campuses live with a specialist — tailored to your institution type, size and current systems." },
      { property: "og:title", content: "Schedule a personalized demo. — Smart Campuses" },
      { property: "og:description", content: "See Smart Campuses live with a specialist — tailored to your institution type, size and current systems." },
      { property: "og:url", content: "/contact/schedule-demo" },
    ],
    links: [{ rel: "canonical", href: "/contact/schedule-demo" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Contact · Demo"}
      title={"Schedule a personalized"} highlight={"demo."}
      description={"See Smart Campuses live with a specialist — tailored to your institution type, size and current systems."}
      sections={[
        { title: "What you'll see", bullets: ["End-to-end walkthrough of the modules you need", "Real workflows with your kind of data", "Integration questions answered", "Tailored quote within 24 hours"] },
        { title: "How long it takes", body: "30-45 minutes. Bring your principal, IT lead and academic coordinator — and any questions about migrating from your current system." },
      ]}
      related={[
        { label: "Book consultation", to: "/contact/book-consultation" },
        { label: "Request pricing", to: "/contact/request-pricing" },
        { label: "Talk to us", to: "/contact" }
      ]}
    />
  );
}
