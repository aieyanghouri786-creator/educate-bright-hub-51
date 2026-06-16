import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/education-technology")({
  head: () => ({
    meta: [
      { title: "Education Technology what's working, what's next. — Smart Campuses" },
      { name: "description", content: "How technology is reshaping classrooms, campuses and the work of teachers and administrators." },
      { property: "og:title", content: "Education Technology what's working, what's next. — Smart Campuses" },
      { property: "og:description", content: "How technology is reshaping classrooms, campuses and the work of teachers and administrators." },
      { property: "og:url", content: "/blog/education-technology" },
    ],
    links: [{ rel: "canonical", href: "/blog/education-technology" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog · Category"}
      title={"Education Technology"} highlight={"what's working, what's next."}
      description={"How technology is reshaping classrooms, campuses and the work of teachers and administrators."}
      sections={[
        { title: "Featured articles", body: "Hand-picked posts from our editors — the most-read pieces in this category, updated each month." },
        { title: "What you'll find here", body: "Practitioner write-ups, deep dives, customer stories and announcements relevant to Education Technology." },
      ]}
      related={[
        { label: "All categories", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
