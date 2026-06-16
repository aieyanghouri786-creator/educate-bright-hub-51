import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/testimonials/universities")({
  head: () => ({
    meta: [
      { title: "Universities at scale. VC offices and registrars speak. — Smart Campuses" },
      { name: "description", content: "Multi-faculty universities share what changed after consolidating onto one platform." },
      { property: "og:title", content: "Universities at scale. VC offices and registrars speak. — Smart Campuses" },
      { property: "og:description", content: "Multi-faculty universities share what changed after consolidating onto one platform." },
      { property: "og:url", content: "/testimonials/universities" },
    ],
    links: [{ rel: "canonical", href: "/testimonials/universities" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Testimonials"}
      title={"Universities at scale."} highlight={"VC offices and registrars speak."}
      description={"Multi-faculty universities share what changed after consolidating onto one platform."}
      sections={[
        { title: "What we hear most", bullets: ["Parents are happier — they finally have visibility", "Staff workload dropped meaningfully in the first quarter", "Leadership gets real numbers, not gut feel", "Implementation went faster than we expected"] },
        { title: "Hear it from them", body: "Dozens of universities across India have shared their experience — visit the main testimonials page or watch full video stories on request." },
      ]}
      related={[
        { label: "All testimonials", to: "/testimonials" },
        { label: "Case studies", to: "/case-studies" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
