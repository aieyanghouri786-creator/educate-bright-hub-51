import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms/assignments")({
  head: () => ({
    meta: [
      { title: "Assignments from setup to grading. — Smart Campuses" },
      { name: "description", content: "Create, distribute, collect and grade assignments at scale — with rubrics, anti-plagiarism checks and detailed analytics." },
      { property: "og:title", content: "Assignments from setup to grading. — Smart Campuses" },
      { property: "og:description", content: "Create, distribute, collect and grade assignments at scale — with rubrics, anti-plagiarism checks and detailed analytics." },
      { property: "og:url", content: "/products/lms/assignments" },
    ],
    links: [{ rel: "canonical", href: "/products/lms/assignments" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"LMS Module"}
      title={"Assignments"} highlight={"from setup to grading."}
      description={"Create, distribute, collect and grade assignments at scale — with rubrics, anti-plagiarism checks and detailed analytics."}
      sections={[
        { title: "Assignment creation", body: "Rich text, file uploads, group assignments, due dates, late-submission rules and rubric-based grading." },
        { title: "Submission tracking", body: "See exactly who submitted, who's late, who needs a nudge — and send reminders in one click." },
        { title: "Auto grading", body: "Auto-grade quizzes and objective questions instantly; reserve teacher time for the subjective work that matters." },
        { title: "Analytics", bullets: ["Class-wide performance distribution", "Question-level difficulty analysis", "Submission timing patterns", "Comparison across sections"] },
      ]}
      related={[
        { label: "All LMS modules", to: "/products/lms" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
