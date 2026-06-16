import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/testimonials/schools")({
  head: () => ({
    meta: [
      { title: "Schools say it best. K-12 leaders on Smart Campuses. — Smart Campuses" },
      { name: "description", content: "What principals and administrators of K-12 schools say about running their institution on Smart Campuses." },
      { property: "og:title", content: "Schools say it best. K-12 leaders on Smart Campuses. — Smart Campuses" },
      { property: "og:description", content: "What principals and administrators of K-12 schools say about running their institution on Smart Campuses." },
      { property: "og:url", content: "/testimonials/schools" },
    ],
    links: [{ rel: "canonical", href: "/testimonials/schools" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Testimonials"}
      title={"Schools say it best."} highlight={"K-12 leaders on Smart Campuses."}
      description={"What principals and administrators of K-12 schools say about running their institution on Smart Campuses."}
      sections={[
        { title: "What we hear most", bullets: ["Parents are happier — they finally have visibility", "Staff workload dropped meaningfully in the first quarter", "Leadership gets real numbers, not gut feel", "Implementation went faster than we expected"] },
        { title: "Hear it from them", body: "Dozens of schools across India have shared their experience — visit the main testimonials page or watch full video stories on request." },
      ]}
      related={[
        { label: "All testimonials", to: "/testimonials" },
        { label: "Case studies", to: "/case-studies" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
