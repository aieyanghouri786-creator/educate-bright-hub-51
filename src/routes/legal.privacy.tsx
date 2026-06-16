import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy what we collect, why and how it's protected. — Smart Campuses" },
      { name: "description", content: "This Privacy Policy describes how Smart Campuses collects, uses, discloses and protects information when you use our services." },
      { property: "og:title", content: "Privacy Policy what we collect, why and how it's protected. — Smart Campuses" },
      { property: "og:description", content: "This Privacy Policy describes how Smart Campuses collects, uses, discloses and protects information when you use our services." },
      { property: "og:url", content: "/legal/privacy" },
    ],
    links: [{ rel: "canonical", href: "/legal/privacy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Legal"}
      title={"Privacy Policy"} highlight={"what we collect, why and how it's protected."}
      description={"This Privacy Policy describes how Smart Campuses collects, uses, discloses and protects information when you use our services."}
      sections={[
        { title: "Information we collect", bullets: ["Account information (name, email, role)", "Institutional data uploaded by authorized administrators", "Usage and device telemetry", "Communications you send to support"] },
        { title: "How we use information", body: "To deliver, secure and improve the service; to communicate operationally; and to meet legal and regulatory obligations. We never sell personal data." },
        { title: "Data sharing", body: "With sub-processors strictly necessary for service delivery (hosting, email, SMS), under contractual data-protection commitments. We disclose to authorities only when legally required." },
        { title: "Your rights", bullets: ["Access and export your data", "Correct inaccurate data", "Request deletion (subject to legal retention)", "Object to certain processing"] },
        { title: "Contact", body: "Reach our Data Protection Officer at privacy@smartcampuses.app." },
      ]}
      related={[
        { label: "Privacy", to: "/legal/privacy" },
        { label: "Terms", to: "/legal/terms" },
        { label: "Data Security", to: "/legal/data-security" }
      ]}
    />
  );
}
