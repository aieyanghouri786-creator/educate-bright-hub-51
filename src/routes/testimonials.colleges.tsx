import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/testimonials/colleges")({
  head: () => ({
    meta: [
      { title: "Colleges weigh in. academic deans on Smart Campuses. — Smart Campuses" },
      { name: "description", content: "How college principals, IQAC heads and exam controllers describe their experience." },
      { property: "og:title", content: "Colleges weigh in. academic deans on Smart Campuses. — Smart Campuses" },
      { property: "og:description", content: "How college principals, IQAC heads and exam controllers describe their experience." },
      { property: "og:url", content: "/testimonials/colleges" },
    ],
    links: [{ rel: "canonical", href: "/testimonials/colleges" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Testimonials"}
      title={"Colleges weigh in."} highlight={"academic deans on Smart Campuses."}
      description={"How college principals, IQAC heads and exam controllers describe their experience."}
      sections={[
        { title: "What we hear most", bullets: ["Parents are happier — they finally have visibility", "Staff workload dropped meaningfully in the first quarter", "Leadership gets real numbers, not gut feel", "Implementation went faster than we expected"] },
        { title: "Hear it from them", body: "Dozens of colleges across India have shared their experience — visit the main testimonials page or watch full video stories on request." },
      ]}
      related={[
        { label: "All testimonials", to: "/testimonials" },
        { label: "Case studies", to: "/case-studies" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
