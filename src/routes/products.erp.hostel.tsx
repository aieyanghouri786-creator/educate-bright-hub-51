import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/hostel")({
  head: () => ({
    meta: [
      { title: "Hostel Management without the paperwork. — Smart Campuses" },
      { name: "description", content: "Allocate rooms, track occupancy, raise mess and hostel bills and manage day-to-day operations — all from a single dashboard." },
      { property: "og:title", content: "Hostel Management without the paperwork. — Smart Campuses" },
      { property: "og:description", content: "Allocate rooms, track occupancy, raise mess and hostel bills and manage day-to-day operations — all from a single dashboard." },
      { property: "og:url", content: "/products/erp/hostel" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/hostel" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Hostel Management"} highlight={"without the paperwork."}
      description={"Allocate rooms, track occupancy, raise mess and hostel bills and manage day-to-day operations — all from a single dashboard."}
      sections={[
        { title: "Room allocation", body: "Block, floor, room and bed-wise allocation with preferences, waitlists and reallocation workflows." },
        { title: "Student records", body: "Hostel-specific profiles linked to academic records — guardian info, medical alerts, in/out logs and visitor management." },
        { title: "Hostel billing", bullets: ["Mess and hostel fee structures", "Per-day and per-month billing", "Maintenance and damage charges", "Integrated with main fee module"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
