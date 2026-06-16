import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/support/help-center")({
  head: () => ({
    meta: [
      { title: "Help Center searchable answers. — Smart Campuses" },
      { name: "description", content: "A searchable library of step-by-step guides, troubleshooting articles and best-practices for every part of the platform." },
      { property: "og:title", content: "Help Center searchable answers. — Smart Campuses" },
      { property: "og:description", content: "A searchable library of step-by-step guides, troubleshooting articles and best-practices for every part of the platform." },
      { property: "og:url", content: "/support/help-center" },
    ],
    links: [{ rel: "canonical", href: "/support/help-center" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Support"}
      title={"Help Center"} highlight={"searchable answers."}
      description={"A searchable library of step-by-step guides, troubleshooting articles and best-practices for every part of the platform."}
      sections={[
        { title: "Top categories", bullets: ["Account & login", "Attendance & academics", "Fees & finance", "Parent app", "Examinations", "Integrations"] },
      ]}
      related={[
        { label: "Support overview", to: "/support" },
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
