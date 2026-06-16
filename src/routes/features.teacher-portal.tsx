import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/teacher-portal")({
  head: () => ({
    meta: [
      { title: "Teacher Portal less admin, more teaching. — Smart Campuses" },
      { name: "description", content: "Everything a teacher does outside the classroom — taking attendance, planning lessons, grading, and talking to parents — in one mobile-friendly tool." },
      { property: "og:title", content: "Teacher Portal less admin, more teaching. — Smart Campuses" },
      { property: "og:description", content: "Everything a teacher does outside the classroom — taking attendance, planning lessons, grading, and talking to parents — in one mobile-friendly tool." },
      { property: "og:url", content: "/features/teacher-portal" },
    ],
    links: [{ rel: "canonical", href: "/features/teacher-portal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Teacher Portal"} highlight={"less admin, more teaching."}
      description={"Everything a teacher does outside the classroom — taking attendance, planning lessons, grading, and talking to parents — in one mobile-friendly tool."}
      sections={[
        { title: "What's included", bullets: ["Class Management", "Attendance", "Assignments", "Reports"] },
        { title: "Designed for teachers", body: "Built with input from working teachers. Two taps to mark attendance, one screen for the gradebook, zero training required." },
      ]}
      related={[
        { label: "Class Management", to: "/features/teacher-portal/class-management" },
        { label: "Attendance", to: "/features/teacher-portal/attendance" },
        { label: "Assignments", to: "/features/teacher-portal/assignments" },
        { label: "Reports", to: "/features/teacher-portal/reports" }
      ]}
    />
  );
}
