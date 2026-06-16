import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/legal/data-security")({
  head: () => ({
    meta: [
      { title: "Data Security Policy how we protect your data. — Smart Campuses" },
      { name: "description", content: "Smart Campuses follows industry best practices and applicable standards to safeguard institutional data." },
      { property: "og:title", content: "Data Security Policy how we protect your data. — Smart Campuses" },
      { property: "og:description", content: "Smart Campuses follows industry best practices and applicable standards to safeguard institutional data." },
      { property: "og:url", content: "/legal/data-security" },
    ],
    links: [{ rel: "canonical", href: "/legal/data-security" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Legal"}
      title={"Data Security Policy"} highlight={"how we protect your data."}
      description={"Smart Campuses follows industry best practices and applicable standards to safeguard institutional data."}
      sections={[
        { title: "Infrastructure", bullets: ["Hosted on tier-1 cloud providers (India region by default)", "Encrypted at rest (AES-256) and in transit (TLS 1.2+)", "Network segmentation and least-privilege access", "Continuous patching and vulnerability management"] },
        { title: "Access controls", bullets: ["Role-based, field-level permissions", "SSO and MFA support", "Comprehensive audit logging", "Time-boxed support access with consent"] },
        { title: "Backups & disaster recovery", body: "Encrypted daily backups with 30-day retention, geographically separate copies and tested restore procedures with documented RPO/RTO." },
        { title: "Compliance", body: "Aligned with ISO 27001 controls, GDPR principles and India's Digital Personal Data Protection Act. SOC 2 program is in progress." },
        { title: "Incident response", body: "24/7 monitoring with documented incident response and notification procedures. Customers are notified of material incidents within 72 hours." },
      ]}
      related={[
        { label: "Privacy", to: "/legal/privacy" },
        { label: "Terms", to: "/legal/terms" },
        { label: "Data Security", to: "/legal/data-security" }
      ]}
    />
  );
}
