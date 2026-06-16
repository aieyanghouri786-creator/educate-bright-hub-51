import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/support/submit-ticket")({
  head: () => ({
    meta: [
      { title: "Submit a Ticket get a response in hours. — Smart Campuses" },
      { name: "description", content: "File a support ticket from your dashboard or here. Most non-urgent tickets get a first response within 4 business hours." },
      { property: "og:title", content: "Submit a Ticket get a response in hours. — Smart Campuses" },
      { property: "og:description", content: "File a support ticket from your dashboard or here. Most non-urgent tickets get a first response within 4 business hours." },
      { property: "og:url", content: "/support/submit-ticket" },
    ],
    links: [{ rel: "canonical", href: "/support/submit-ticket" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Support"}
      title={"Submit a Ticket"} highlight={"get a response in hours."}
      description={"File a support ticket from your dashboard or here. Most non-urgent tickets get a first response within 4 business hours."}
      sections={[
        { title: "Before you file", bullets: ["Check the help center", "Note the affected user and time", "Attach screenshots if possible", "Mention urgency"] },
        { title: "What happens next", body: "You'll receive a ticket number, a first response within SLA, and updates as the team works toward resolution." },
      ]}
      related={[
        { label: "Support overview", to: "/support" },
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
