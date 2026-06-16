import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/knowledge-base/documentation")({
  head: () => ({
    meta: [
      { title: "Developer Documentation integrate, automate, extend. — Smart Campuses" },
      { name: "description", content: "REST APIs, webhooks and SSO documentation for institutions integrating Smart Campuses with their existing systems." },
      { property: "og:title", content: "Developer Documentation integrate, automate, extend. — Smart Campuses" },
      { property: "og:description", content: "REST APIs, webhooks and SSO documentation for institutions integrating Smart Campuses with their existing systems." },
      { property: "og:url", content: "/knowledge-base/documentation" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-base/documentation" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Knowledge Base"}
      title={"Developer Documentation"} highlight={"integrate, automate, extend."}
      description={"REST APIs, webhooks and SSO documentation for institutions integrating Smart Campuses with their existing systems."}
      sections={[
        { title: "What's documented", bullets: ["REST API reference", "Webhook events", "SAML / OAuth SSO setup", "Data export formats"] },
      ]}
      related={[
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Support", to: "/support" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
