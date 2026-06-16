import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/student-management/documents")({
  head: () => ({
    meta: [
      { title: "Student Documents organized and instantly retrievable. — Smart Campuses" },
      { name: "description", content: "A secure document vault per student — certificates, IDs, scans, achievements — searchable and access-controlled." },
      { property: "og:title", content: "Student Documents organized and instantly retrievable. — Smart Campuses" },
      { property: "og:description", content: "A secure document vault per student — certificates, IDs, scans, achievements — searchable and access-controlled." },
      { property: "og:url", content: "/features/student-management/documents" },
    ],
    links: [{ rel: "canonical", href: "/features/student-management/documents" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Student Documents"} highlight={"organized and instantly retrievable."}
      description={"A secure document vault per student — certificates, IDs, scans, achievements — searchable and access-controlled."}
      sections={[
        { title: "Document types", bullets: ["Birth and ID proofs", "Previous school certificates", "Achievement and disciplinary records", "Generated transcripts and report cards"] },
        { title: "Compliance", body: "Retention policies, audit logs and encrypted storage that meets institutional data-handling standards." },
      ]}
      related={[
        { label: "Back to Student Management", to: "/features/student-management" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
