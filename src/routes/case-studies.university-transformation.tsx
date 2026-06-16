import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/case-studies/university-transformation")({
  head: () => ({
    meta: [
      { title: "University Transformation 18,000 students, one platform. — Smart Campuses" },
      { name: "description", content: "A multi-faculty university in Bangalore consolidated 6 legacy systems into one — across 4 faculties and 28 departments." },
      { property: "og:title", content: "University Transformation 18,000 students, one platform. — Smart Campuses" },
      { property: "og:description", content: "A multi-faculty university in Bangalore consolidated 6 legacy systems into one — across 4 faculties and 28 departments." },
      { property: "og:url", content: "/case-studies/university-transformation" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/university-transformation" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Case Study"}
      title={"University Transformation"} highlight={"18,000 students, one platform."}
      description={"A multi-faculty university in Bangalore consolidated 6 legacy systems into one — across 4 faculties and 28 departments."}
      sections={[
        { title: "The challenge", body: "Six disconnected systems for admissions, academics, examinations, HR, library and hostel. Quarterly reports took weeks to compile." },
        { title: "The implementation", body: "A phased 18-month rollout: foundations → academics → operations → insights, with department-level pilots before scale-out." },
        { title: "The results", bullets: ["Single source of truth across 28 departments", "Examination result publishing in 5 days (was 6 weeks)", "Live dashboards for the VC's office", "Faculty satisfaction up 32%"] },
      ]}
      related={[
        { label: "All case studies", to: "/case-studies" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
