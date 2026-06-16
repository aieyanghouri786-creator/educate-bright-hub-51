import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/choosing-an-lms-for-your-college")({
  head: () => ({
    meta: [
      { title: "Choosing an LMS for your college ten questions to ask vendors. — Smart Campuses" },
      { name: "description", content: "Picking an LMS is a multi-year commitment. These questions separate the platforms built for higher education from the ones repurposed for it." },
      { property: "og:title", content: "Choosing an LMS for your college ten questions to ask vendors. — Smart Campuses" },
      { property: "og:description", content: "Picking an LMS is a multi-year commitment. These questions separate the platforms built for higher education from the ones repurposed for it." },
      { property: "og:url", content: "/blog/choosing-an-lms-for-your-college" },
    ],
    links: [{ rel: "canonical", href: "/blog/choosing-an-lms-for-your-college" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog Post"}
      title={"Choosing an LMS for your college"} highlight={"ten questions to ask vendors."}
      description={"Picking an LMS is a multi-year commitment. These questions separate the platforms built for higher education from the ones repurposed for it."}
      sections={[
        { title: "By Rohan Mehta · 8 June 2026", body: "Reading time: 8 minutes. Originally published in the LMS Trends category." },
        { title: "1. Does it support your assessment model?", body: "CBCS, semester systems, internal+external assessments, moderation workflows — your LMS must speak the language of your academic regulations." },
        { title: "2. How does it handle live classes at scale?", body: "Recording, attendance, breakout rooms and integration with your scheduling — for sections of 60+ students." },
        { title: "3. Is the mobile experience first-class?", body: "Most students will access the LMS primarily on phones. Demand a real mobile app, not a mobile-responsive web page." },
        { title: "4. What happens to your data on exit?", body: "Vendor lock-in is real. Demand documented export formats and SLAs before you sign." },
      ]}
      related={[
        { label: "All articles", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
