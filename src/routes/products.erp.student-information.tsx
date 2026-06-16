import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/student-information")({
  head: () => ({
    meta: [
      { title: "Student Information System the complete student record. — Smart Campuses" },
      { name: "description", content: "A 360° view of every student — profile, academics, attendance, fees, communication history and documents — in one place." },
      { property: "og:title", content: "Student Information System the complete student record. — Smart Campuses" },
      { property: "og:description", content: "A 360° view of every student — profile, academics, attendance, fees, communication history and documents — in one place." },
      { property: "og:url", content: "/products/erp/student-information" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/student-information" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Student Information System"} highlight={"the complete student record."}
      description={"A 360° view of every student — profile, academics, attendance, fees, communication history and documents — in one place."}
      sections={[
        { title: "Student profiles", body: "Demographic data, guardian information, medical notes and emergency contacts maintained in a structured, searchable record." },
        { title: "Academic records", body: "Term-wise grades, transcripts, course history and skill development tracked across the student's full journey." },
        { title: "Enrollment tracking", body: "Real-time visibility of class strength, sections, batch movement, transfers, withdrawals and graduation." },
        { title: "Documents & artifacts", bullets: ["Certificates and report cards", "ID cards and bonafide letters", "Scanned identity documents", "Achievement and disciplinary records"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
