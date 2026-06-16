import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/lms-trends")({
  head: () => ({
    meta: [
      { title: "LMS Trends learning beyond the classroom. — Smart Campuses" },
      { name: "description", content: "The latest on online learning, blended courses, AI tutoring and student engagement." },
      { property: "og:title", content: "LMS Trends learning beyond the classroom. — Smart Campuses" },
      { property: "og:description", content: "The latest on online learning, blended courses, AI tutoring and student engagement." },
      { property: "og:url", content: "/blog/lms-trends" },
    ],
    links: [{ rel: "canonical", href: "/blog/lms-trends" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog · Category"}
      title={"LMS Trends"} highlight={"learning beyond the classroom."}
      description={"The latest on online learning, blended courses, AI tutoring and student engagement."}
      sections={[
        { title: "Featured articles", body: "Hand-picked posts from our editors — the most-read pieces in this category, updated each month." },
        { title: "What you'll find here", body: "Practitioner write-ups, deep dives, customer stories and announcements relevant to LMS Trends." },
      ]}
      related={[
        { label: "All categories", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
