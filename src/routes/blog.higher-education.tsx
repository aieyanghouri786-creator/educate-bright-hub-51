import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/higher-education")({
  head: () => ({
    meta: [
      { title: "Higher Education colleges and universities. — Smart Campuses" },
      { name: "description", content: "Trends, technology and operational ideas for higher-education institutions." },
      { property: "og:title", content: "Higher Education colleges and universities. — Smart Campuses" },
      { property: "og:description", content: "Trends, technology and operational ideas for higher-education institutions." },
      { property: "og:url", content: "/blog/higher-education" },
    ],
    links: [{ rel: "canonical", href: "/blog/higher-education" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog · Category"}
      title={"Higher Education"} highlight={"colleges and universities."}
      description={"Trends, technology and operational ideas for higher-education institutions."}
      sections={[
        { title: "Featured articles", body: "Hand-picked posts from our editors — the most-read pieces in this category, updated each month." },
        { title: "What you'll find here", body: "Practitioner write-ups, deep dives, customer stories and announcements relevant to Higher Education." },
      ]}
      related={[
        { label: "All categories", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
