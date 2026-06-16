import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms")({
  head: () => ({
    meta: [
      { title: "A learning experience your students will love. — Smart Campuses" },
      { name: "description", content: "Smart Campuses LMS makes online and blended learning effortless — live classes, video lectures, assignments, quizzes and certificates in one place." },
      { property: "og:title", content: "A learning experience your students will love. — Smart Campuses" },
      { property: "og:description", content: "Smart Campuses LMS makes online and blended learning effortless — live classes, video lectures, assignments, quizzes and certificates in one place." },
      { property: "og:url", content: "/products/lms" },
    ],
    links: [{ rel: "canonical", href: "/products/lms" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Product · LMS"}
      title={"A learning experience your"} highlight={"students will love."}
      description={"Smart Campuses LMS makes online and blended learning effortless — live classes, video lectures, assignments, quizzes and certificates in one place."}
      sections={[
        { title: "Modern, intuitive interface", body: "Designed for the way students and teachers actually use software in 2026 — fast, mobile-first and accessible." },
        { title: "Built-in capabilities", bullets: ["Online live classes with recording", "Course builder with rich content blocks", "Auto-graded quizzes and assignments", "Progress tracking dashboards", "Discussion boards and announcements", "Certificate generation"] },
        { title: "Works with your existing tools", body: "Integrates with Google Workspace, Microsoft 365, Zoom, Teams, YouTube and SCORM-compliant content." },
      ]}
      related={[
        { label: "Online Classes", to: "/products/lms/online-classes" },
        { label: "Assignments", to: "/products/lms/assignments" },
        { label: "Quizzes", to: "/products/lms/quizzes" },
        { label: "Video Learning", to: "/products/lms/video-learning" },
        { label: "Progress Tracking", to: "/products/lms/progress-tracking" },
        { label: "Course Management", to: "/products/lms/course-management" },
        { label: "Certificates", to: "/products/lms/certificates" }
      ]}
    />
  );
}
