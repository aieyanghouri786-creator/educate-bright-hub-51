import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Real institutions. Real outcomes. — Smart Campuses" },
      { name: "description", content: "How schools, colleges and university networks transformed operations with Smart Campuses — with the numbers to prove it." },
      { property: "og:title", content: "Real institutions. Real outcomes. — Smart Campuses" },
      { property: "og:description", content: "How schools, colleges and university networks transformed operations with Smart Campuses — with the numbers to prove it." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Case Studies"}
      title={"Real institutions."} highlight={"Real outcomes."}
      description={"How schools, colleges and university networks transformed operations with Smart Campuses — with the numbers to prove it."}
      sections={[
        { title: "Featured stories", bullets: ["School Success Story", "University Transformation", "Multi-Campus Deployment"] },
      ]}
      related={[
        { label: "School Success Story", to: "/case-studies/school-success-story" },
        { label: "University Transformation", to: "/case-studies/university-transformation" },
        { label: "Multi-Campus Deployment", to: "/case-studies/multi-campus-deployment" }
      ]}
    />
  );
}
