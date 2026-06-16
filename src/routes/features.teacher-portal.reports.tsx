import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/teacher-portal/reports")({
  head: () => ({
    meta: [
      { title: "Teacher · Reports insights at a glance. — Smart Campuses" },
      { name: "description", content: "Per-student and class-level reports showing performance, attendance and engagement." },
      { property: "og:title", content: "Teacher · Reports insights at a glance. — Smart Campuses" },
      { property: "og:description", content: "Per-student and class-level reports showing performance, attendance and engagement." },
      { property: "og:url", content: "/features/teacher-portal/reports" },
    ],
    links: [{ rel: "canonical", href: "/features/teacher-portal/reports" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Teacher · Reports"} highlight={"insights at a glance."}
      description={"Per-student and class-level reports showing performance, attendance and engagement."}
      sections={[
        { title: "Reports included", bullets: ["Class performance distribution", "Per-student progress", "Attendance trends", "Assignment completion rates"] },
      ]}
      related={[
        { label: "Back to Teacher Portal", to: "/features/teacher-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
