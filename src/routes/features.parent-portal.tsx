import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/parent-portal")({
  head: () => ({
    meta: [
      { title: "Parent Portal keep families in the loop. — Smart Campuses" },
      { name: "description", content: "A clean, branded portal and mobile app where parents see exactly what's happening with their child — every day." },
      { property: "og:title", content: "Parent Portal keep families in the loop. — Smart Campuses" },
      { property: "og:description", content: "A clean, branded portal and mobile app where parents see exactly what's happening with their child — every day." },
      { property: "og:url", content: "/features/parent-portal" },
    ],
    links: [{ rel: "canonical", href: "/features/parent-portal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Parent Portal"} highlight={"keep families in the loop."}
      description={"A clean, branded portal and mobile app where parents see exactly what's happening with their child — every day."}
      sections={[
        { title: "What's included", bullets: ["Attendance Tracking", "Results", "Fee Payments", "Communication"] },
        { title: "Designed for parents", body: "Mobile-first, multilingual and respectful of parents' time. Notifications when it matters, silence when it doesn't." },
      ]}
      related={[
        { label: "Attendance", to: "/features/parent-portal/attendance" },
        { label: "Results", to: "/features/parent-portal/results" },
        { label: "Fee Payments", to: "/features/parent-portal/fee-payments" },
        { label: "Communication", to: "/features/parent-portal/communication" }
      ]}
    />
  );
}
