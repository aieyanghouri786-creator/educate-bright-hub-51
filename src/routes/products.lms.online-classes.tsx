import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms/online-classes")({
  head: () => ({
    meta: [
      { title: "Online Classes without the friction. — Smart Campuses" },
      { name: "description", content: "Run engaging live sessions inside the LMS — attendance, recording, chat and Q&A all in one place." },
      { property: "og:title", content: "Online Classes without the friction. — Smart Campuses" },
      { property: "og:description", content: "Run engaging live sessions inside the LMS — attendance, recording, chat and Q&A all in one place." },
      { property: "og:url", content: "/products/lms/online-classes" },
    ],
    links: [{ rel: "canonical", href: "/products/lms/online-classes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"LMS Module"}
      title={"Online Classes"} highlight={"without the friction."}
      description={"Run engaging live sessions inside the LMS — attendance, recording, chat and Q&A all in one place."}
      sections={[
        { title: "Live sessions", body: "One-click join from the course page with HD video, breakout rooms, polls and integrated chat." },
        { title: "Recordings", body: "Automatically recorded and published to the course library so students who miss class can catch up." },
        { title: "Attendance", body: "Auto-marked from join/leave events and synced into the main attendance module." },
        { title: "Screen sharing", bullets: ["Multi-presenter mode", "Annotated whiteboard", "Collaborative documents", "File and link sharing"] },
      ]}
      related={[
        { label: "All LMS modules", to: "/products/lms" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
