import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/solutions/colleges")({
  head: () => ({
    meta: [
      { title: "For Colleges academic excellence at scale. — Smart Campuses" },
      { name: "description", content: "Manage the academic, administrative and examination workflows of single and affiliated colleges with a system built for higher education." },
      { property: "og:title", content: "For Colleges academic excellence at scale. — Smart Campuses" },
      { property: "og:description", content: "Manage the academic, administrative and examination workflows of single and affiliated colleges with a system built for higher education." },
      { property: "og:url", content: "/solutions/colleges" },
    ],
    links: [{ rel: "canonical", href: "/solutions/colleges" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Solution"}
      title={"For Colleges"} highlight={"academic excellence at scale."}
      description={"Manage the academic, administrative and examination workflows of single and affiliated colleges with a system built for higher education."}
      sections={[
        { title: "Academic management", body: "Programs, courses, sections, electives, faculty allocation and timetable generation aligned with university affiliation rules." },
        { title: "Admissions", body: "Online applications, merit lists, counselling, seat allocation and document verification for hundreds to thousands of applicants per cycle." },
        { title: "Examination system", bullets: ["Semester and CBCS-compatible", "Internal and external assessments", "Grade and CGPA computation", "Result publishing and revaluation workflows"] },
      ]}
      related={[
        { label: "All Solutions", to: "/solutions" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
