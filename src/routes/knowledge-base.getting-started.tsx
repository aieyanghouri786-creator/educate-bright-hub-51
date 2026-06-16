import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/knowledge-base/getting-started")({
  head: () => ({
    meta: [
      { title: "Getting Started up and running in a week. — Smart Campuses" },
      { name: "description", content: "A guided onboarding path for new institutions — from kickoff to go-live in 5-10 days for most schools." },
      { property: "og:title", content: "Getting Started up and running in a week. — Smart Campuses" },
      { property: "og:description", content: "A guided onboarding path for new institutions — from kickoff to go-live in 5-10 days for most schools." },
      { property: "og:url", content: "/knowledge-base/getting-started" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-base/getting-started" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Knowledge Base"}
      title={"Getting Started"} highlight={"up and running in a week."}
      description={"A guided onboarding path for new institutions — from kickoff to go-live in 5-10 days for most schools."}
      sections={[
        { title: "Day 1-2: Setup", bullets: ["Workspace creation", "Logo, theme and branding", "User roles and permissions", "Data import templates"] },
        { title: "Day 3-5: Data", bullets: ["Student import", "Staff import", "Class and section setup", "Fee structures and calendars"] },
        { title: "Day 6-10: Training & go-live", bullets: ["Admin and teacher training", "Parent app rollout", "Pilot week", "Full go-live"] },
      ]}
      related={[
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Support", to: "/support" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
