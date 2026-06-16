import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/knowledge-base/video-tutorials")({
  head: () => ({
    meta: [
      { title: "Video Tutorials learn by watching. — Smart Campuses" },
      { name: "description", content: "Short, focused screencasts — most under 5 minutes — covering every common task." },
      { property: "og:title", content: "Video Tutorials learn by watching. — Smart Campuses" },
      { property: "og:description", content: "Short, focused screencasts — most under 5 minutes — covering every common task." },
      { property: "og:url", content: "/knowledge-base/video-tutorials" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-base/video-tutorials" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Knowledge Base"}
      title={"Video Tutorials"} highlight={"learn by watching."}
      description={"Short, focused screencasts — most under 5 minutes — covering every common task."}
      sections={[
        { title: "Most-watched", bullets: ["Marking attendance in 30 seconds", "Generating term-end report cards", "Setting up a new fee structure", "Creating an online assignment"] },
      ]}
      related={[
        { label: "Knowledge Base", to: "/knowledge-base" },
        { label: "Support", to: "/support" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
