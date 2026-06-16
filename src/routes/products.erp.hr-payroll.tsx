import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/hr-payroll")({
  head: () => ({
    meta: [
      { title: "HR & Payroll for educational institutions. — Smart Campuses" },
      { name: "description", content: "Manage the full employee lifecycle — recruitment, onboarding, attendance, leave, performance and payroll — under one roof." },
      { property: "og:title", content: "HR & Payroll for educational institutions. — Smart Campuses" },
      { property: "og:description", content: "Manage the full employee lifecycle — recruitment, onboarding, attendance, leave, performance and payroll — under one roof." },
      { property: "og:url", content: "/products/erp/hr-payroll" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/hr-payroll" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"HR & Payroll"} highlight={"for educational institutions."}
      description={"Manage the full employee lifecycle — recruitment, onboarding, attendance, leave, performance and payroll — under one roof."}
      sections={[
        { title: "Employee records", body: "Centralized profiles with documents, qualifications, contracts, dependents and statutory information." },
        { title: "Payroll processing", body: "Automated salary calculation with allowances, deductions, statutory compliance (PF, ESI, TDS) and payslip generation." },
        { title: "Leave management", bullets: ["Configurable leave policies and balances", "Self-service leave applications and approvals", "Holiday calendars", "Attendance-payroll integration"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
