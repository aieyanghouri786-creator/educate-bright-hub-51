import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/pricing/professional")({
  head: () => ({
    meta: [
      { title: "Professional Plan for growing institutions. — Smart Campuses" },
      { name: "description", content: "The full ERP plus LMS, examinations and HR — built for institutions scaling from 500 to several thousand students." },
      { property: "og:title", content: "Professional Plan for growing institutions. — Smart Campuses" },
      { property: "og:description", content: "The full ERP plus LMS, examinations and HR — built for institutions scaling from 500 to several thousand students." },
      { property: "og:url", content: "/pricing/professional" },
    ],
    links: [{ rel: "canonical", href: "/pricing/professional" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Pricing Plan"}
      title={"Professional Plan"} highlight={"for growing institutions."}
      description={"The full ERP plus LMS, examinations and HR — built for institutions scaling from 500 to several thousand students."}
      sections={[
        { title: "Features included", bullets: ["Everything in Starter", "LMS Integration", "Examination Management", "HR & Payroll", "Advanced Reports", "Branded Mobile App", "Priority support"] },
        { title: "Compared to Starter", bullets: ["Includes the full LMS and exams suite", "Up to 5,000 active students", "Multi-branch support (up to 3 branches)", "Custom report builder", "Branded mobile app for parents and teachers"] },
        { title: "Why teams pick this", body: "It's the sweet spot — the full platform, real support and room to grow without an enterprise contract." },
      ]}
      related={[
        { label: "Compare all plans", to: "/pricing" },
        { label: "Talk to sales", to: "/contact" }
      ]}
    />
  );
}
