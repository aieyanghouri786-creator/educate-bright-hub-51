import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/support/contact-support")({
  head: () => ({
    meta: [
      { title: "Contact Support talk to a human. — Smart Campuses" },
      { name: "description", content: "Phone, email and live chat with our support team — Monday to Saturday, 8 AM to 10 PM IST." },
      { property: "og:title", content: "Contact Support talk to a human. — Smart Campuses" },
      { property: "og:description", content: "Phone, email and live chat with our support team — Monday to Saturday, 8 AM to 10 PM IST." },
      { property: "og:url", content: "/support/contact-support" },
    ],
    links: [{ rel: "canonical", href: "/support/contact-support" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Support"}
      title={"Contact Support"} highlight={"talk to a human."}
      description={"Phone, email and live chat with our support team — Monday to Saturday, 8 AM to 10 PM IST."}
      sections={[
        { title: "Channels", bullets: ["Phone: +91 98765 43210", "Email: support@smartcampuses.app", "Live chat from inside the platform", "Emergency hotline for Enterprise customers"] },
      ]}
      related={[
        { label: "Support overview", to: "/support" },
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
