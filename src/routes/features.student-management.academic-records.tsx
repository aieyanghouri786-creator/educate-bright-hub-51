import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/student-management/academic-records")({
  head: () => ({
    meta: [
      { title: "Academic Records every grade, every term, every year. — Smart Campuses" },
      { name: "description", content: "Term-wise results, transcripts, course history and skill assessments tracked across the student's full journey." },
      { property: "og:title", content: "Academic Records every grade, every term, every year. — Smart Campuses" },
      { property: "og:description", content: "Term-wise results, transcripts, course history and skill assessments tracked across the student's full journey." },
      { property: "og:url", content: "/features/student-management/academic-records" },
    ],
    links: [{ rel: "canonical", href: "/features/student-management/academic-records" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Academic Records"} highlight={"every grade, every term, every year."}
      description={"Term-wise results, transcripts, course history and skill assessments tracked across the student's full journey."}
      sections={[
        { title: "What's stored", bullets: ["Term and final grades", "Subject-wise marks and remarks", "Skill and competency ratings", "Promotion and retention history"] },
        { title: "Outputs", body: "Generate transcripts, bonafide letters and consolidated mark sheets in one click — formatted to your board's standards." },
      ]}
      related={[
        { label: "Back to Student Management", to: "/features/student-management" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
