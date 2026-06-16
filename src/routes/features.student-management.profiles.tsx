import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/student-management/profiles")({
  head: () => ({
    meta: [
      { title: "Student Profiles A single, comprehensive record per student. — Smart Campuses" },
      { name: "description", content: "Demographic data, guardians, addresses, medical notes, photos and identity documents — all in one secure profile." },
      { property: "og:title", content: "Student Profiles A single, comprehensive record per student. — Smart Campuses" },
      { property: "og:description", content: "Demographic data, guardians, addresses, medical notes, photos and identity documents — all in one secure profile." },
      { property: "og:url", content: "/features/student-management/profiles" },
    ],
    links: [{ rel: "canonical", href: "/features/student-management/profiles" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Student Profiles"} highlight={"A single, comprehensive record per student."}
      description={"Demographic data, guardians, addresses, medical notes, photos and identity documents — all in one secure profile."}
      sections={[
        { title: "What's tracked", bullets: ["Personal and contact details", "Guardian and emergency contacts", "Medical alerts and allergies", "Photo and identity documents"] },
        { title: "Permissions & privacy", body: "Field-level role-based access ensures only authorized staff see sensitive data, with full audit logs." },
      ]}
      related={[
        { label: "Back to Student Management", to: "/features/student-management" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
