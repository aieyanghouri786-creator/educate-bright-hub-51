import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/pricing/enterprise")({
  head: () => ({
    meta: [
      { title: "Enterprise Plan for large institutions and universities. — Smart Campuses" },
      { name: "description", content: "Unlimited scale, custom integrations, dedicated support and the security guarantees enterprises require." },
      { property: "og:title", content: "Enterprise Plan for large institutions and universities. — Smart Campuses" },
      { property: "og:description", content: "Unlimited scale, custom integrations, dedicated support and the security guarantees enterprises require." },
      { property: "og:url", content: "/pricing/enterprise" },
    ],
    links: [{ rel: "canonical", href: "/pricing/enterprise" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Pricing Plan"}
      title={"Enterprise Plan"} highlight={"for large institutions and universities."}
      description={"Unlimited scale, custom integrations, dedicated support and the security guarantees enterprises require."}
      sections={[
        { title: "Custom features", bullets: ["Unlimited users and students", "Unlimited campuses", "Custom integrations (SSO, ERP, HR, finance)", "Dedicated customer success manager", "Custom reports and dashboards", "Enterprise security & compliance", "SLA-backed uptime"] },
        { title: "Consultation", body: "Every Enterprise engagement starts with a free consultation — our team studies your structure, current systems and goals before proposing a deployment plan." },
      ]}
      related={[
        { label: "Compare all plans", to: "/pricing" },
        { label: "Talk to sales", to: "/contact" }
      ]}
    />
  );
}
