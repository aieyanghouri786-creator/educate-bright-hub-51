import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/support/remote-assistance")({
  head: () => ({
    meta: [
      { title: "Remote Assistance let us drive. — Smart Campuses" },
      { name: "description", content: "When something needs hands-on help, our support team can join a secure remote session with your team — with full audit and consent." },
      { property: "og:title", content: "Remote Assistance let us drive. — Smart Campuses" },
      { property: "og:description", content: "When something needs hands-on help, our support team can join a secure remote session with your team — with full audit and consent." },
      { property: "og:url", content: "/support/remote-assistance" },
    ],
    links: [{ rel: "canonical", href: "/support/remote-assistance" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Support"}
      title={"Remote Assistance"} highlight={"let us drive."}
      description={"When something needs hands-on help, our support team can join a secure remote session with your team — with full audit and consent."}
      sections={[
        { title: "How it works", bullets: ["You initiate the session — never us", "Consent and recording are mandatory", "Session expires automatically", "Full audit log delivered to you"] },
      ]}
      related={[
        { label: "Support overview", to: "/support" },
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
