import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/school-management")({
  head: () => ({
    meta: [
      { title: "School Management run a better school. — Smart Campuses" },
      { name: "description", content: "Tactical advice for principals, administrators and school leadership teams." },
      { property: "og:title", content: "School Management run a better school. — Smart Campuses" },
      { property: "og:description", content: "Tactical advice for principals, administrators and school leadership teams." },
      { property: "og:url", content: "/blog/school-management" },
    ],
    links: [{ rel: "canonical", href: "/blog/school-management" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog · Category"}
      title={"School Management"} highlight={"run a better school."}
      description={"Tactical advice for principals, administrators and school leadership teams."}
      sections={[
        { title: "Featured articles", body: "Hand-picked posts from our editors — the most-read pieces in this category, updated each month." },
        { title: "What you'll find here", body: "Practitioner write-ups, deep dives, customer stories and announcements relevant to School Management." },
      ]}
      related={[
        { label: "All categories", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
