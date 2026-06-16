import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "We're here when you need us. — Smart Campuses" },
      { name: "description", content: "Multiple support channels — help center, ticketing, live chat, system status and remote assistance." },
      { property: "og:title", content: "We're here when you need us. — Smart Campuses" },
      { property: "og:description", content: "Multiple support channels — help center, ticketing, live chat, system status and remote assistance." },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Support"}
      title={"We're here when you"} highlight={"need us."}
      description={"Multiple support channels — help center, ticketing, live chat, system status and remote assistance."}
      sections={[
        { title: "Choose how to reach us", bullets: ["Help Center", "Submit a ticket", "Contact support", "System Status", "Remote Assistance"] },
      ]}
      related={[
        { label: "Help Center", to: "/support/help-center" },
        { label: "Submit Ticket", to: "/support/submit-ticket" },
        { label: "Contact Support", to: "/support/contact-support" },
        { label: "System Status", to: "/support/system-status" },
        { label: "Remote Assistance", to: "/support/remote-assistance" }
      ]}
    />
  );
}
