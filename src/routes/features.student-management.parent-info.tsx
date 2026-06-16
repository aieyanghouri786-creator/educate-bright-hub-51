import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/student-management/parent-info")({
  head: () => ({
    meta: [
      { title: "Parent Information two parents, one source of truth. — Smart Campuses" },
      { name: "description", content: "Track parent and guardian details, communication preferences and engagement history — to make every interaction smoother." },
      { property: "og:title", content: "Parent Information two parents, one source of truth. — Smart Campuses" },
      { property: "og:description", content: "Track parent and guardian details, communication preferences and engagement history — to make every interaction smoother." },
      { property: "og:url", content: "/features/student-management/parent-info" },
    ],
    links: [{ rel: "canonical", href: "/features/student-management/parent-info" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Parent Information"} highlight={"two parents, one source of truth."}
      description={"Track parent and guardian details, communication preferences and engagement history — to make every interaction smoother."}
      sections={[
        { title: "What's tracked", bullets: ["Father, mother and guardian details", "Occupation and contact preferences", "Multiple addresses", "Communication and meeting history"] },
        { title: "Use cases", body: "Targeted parent communication, PTM scheduling, fee escalation routing and emergency notification — without re-keying data." },
      ]}
      related={[
        { label: "Back to Student Management", to: "/features/student-management" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
