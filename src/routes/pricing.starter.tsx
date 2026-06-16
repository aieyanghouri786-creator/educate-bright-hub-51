import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/pricing/starter")({
  head: () => ({
    meta: [
      { title: "Starter Plan for small institutions. — Smart Campuses" },
      { name: "description", content: "Everything a small school or coaching center needs to digitize operations — at a price that works for under-500-student institutions." },
      { property: "og:title", content: "Starter Plan for small institutions. — Smart Campuses" },
      { property: "og:description", content: "Everything a small school or coaching center needs to digitize operations — at a price that works for under-500-student institutions." },
      { property: "og:url", content: "/pricing/starter" },
    ],
    links: [{ rel: "canonical", href: "/pricing/starter" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Pricing Plan"}
      title={"Starter Plan"} highlight={"for small institutions."}
      description={"Everything a small school or coaching center needs to digitize operations — at a price that works for under-500-student institutions."}
      sections={[
        { title: "Features included", bullets: ["Student Management", "Admissions", "Attendance", "Fee Management", "Basic Reports", "Parent Portal", "Email & chat support"] },
        { title: "Limitations", bullets: ["Up to 500 active students", "Single campus only", "No LMS module", "No multi-currency support"] },
        { title: "FAQ", body: "Can I upgrade later? Yes — switch to Professional or Enterprise any time, your data carries over without migration. Is there a free trial? Yes — 30 days, fully featured, no credit card required." },
      ]}
      related={[
        { label: "Compare all plans", to: "/pricing" },
        { label: "Talk to sales", to: "/contact" }
      ]}
    />
  );
}
