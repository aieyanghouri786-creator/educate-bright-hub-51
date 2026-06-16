import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms/course-management")({
  head: () => ({
    meta: [
      { title: "Course Management for educators. — Smart Campuses" },
      { name: "description", content: "Author, version and publish courses with reusable content blocks, learning paths and prerequisite logic." },
      { property: "og:title", content: "Course Management for educators. — Smart Campuses" },
      { property: "og:description", content: "Author, version and publish courses with reusable content blocks, learning paths and prerequisite logic." },
      { property: "og:url", content: "/products/lms/course-management" },
    ],
    links: [{ rel: "canonical", href: "/products/lms/course-management" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"LMS Module"}
      title={"Course Management"} highlight={"for educators."}
      description={"Author, version and publish courses with reusable content blocks, learning paths and prerequisite logic."}
      sections={[
        { title: "Course builder", body: "Drag-and-drop modules, lessons and activities with rich content blocks — text, video, embeds, files and quizzes." },
        { title: "Learning paths", body: "Define prerequisites, mandatory completions and recommended next courses to guide each learner." },
        { title: "Versioning & reuse", bullets: ["Clone courses across batches", "Version-controlled content updates", "Shared resource libraries", "Co-authoring with multiple teachers"] },
      ]}
      related={[
        { label: "All LMS modules", to: "/products/lms" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
