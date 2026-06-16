import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/knowledge-base/user-guides")({
  head: () => ({
    meta: [
      { title: "User Guides step by step. — Smart Campuses" },
      { name: "description", content: "Role-specific guides for admins, teachers, accountants and parents." },
      { property: "og:title", content: "User Guides step by step. — Smart Campuses" },
      { property: "og:description", content: "Role-specific guides for admins, teachers, accountants and parents." },
      { property: "og:url", content: "/knowledge-base/user-guides" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-base/user-guides" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Knowledge Base"}
      title={"User Guides"} highlight={"step by step."}
      description={"Role-specific guides for admins, teachers, accountants and parents."}
      sections={[
        { title: "By role", bullets: ["Administrator's handbook", "Teacher's handbook", "Accountant's handbook", "Parent's quick-start"] },
      ]}
      related={[
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Support", to: "/support" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
