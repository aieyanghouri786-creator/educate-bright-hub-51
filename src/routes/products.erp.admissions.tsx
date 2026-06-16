import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions Management from inquiry to enrollment. — Smart Campuses" },
      { name: "description", content: "Digitize the entire admissions funnel — online applications, document collection, interview scheduling, fee payment and enrollment — without paperwork." },
      { property: "og:title", content: "Admissions Management from inquiry to enrollment. — Smart Campuses" },
      { property: "og:description", content: "Digitize the entire admissions funnel — online applications, document collection, interview scheduling, fee payment and enrollment — without paperwork." },
      { property: "og:url", content: "/products/erp/admissions" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/admissions" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Admissions Management"} highlight={"from inquiry to enrollment."}
      description={"Digitize the entire admissions funnel — online applications, document collection, interview scheduling, fee payment and enrollment — without paperwork."}
      sections={[
        { title: "Online applications", body: "Branded application forms with conditional logic, document uploads and integrated payment for application fees." },
        { title: "Document verification", body: "Verification workflow with audit trail — accept, request resubmission or flag discrepancies in one click." },
        { title: "Enrollment processing", bullets: ["Merit lists and provisional admission", "Counselling and seat allocation", "Fee structure assignment", "Automatic student profile creation"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
