import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/teacher-portal/class-management")({
  head: () => ({
    meta: [
      { title: "Teacher · Class Management everything for every class. — Smart Campuses" },
      { name: "description", content: "Each class is a single workspace — roster, timetable, lesson plans, materials and announcements together." },
      { property: "og:title", content: "Teacher · Class Management everything for every class. — Smart Campuses" },
      { property: "og:description", content: "Each class is a single workspace — roster, timetable, lesson plans, materials and announcements together." },
      { property: "og:url", content: "/features/teacher-portal/class-management" },
    ],
    links: [{ rel: "canonical", href: "/features/teacher-portal/class-management" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Teacher · Class Management"} highlight={"everything for every class."}
      description={"Each class is a single workspace — roster, timetable, lesson plans, materials and announcements together."}
      sections={[
        { title: "What's inside", bullets: ["Roster with photos", "Period-wise timetable", "Lesson plans and materials", "Class announcements"] },
      ]}
      related={[
        { label: "Back to Teacher Portal", to: "/features/teacher-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
