import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/lms/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates ready to share. — Smart Campuses" },
      { name: "description", content: "Auto-issue branded, verifiable certificates the moment a student completes a course or program." },
      { property: "og:title", content: "Certificates ready to share. — Smart Campuses" },
      { property: "og:description", content: "Auto-issue branded, verifiable certificates the moment a student completes a course or program." },
      { property: "og:url", content: "/products/lms/certificates" },
    ],
    links: [{ rel: "canonical", href: "/products/lms/certificates" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"LMS Module"}
      title={"Certificates"} highlight={"ready to share."}
      description={"Auto-issue branded, verifiable certificates the moment a student completes a course or program."}
      sections={[
        { title: "Branded templates", body: "Designer-friendly templates with your logo, signatures, seal and program-specific styling." },
        { title: "Automatic issuance", body: "Triggered by course completion, exam pass or custom criteria — emailed and added to the student's profile." },
        { title: "Verifiable & shareable", bullets: ["Unique verification URLs", "QR-code authentication", "LinkedIn-ready share", "Public verification page"] },
      ]}
      related={[
        { label: "All LMS modules", to: "/products/lms" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
