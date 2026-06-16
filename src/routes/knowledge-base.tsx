import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/knowledge-base")({
  head: () => ({
    meta: [
      { title: "Find an answer, learn the platform. — Smart Campuses" },
      { name: "description", content: "Self-serve guides, FAQs and video tutorials covering every part of Smart Campuses." },
      { property: "og:title", content: "Find an answer, learn the platform. — Smart Campuses" },
      { property: "og:description", content: "Self-serve guides, FAQs and video tutorials covering every part of Smart Campuses." },
      { property: "og:url", content: "/knowledge-base" },
    ],
    links: [{ rel: "canonical", href: "/knowledge-base" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Knowledge Base"}
      title={"Find an answer,"} highlight={"learn the platform."}
      description={"Self-serve guides, FAQs and video tutorials covering every part of Smart Campuses."}
      sections={[
        { title: "Browse topics", bullets: ["Getting Started", "User Guides", "FAQs", "Video Tutorials", "Documentation"] },
      ]}
      related={[
        { label: "Getting Started", to: "/knowledge-base/getting-started" },
        { label: "User Guides", to: "/knowledge-base/user-guides" },
        { label: "FAQs", to: "/knowledge-base/faqs" },
        { label: "Video Tutorials", to: "/knowledge-base/video-tutorials" },
        { label: "Documentation", to: "/knowledge-base/documentation" }
      ]}
    />
  );
}
