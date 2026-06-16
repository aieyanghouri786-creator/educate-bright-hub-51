import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/legal/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy what cookies we use and why. — Smart Campuses" },
      { name: "description", content: "We use cookies and similar technologies to operate the service, remember preferences and understand usage." },
      { property: "og:title", content: "Cookie Policy what cookies we use and why. — Smart Campuses" },
      { property: "og:description", content: "We use cookies and similar technologies to operate the service, remember preferences and understand usage." },
      { property: "og:url", content: "/legal/cookie-policy" },
    ],
    links: [{ rel: "canonical", href: "/legal/cookie-policy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Legal"}
      title={"Cookie Policy"} highlight={"what cookies we use and why."}
      description={"We use cookies and similar technologies to operate the service, remember preferences and understand usage."}
      sections={[
        { title: "Cookies we use", bullets: ["Strictly necessary (login, security, load balancing)", "Functional (language, theme, preferences)", "Analytics (aggregated usage telemetry)"] },
        { title: "Managing cookies", body: "You can control or disable cookies in your browser. Disabling strictly-necessary cookies may break parts of the service." },
        { title: "Third-party cookies", body: "We use a small number of carefully-selected third-party services (analytics, error monitoring) under contracts that prohibit cross-site tracking." },
      ]}
      related={[
        { label: "Privacy", to: "/legal/privacy" },
        { label: "Terms", to: "/legal/terms" },
        { label: "Data Security", to: "/legal/data-security" }
      ]}
    />
  );
}
