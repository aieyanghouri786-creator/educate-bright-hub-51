import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/knowledge-base/faqs")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions quick answers. — Smart Campuses" },
      { name: "description", content: "The questions we hear most often — implementation, data, security, pricing and support." },
      { property: "og:title", content: "Frequently Asked Questions quick answers. — Smart Campuses" },
      { property: "og:description", content: "The questions we hear most often — implementation, data, security, pricing and support." },
      { property: "og:url", content: "/knowledge-base/faqs" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-base/faqs" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Knowledge Base"}
      title={"Frequently Asked Questions"} highlight={"quick answers."}
      description={"The questions we hear most often — implementation, data, security, pricing and support."}
      sections={[
        { title: "Implementation", bullets: ["How long does deployment take?", "Do you handle data migration?", "Can we run a pilot?"] },
        { title: "Data & security", bullets: ["Where is data hosted?", "Who owns the data?", "What about backups and disaster recovery?"] },
        { title: "Pricing & contracts", bullets: ["Are there setup fees?", "Can we cancel any time?", "Is there an annual discount?"] },
      ]}
      related={[
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Support", to: "/support" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
