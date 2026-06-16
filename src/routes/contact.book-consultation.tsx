import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/contact/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a free consultation. — Smart Campuses" },
      { name: "description", content: "A no-strings 30-minute call with an education-software specialist to discuss your institution's goals and constraints." },
      { property: "og:title", content: "Book a free consultation. — Smart Campuses" },
      { property: "og:description", content: "A no-strings 30-minute call with an education-software specialist to discuss your institution's goals and constraints." },
      { property: "og:url", content: "/contact/book-consultation" },
    ],
    links: [{ rel: "canonical", href: "/contact/book-consultation" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Contact · Consultation"}
      title={"Book a free"} highlight={"consultation."}
      description={"A no-strings 30-minute call with an education-software specialist to discuss your institution's goals and constraints."}
      sections={[
        { title: "What we'll discuss", bullets: ["Your current systems and pain points", "Your academic and operational priorities", "A right-sized rollout plan", "Budget and timeline expectations"] },
        { title: "Who should join", body: "At minimum the head of the institution and the IT lead. For multi-campus, include the group academic head." },
      ]}
      related={[
        { label: "Schedule demo", to: "/contact/schedule-demo" },
        { label: "Request pricing", to: "/contact/request-pricing" },
        { label: "Talk to us", to: "/contact" }
      ]}
    />
  );
}
