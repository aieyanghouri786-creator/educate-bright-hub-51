import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/digital-transformation")({
  head: () => ({
    meta: [
      { title: "Digital Transformation from paper to platform. — Smart Campuses" },
      { name: "description", content: "Stories and frameworks for institutions making the shift from paper-based to digital operations." },
      { property: "og:title", content: "Digital Transformation from paper to platform. — Smart Campuses" },
      { property: "og:description", content: "Stories and frameworks for institutions making the shift from paper-based to digital operations." },
      { property: "og:url", content: "/blog/digital-transformation" },
    ],
    links: [{ rel: "canonical", href: "/blog/digital-transformation" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog · Category"}
      title={"Digital Transformation"} highlight={"from paper to platform."}
      description={"Stories and frameworks for institutions making the shift from paper-based to digital operations."}
      sections={[
        { title: "Featured articles", body: "Hand-picked posts from our editors — the most-read pieces in this category, updated each month." },
        { title: "What you'll find here", body: "Practitioner write-ups, deep dives, customer stories and announcements relevant to Digital Transformation." },
      ]}
      related={[
        { label: "All categories", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
