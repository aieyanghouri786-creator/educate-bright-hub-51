import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/library")({
  head: () => ({
    meta: [
      { title: "Library Management for the digital era. — Smart Campuses" },
      { name: "description", content: "Catalog, circulate and track every book, e-resource and journal — with a self-service member portal and barcode/RFID support." },
      { property: "og:title", content: "Library Management for the digital era. — Smart Campuses" },
      { property: "og:description", content: "Catalog, circulate and track every book, e-resource and journal — with a self-service member portal and barcode/RFID support." },
      { property: "og:url", content: "/products/erp/library" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/library" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Library Management"} highlight={"for the digital era."}
      description={"Catalog, circulate and track every book, e-resource and journal — with a self-service member portal and barcode/RFID support."}
      sections={[
        { title: "Catalog management", body: "MARC-compatible catalog with bulk import, classification, accession and tagging for books, journals and digital resources." },
        { title: "Book tracking", body: "Barcode and RFID-based issue, return, renewal and reservation with automated overdue reminders." },
        { title: "Digital library", bullets: ["E-books and PDF resources", "Subscription-based journals", "Reading lists per course", "Usage analytics by member"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
