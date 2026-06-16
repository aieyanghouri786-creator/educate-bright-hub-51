import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/attendance")({
  head: () => ({
    meta: [
      { title: "Attendance Management in real time. — Smart Campuses" },
      { name: "description", content: "Capture attendance from the web, mobile app or biometric devices, and notify parents the moment a student is marked absent." },
      { property: "og:title", content: "Attendance Management in real time. — Smart Campuses" },
      { property: "og:description", content: "Capture attendance from the web, mobile app or biometric devices, and notify parents the moment a student is marked absent." },
      { property: "og:url", content: "/products/erp/attendance" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/attendance" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Attendance Management"} highlight={"in real time."}
      description={"Capture attendance from the web, mobile app or biometric devices, and notify parents the moment a student is marked absent."}
      sections={[
        { title: "Student attendance", body: "Class-wise, subject-wise and event-wise marking with automated absentee alerts to parents over SMS, email and push." },
        { title: "Staff attendance", body: "Biometric, RFID and geo-fenced mobile check-in for teachers and non-teaching staff with payroll-ready reports." },
        { title: "Attendance analytics", bullets: ["Defaulter and chronic-absentee reports", "Subject-wise attendance percentage", "Trend analysis across terms", "Custom alerts and thresholds"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
