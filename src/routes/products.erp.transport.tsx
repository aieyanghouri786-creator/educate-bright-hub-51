import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/transport")({
  head: () => ({
    meta: [
      { title: "Transport Management safer and smarter. — Smart Campuses" },
      { name: "description", content: "Plan routes, allocate vehicles, manage drivers and give parents real-time visibility of where their child's bus is right now." },
      { property: "og:title", content: "Transport Management safer and smarter. — Smart Campuses" },
      { property: "og:description", content: "Plan routes, allocate vehicles, manage drivers and give parents real-time visibility of where their child's bus is right now." },
      { property: "og:url", content: "/products/erp/transport" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/transport" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Transport Management"} highlight={"safer and smarter."}
      description={"Plan routes, allocate vehicles, manage drivers and give parents real-time visibility of where their child's bus is right now."}
      sections={[
        { title: "Routes", body: "Optimized route planning with stop times, capacity tracking and easy reassignment for absentees or schedule changes." },
        { title: "Vehicles", body: "Fleet records, insurance, fitness, fuel and maintenance schedules with renewal alerts." },
        { title: "Driver management", bullets: ["Driver records and license tracking", "Duty rosters", "GPS-enabled live tracking", "Parent notifications for arrival and delays"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
