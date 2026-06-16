import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/digital-transformation-in-higher-education")({
  head: () => ({
    meta: [
      { title: "Digital transformation in higher education a five-year playbook. — Smart Campuses" },
      { name: "description", content: "Most digital transformations stall. Here's the framework universities use to ship — phase by phase, with no big-bang risk." },
      { property: "og:title", content: "Digital transformation in higher education a five-year playbook. — Smart Campuses" },
      { property: "og:description", content: "Most digital transformations stall. Here's the framework universities use to ship — phase by phase, with no big-bang risk." },
      { property: "og:url", content: "/blog/digital-transformation-in-higher-education" },
    ],
    links: [{ rel: "canonical", href: "/blog/digital-transformation-in-higher-education" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog Post"}
      title={"Digital transformation in higher education"} highlight={"a five-year playbook."}
      description={"Most digital transformations stall. Here's the framework universities use to ship — phase by phase, with no big-bang risk."}
      sections={[
        { title: "By Dr. Vikram Patel · 1 June 2026", body: "Reading time: 10 minutes. Originally published in the Higher Education category." },
        { title: "Phase 1: Foundations (months 0-6)", body: "Get a clean student record system, basic attendance and online fee collection live. This pays for the rest of the program." },
        { title: "Phase 2: Academics (months 6-18)", body: "Examinations, results, transcripts and LMS go live. Faculty change-management starts here, not later." },
        { title: "Phase 3: Operations (months 18-30)", body: "HR, payroll, library, transport, hostel — the operational backbone goes digital, freeing leadership for strategy." },
        { title: "Phase 4: Insights (year 3+)", body: "Multi-year data finally enables predictive analytics, retention modeling and program-level outcome tracking." },
      ]}
      related={[
        { label: "All articles", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
