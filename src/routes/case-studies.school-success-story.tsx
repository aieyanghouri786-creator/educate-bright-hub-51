import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/case-studies/school-success-story")({
  head: () => ({
    meta: [
      { title: "School Success Story from paper to platform in 90 days. — Smart Campuses" },
      { name: "description", content: "How a 1,200-student CBSE school in Pune eliminated paper-based admissions and cut fee collection time by 70%." },
      { property: "og:title", content: "School Success Story from paper to platform in 90 days. — Smart Campuses" },
      { property: "og:description", content: "How a 1,200-student CBSE school in Pune eliminated paper-based admissions and cut fee collection time by 70%." },
      { property: "og:url", content: "/case-studies/school-success-story" },
    ],
    links: [{ rel: "canonical", href: "/case-studies/school-success-story" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Case Study"}
      title={"School Success Story"} highlight={"from paper to platform in 90 days."}
      description={"How a 1,200-student CBSE school in Pune eliminated paper-based admissions and cut fee collection time by 70%."}
      sections={[
        { title: "The challenge", body: "Admissions involved 12+ paper forms per student. Fee collection peaked at month-end with parents standing in line for hours. Attendance was tracked in registers and entered into Excel later." },
        { title: "The implementation", body: "Smart Campuses ERP rolled out across admissions, attendance, fees and parent portal in 90 days, with no academic disruption." },
        { title: "The results", bullets: ["Admissions cycle reduced from 14 days to 3", "Fee collection time down 70%", "Parent satisfaction up to 4.8/5", "Zero paper forms in year two"] },
      ]}
      related={[
        { label: "All case studies", to: "/case-studies" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
