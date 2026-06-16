import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms/video-learning")({
  head: () => ({
    meta: [
      { title: "Video Learning that actually engages. — Smart Campuses" },
      { name: "description", content: "Stream lectures, embed interactive content and track exactly which videos students watch and where they drop off." },
      { property: "og:title", content: "Video Learning that actually engages. — Smart Campuses" },
      { property: "og:description", content: "Stream lectures, embed interactive content and track exactly which videos students watch and where they drop off." },
      { property: "og:url", content: "/products/lms/video-learning" },
    ],
    links: [{ rel: "canonical", href: "/products/lms/video-learning" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"LMS Module"}
      title={"Video Learning"} highlight={"that actually engages."}
      description={"Stream lectures, embed interactive content and track exactly which videos students watch and where they drop off."}
      sections={[
        { title: "Course video library", body: "Upload, transcode and stream videos with adaptive bitrate and offline viewing on mobile." },
        { title: "Interactive video", bullets: ["In-video quizzes and checkpoints", "Chapters and bookmarks", "Transcripts and captions", "Speed control and skip-ahead controls"] },
        { title: "Watch analytics", body: "See per-student watch time, completion rates and rewatched segments to understand what's landing — and what isn't." },
      ]}
      related={[
        { label: "All LMS modules", to: "/products/lms" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
