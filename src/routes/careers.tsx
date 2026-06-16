import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Build the future of education with us. — Smart Campuses" },
      { name: "description", content: "Join a team that ships software powering hundreds of institutions and the daily lives of teachers, students and parents." },
      { property: "og:title", content: "Build the future of education with us. — Smart Campuses" },
      { property: "og:description", content: "Join a team that ships software powering hundreds of institutions and the daily lives of teachers, students and parents." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Careers"}
      title={"Build the future of"} highlight={"education with us."}
      description={"Join a team that ships software powering hundreds of institutions and the daily lives of teachers, students and parents."}
      sections={[
        { title: "Why work here", bullets: ["Mission-driven work — your code reaches classrooms every day", "Remote-friendly across India with quarterly on-sites", "Competitive compensation, ESOPs and continuous learning budget", "Flat hierarchy, strong ownership culture"] },
        { title: "Open positions", bullets: ["Senior Full-Stack Engineer (Bangalore / Remote)", "Product Designer — Student Experience (Remote)", "Customer Success Manager — Higher Ed (Delhi)", "DevOps / SRE Engineer (Remote)", "Implementation Specialist (Mumbai)"] },
        { title: "Company culture", body: "We move fast, communicate in writing, ship every week, and treat customer feedback as our highest-priority signal. Education deserves software built with care." },
        { title: "Apply today", body: "Don't see your role? We're always looking for exceptional people. Send your portfolio and a short note about what you'd build at Smart Campuses." },
      ]}
      related={[
        { label: "Apply now", to: "/careers/apply" },
        { label: "Leadership", to: "/leadership" },
        { label: "About", to: "/about" }
      ]} ctaTitle={"Apply to join the team."} ctaText={"Send us your portfolio and a short note about what you'd build at Smart Campuses."}
    />
  );
}
