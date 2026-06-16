import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp")({
  head: () => ({
    meta: [
      { title: "Run your institution on a single platform. — Smart Campuses" },
      { name: "description", content: "Smart Campuses ERP unifies admissions, academics, attendance, fees, exams, HR and operations — replacing a dozen tools with one connected system." },
      { property: "og:title", content: "Run your institution on a single platform. — Smart Campuses" },
      { property: "og:description", content: "Smart Campuses ERP unifies admissions, academics, attendance, fees, exams, HR and operations — replacing a dozen tools with one connected system." },
      { property: "og:url", content: "/products/erp" },
    ],
    links: [{ rel: "canonical", href: "/products/erp" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Product · ERP"}
      title={"Run your institution on a"} highlight={"single platform."}
      description={"Smart Campuses ERP unifies admissions, academics, attendance, fees, exams, HR and operations — replacing a dozen tools with one connected system."}
      sections={[
        { title: "Built for institutional scale", body: "From single-school deployments to multi-campus universities serving 100,000+ students, our architecture scales with you." },
        { title: "Modules included", bullets: ["Student Information System", "Admissions Management", "Attendance Management", "Fee Management", "Examination Management", "HR & Payroll", "Library Management", "Transport Management", "Hostel Management"] },
        { title: "Why teams switch", body: "One source of truth. Real-time data across departments. No more reconciling spreadsheets, chasing signatures, or losing student records between systems." },
      ]}
      related={[
        { label: "Student Information", to: "/products/erp/student-information" },
        { label: "Admissions", to: "/products/erp/admissions" },
        { label: "Attendance", to: "/products/erp/attendance" },
        { label: "Fees", to: "/products/erp/fees" },
        { label: "Examinations", to: "/products/erp/examinations" },
        { label: "HR & Payroll", to: "/products/erp/hr-payroll" },
        { label: "Library", to: "/products/erp/library" },
        { label: "Transport", to: "/products/erp/transport" },
        { label: "Hostel", to: "/products/erp/hostel" }
      ]}
    />
  );
}
