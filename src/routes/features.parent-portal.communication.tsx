import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/parent-portal/communication")({
  head: () => ({
    meta: [
      { title: "Parent · Communication direct line to the school. — Smart Campuses" },
      { name: "description", content: "Announcements, class messages, individual chats with teachers and PTM scheduling in one place." },
      { property: "og:title", content: "Parent · Communication direct line to the school. — Smart Campuses" },
      { property: "og:description", content: "Announcements, class messages, individual chats with teachers and PTM scheduling in one place." },
      { property: "og:url", content: "/features/parent-portal/communication" },
    ],
    links: [{ rel: "canonical", href: "/features/parent-portal/communication" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Parent · Communication"} highlight={"direct line to the school."}
      description={"Announcements, class messages, individual chats with teachers and PTM scheduling in one place."}
      sections={[
        { title: "Channels", bullets: ["School-wide announcements", "Class and section messages", "Direct 1:1 chat with teachers", "PTM scheduling and reminders"] },
        { title: "Multilingual", body: "Interface and announcements available in English, Hindi and 8 regional languages." },
      ]}
      related={[
        { label: "Back to Parent Portal", to: "/features/parent-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
