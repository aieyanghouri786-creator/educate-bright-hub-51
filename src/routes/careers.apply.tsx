import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/careers/apply")({
  head: () => ({
    meta: [
      { title: "Tell us about yourself. — Smart Campuses" },
      { name: "description", content: "We review every application personally. Share your background, what you've built and what excites you about education technology." },
      { property: "og:title", content: "Tell us about yourself. — Smart Campuses" },
      { property: "og:description", content: "We review every application personally. Share your background, what you've built and what excites you about education technology." },
      { property: "og:url", content: "/careers/apply" },
    ],
    links: [{ rel: "canonical", href: "/careers/apply" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Careers · Apply"}
      title={"Tell us about"} highlight={"yourself."}
      description={"We review every application personally. Share your background, what you've built and what excites you about education technology."}
      sections={[
        { title: "What we look for", bullets: ["Clear writing and product taste", "Bias toward shipping over deliberating", "Curiosity about the realities of running an institution", "Comfort with ambiguity and ownership"] },
        { title: "How the process works", body: "Application review (1 week) → first conversation (30 min) → working session on a real problem (2 hours) → team conversations (half day) → offer." },
        { title: "What to include", bullets: ["Your resume or LinkedIn profile", "A link to something you've built or written", "A short note: why education, why Smart Campuses"] },
      ]}
      related={[
        { label: "Open positions", to: "/careers" },
        { label: "About", to: "/about" }
      ]}
    />
  );
}
