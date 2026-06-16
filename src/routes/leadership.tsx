import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "The people behind Smart Campuses. — Smart Campuses" },
      { name: "description", content: "Our leadership combines decades of experience in education, enterprise software and cloud infrastructure to deliver a product educators actually love." },
      { property: "og:title", content: "The people behind Smart Campuses. — Smart Campuses" },
      { property: "og:description", content: "Our leadership combines decades of experience in education, enterprise software and cloud infrastructure to deliver a product educators actually love." },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Leadership"}
      title={"The people behind"} highlight={"Smart Campuses."}
      description={"Our leadership combines decades of experience in education, enterprise software and cloud infrastructure to deliver a product educators actually love."}
      sections={[
        { title: "Office of the CEO", body: "Founded with a single mission — make institutional software a joy to use. Our CEO drives product vision, customer outcomes and long-term roadmap." },
        { title: "Management Team", body: "A cross-functional team of operators across product, customer success, marketing and finance, aligned around helping every institution we serve grow." },
        { title: "Technical Team", body: "Cloud-native engineers, security specialists and data architects who keep your campus running 24/7 with 99.98% uptime and continuous improvement." },
        { title: "Education Advisory Board", body: "Principals, deans and ed-tech researchers who keep our roadmap grounded in the real pedagogical needs of K-12 and higher education." },
      ]}
      related={[
        { label: "About Smart Campuses", to: "/about" },
        { label: "Careers", to: "/careers" },
        { label: "Contact", to: "/contact" }
      ]}
    />
  );
}
