import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/teacher-portal/attendance")({
  head: () => ({
    meta: [
      { title: "Teacher · Attendance two taps, done. — Smart Campuses" },
      { name: "description", content: "Mark a class's attendance in under 30 seconds with bulk-present, swipe-to-absent and offline mode." },
      { property: "og:title", content: "Teacher · Attendance two taps, done. — Smart Campuses" },
      { property: "og:description", content: "Mark a class's attendance in under 30 seconds with bulk-present, swipe-to-absent and offline mode." },
      { property: "og:url", content: "/features/teacher-portal/attendance" },
    ],
    links: [{ rel: "canonical", href: "/features/teacher-portal/attendance" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Teacher · Attendance"} highlight={"two taps, done."}
      description={"Mark a class's attendance in under 30 seconds with bulk-present, swipe-to-absent and offline mode."}
      sections={[
        { title: "Built for the classroom", bullets: ["Bulk mark all-present", "Swipe to mark absent", "Works offline, syncs later", "Auto-notifies parents"] },
      ]}
      related={[
        { label: "Back to Teacher Portal", to: "/features/teacher-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
