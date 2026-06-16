import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/solutions/schools")({
  head: () => ({
    meta: [
      { title: "For Schools K-12 done right. — Smart Campuses" },
      { name: "description", content: "Everything K-12 schools need — academic, administrative and parent communication — under one branded platform." },
      { property: "og:title", content: "For Schools K-12 done right. — Smart Campuses" },
      { property: "og:description", content: "Everything K-12 schools need — academic, administrative and parent communication — under one branded platform." },
      { property: "og:url", content: "/solutions/schools" },
    ],
    links: [{ rel: "canonical", href: "/solutions/schools" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Solution"}
      title={"For Schools"} highlight={"K-12 done right."}
      description={"Everything K-12 schools need — academic, administrative and parent communication — under one branded platform."}
      sections={[
        { title: "School ERP", body: "Admissions, attendance, fees, exams, transport and HR built for the rhythms of a K-12 school year." },
        { title: "Parent portal", body: "Daily attendance, homework, fee status, results and direct messaging with class teachers." },
        { title: "Teacher portal", body: "Class management, lesson plans, gradebook, assignments and parent communication in a mobile-first interface." },
        { title: "Student portal", bullets: ["Timetable and homework", "Online classes and assignments", "Results and progress", "Library and certificate downloads"] },
      ]}
      related={[
        { label: "All Solutions", to: "/solutions" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
