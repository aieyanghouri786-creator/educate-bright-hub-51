import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/parent-portal/attendance")({
  head: () => ({
    meta: [
      { title: "Parent · Attendance know the moment your child arrives. — Smart Campuses" },
      { name: "description", content: "Parents see daily attendance, get instant alerts for absences and review attendance trends over the term." },
      { property: "og:title", content: "Parent · Attendance know the moment your child arrives. — Smart Campuses" },
      { property: "og:description", content: "Parents see daily attendance, get instant alerts for absences and review attendance trends over the term." },
      { property: "og:url", content: "/features/parent-portal/attendance" },
    ],
    links: [{ rel: "canonical", href: "/features/parent-portal/attendance" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Parent · Attendance"} highlight={"know the moment your child arrives."}
      description={"Parents see daily attendance, get instant alerts for absences and review attendance trends over the term."}
      sections={[
        { title: "Live updates", body: "Push notification the moment your child is marked absent — and a daily summary at end of day." },
        { title: "Trends", bullets: ["Subject-wise attendance percentage", "Late-arrival patterns", "Comparison vs class average", "Absence reason history"] },
      ]}
      related={[
        { label: "Back to Parent Portal", to: "/features/parent-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
