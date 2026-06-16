import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/examinations")({
  head: () => ({
    meta: [
      { title: "Examination Management end-to-end. — Smart Campuses" },
      { name: "description", content: "Plan, conduct, evaluate and publish exam results across grading systems — CBSE, ICSE, state boards, semester systems and CBCS." },
      { property: "og:title", content: "Examination Management end-to-end. — Smart Campuses" },
      { property: "og:description", content: "Plan, conduct, evaluate and publish exam results across grading systems — CBSE, ICSE, state boards, semester systems and CBCS." },
      { property: "og:url", content: "/products/erp/examinations" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/examinations" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Examination Management"} highlight={"end-to-end."}
      description={"Plan, conduct, evaluate and publish exam results across grading systems — CBSE, ICSE, state boards, semester systems and CBCS."}
      sections={[
        { title: "Exam scheduling", body: "Term plans, datesheets, hall tickets, seating arrangements and invigilator duty rosters generated in minutes." },
        { title: "Result processing", body: "Mark entry by teachers, moderation workflow, grade computation, GPA/CGPA and rank lists with one-click publishing." },
        { title: "Report cards", bullets: ["Custom report-card templates per board or program", "Skill-based assessment alongside academics", "Parent acknowledgement tracking", "Bulk download and print"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
