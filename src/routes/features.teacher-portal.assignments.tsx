import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/teacher-portal/assignments")({
  head: () => ({
    meta: [
      { title: "Teacher · Assignments create, collect, grade. — Smart Campuses" },
      { name: "description", content: "Rich assignments with rubrics, due dates and integrated grading — without leaving the platform." },
      { property: "og:title", content: "Teacher · Assignments create, collect, grade. — Smart Campuses" },
      { property: "og:description", content: "Rich assignments with rubrics, due dates and integrated grading — without leaving the platform." },
      { property: "og:url", content: "/features/teacher-portal/assignments" },
    ],
    links: [{ rel: "canonical", href: "/features/teacher-portal/assignments" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Teacher · Assignments"} highlight={"create, collect, grade."}
      description={"Rich assignments with rubrics, due dates and integrated grading — without leaving the platform."}
      sections={[
        { title: "Workflow", bullets: ["Create with rich content", "Auto-distribute to class", "Track submissions live", "Grade with rubrics and feedback"] },
      ]}
      related={[
        { label: "Back to Teacher Portal", to: "/features/teacher-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
