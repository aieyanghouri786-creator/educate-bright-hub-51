import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions the agreement between you and Smart Campuses. — Smart Campuses" },
      { name: "description", content: "These Terms govern your access to and use of the Smart Campuses platform and services." },
      { property: "og:title", content: "Terms & Conditions the agreement between you and Smart Campuses. — Smart Campuses" },
      { property: "og:description", content: "These Terms govern your access to and use of the Smart Campuses platform and services." },
      { property: "og:url", content: "/legal/terms" },
    ],
    links: [{ rel: "canonical", href: "/legal/terms" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Legal"}
      title={"Terms & Conditions"} highlight={"the agreement between you and Smart Campuses."}
      description={"These Terms govern your access to and use of the Smart Campuses platform and services."}
      sections={[
        { title: "Account & access", body: "You're responsible for safeguarding credentials, managing your users' permissions and ensuring lawful use of the service within your institution." },
        { title: "Customer data", body: "You retain ownership of your data. We process it under your instructions to deliver the service, with the security measures described in our Data Security Policy." },
        { title: "Acceptable use", bullets: ["No use for unlawful or harmful purposes", "No attempts to disrupt, reverse-engineer or scrape the service", "No content infringing third-party rights"] },
        { title: "Service levels & uptime", body: "We target 99.9% monthly uptime, measured against documented exclusions, with credits for qualifying outages on annual contracts." },
        { title: "Governing law", body: "These Terms are governed by the laws of India, with jurisdiction in the courts of New Delhi unless otherwise agreed in writing." },
      ]}
      related={[
        { label: "Privacy", to: "/legal/privacy" },
        { label: "Terms", to: "/legal/terms" },
        { label: "Data Security", to: "/legal/data-security" }
      ]}
    />
  );
}
