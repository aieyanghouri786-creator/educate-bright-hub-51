import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms/progress-tracking")({
  head: () => ({
    meta: [
      { title: "Student Progress Tracking at every level. — Smart Campuses" },
      { name: "description", content: "Real-time dashboards for students, teachers and parents — so everyone knows where each learner stands." },
      { property: "og:title", content: "Student Progress Tracking at every level. — Smart Campuses" },
      { property: "og:description", content: "Real-time dashboards for students, teachers and parents — so everyone knows where each learner stands." },
      { property: "og:url", content: "/products/lms/progress-tracking" },
    ],
    links: [{ rel: "canonical", href: "/products/lms/progress-tracking" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"LMS Module"}
      title={"Student Progress Tracking"} highlight={"at every level."}
      description={"Real-time dashboards for students, teachers and parents — so everyone knows where each learner stands."}
      sections={[
        { title: "Per-student dashboards", body: "Course completion, assignment scores, attendance and engagement metrics rolled into one view." },
        { title: "Cohort comparisons", body: "Benchmark sections, batches and programs against each other to surface what's working." },
        { title: "Early-warning signals", bullets: ["At-risk learner identification", "Drop-off and disengagement alerts", "Skill-gap analysis", "Custom intervention workflows"] },
      ]}
      related={[
        { label: "All LMS modules", to: "/products/lms" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
