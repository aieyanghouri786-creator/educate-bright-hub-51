import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights for the next generation of education. — Smart Campuses" },
      { name: "description", content: "Articles, guides and ideas on education technology, ERP, LMS, and how schools, colleges and universities are evolving." },
      { property: "og:title", content: "Insights for the next generation of education. — Smart Campuses" },
      { property: "og:description", content: "Articles, guides and ideas on education technology, ERP, LMS, and how schools, colleges and universities are evolving." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog"}
      title={"Insights for the next generation of"} highlight={"education."}
      description={"Articles, guides and ideas on education technology, ERP, LMS, and how schools, colleges and universities are evolving."}
      sections={[
        { title: "Latest articles", bullets: ["How ERP improves school management", "Choosing an LMS for your college", "Digital transformation in higher education"] },
        { title: "Browse by category", bullets: ["Education Technology", "ERP Solutions", "LMS Trends", "School Management", "Higher Education", "Digital Transformation"] },
      ]}
      related={[
        { label: "Education Technology", to: "/blog/education-technology" },
        { label: "ERP Solutions", to: "/blog/erp-solutions" },
        { label: "LMS Trends", to: "/blog/lms-trends" },
        { label: "School Management", to: "/blog/school-management" },
        { label: "Higher Education", to: "/blog/higher-education" },
        { label: "Digital Transformation", to: "/blog/digital-transformation" }
      ]}
    />
  );
}
