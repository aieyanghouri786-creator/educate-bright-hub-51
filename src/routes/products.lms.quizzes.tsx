import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms/quizzes")({
  head: () => ({
    meta: [
      { title: "Quizzes & Assessments with confidence. — Smart Campuses" },
      { name: "description", content: "Build proctored quizzes with diverse question types, randomization, time limits and instant analytics." },
      { property: "og:title", content: "Quizzes & Assessments with confidence. — Smart Campuses" },
      { property: "og:description", content: "Build proctored quizzes with diverse question types, randomization, time limits and instant analytics." },
      { property: "og:url", content: "/products/lms/quizzes" },
    ],
    links: [{ rel: "canonical", href: "/products/lms/quizzes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"LMS Module"}
      title={"Quizzes & Assessments"} highlight={"with confidence."}
      description={"Build proctored quizzes with diverse question types, randomization, time limits and instant analytics."}
      sections={[
        { title: "Question bank", body: "Reusable banks of MCQ, true/false, fill-in-the-blank, match, numeric and subjective questions tagged by topic and difficulty." },
        { title: "Adaptive delivery", body: "Randomized questions, shuffled options and timed sections to maintain academic integrity at scale." },
        { title: "Proctoring options", bullets: ["Browser lockdown mode", "Webcam-based AI proctoring", "Live human monitoring", "Tab-switch and copy-paste detection"] },
        { title: "Instant insights", body: "Auto-graded results, item analysis, score distribution and individual feedback delivered the moment the quiz ends." },
      ]}
      related={[
        { label: "All LMS modules", to: "/products/lms" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
