import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/parent-portal/results")({
  head: () => ({
    meta: [
      { title: "Parent · Results track progress every term. — Smart Campuses" },
      { name: "description", content: "Term-wise results, skill assessments and progress reports — accessible the moment they're published." },
      { property: "og:title", content: "Parent · Results track progress every term. — Smart Campuses" },
      { property: "og:description", content: "Term-wise results, skill assessments and progress reports — accessible the moment they're published." },
      { property: "og:url", content: "/features/parent-portal/results" },
    ],
    links: [{ rel: "canonical", href: "/features/parent-portal/results" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Parent · Results"} highlight={"track progress every term."}
      description={"Term-wise results, skill assessments and progress reports — accessible the moment they're published."}
      sections={[
        { title: "What parents see", bullets: ["Subject-wise marks and grades", "Teacher remarks", "Progress vs previous terms", "Class rank and percentile"] },
        { title: "Conversations", body: "Inline messaging to discuss any subject directly with the teacher — keeping context attached to the result." },
      ]}
      related={[
        { label: "Back to Parent Portal", to: "/features/parent-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
