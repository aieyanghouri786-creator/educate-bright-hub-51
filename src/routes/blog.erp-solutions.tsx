import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/erp-solutions")({
  head: () => ({
    meta: [
      { title: "ERP Solutions practical guides for institutions. — Smart Campuses" },
      { name: "description", content: "Selecting, deploying and getting value from an Education ERP — without the consulting markup." },
      { property: "og:title", content: "ERP Solutions practical guides for institutions. — Smart Campuses" },
      { property: "og:description", content: "Selecting, deploying and getting value from an Education ERP — without the consulting markup." },
      { property: "og:url", content: "/blog/erp-solutions" },
    ],
    links: [{ rel: "canonical", href: "/blog/erp-solutions" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog · Category"}
      title={"ERP Solutions"} highlight={"practical guides for institutions."}
      description={"Selecting, deploying and getting value from an Education ERP — without the consulting markup."}
      sections={[
        { title: "Featured articles", body: "Hand-picked posts from our editors — the most-read pieces in this category, updated each month." },
        { title: "What you'll find here", body: "Practitioner write-ups, deep dives, customer stories and announcements relevant to ERP Solutions." },
      ]}
      related={[
        { label: "All categories", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
