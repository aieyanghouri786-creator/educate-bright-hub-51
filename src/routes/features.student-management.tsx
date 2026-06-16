import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/student-management")({
  head: () => ({
    meta: [
      { title: "Student Management the complete record. — Smart Campuses" },
      { name: "description", content: "Profiles, academics, documents and parent information — every detail about every student, organized and searchable." },
      { property: "og:title", content: "Student Management the complete record. — Smart Campuses" },
      { property: "og:description", content: "Profiles, academics, documents and parent information — every detail about every student, organized and searchable." },
      { property: "og:url", content: "/features/student-management" },
    ],
    links: [{ rel: "canonical", href: "/features/student-management" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Student Management"} highlight={"the complete record."}
      description={"Profiles, academics, documents and parent information — every detail about every student, organized and searchable."}
      sections={[
        { title: "What's included", bullets: ["Student Profiles", "Academic Records", "Documents", "Parent Information"] },
        { title: "Designed for scale", body: "From classrooms of 30 to universities serving 100,000+ students, the data model and permissions adapt to your structure." },
      ]}
      related={[
        { label: "Profiles", to: "/features/student-management/profiles" },
        { label: "Academic Records", to: "/features/student-management/academic-records" },
        { label: "Documents", to: "/features/student-management/documents" },
        { label: "Parent Info", to: "/features/student-management/parent-info" }
      ]}
    />
  );
}
