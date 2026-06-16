import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/features/parent-portal/fee-payments")({
  head: () => ({
    meta: [
      { title: "Parent · Fee Payments pay in seconds. — Smart Campuses" },
      { name: "description", content: "View dues, pay online via UPI/card/net-banking and download receipts — without standing in line at the finance office." },
      { property: "og:title", content: "Parent · Fee Payments pay in seconds. — Smart Campuses" },
      { property: "og:description", content: "View dues, pay online via UPI/card/net-banking and download receipts — without standing in line at the finance office." },
      { property: "og:url", content: "/features/parent-portal/fee-payments" },
    ],
    links: [{ rel: "canonical", href: "/features/parent-portal/fee-payments" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Feature"}
      title={"Parent · Fee Payments"} highlight={"pay in seconds."}
      description={"View dues, pay online via UPI/card/net-banking and download receipts — without standing in line at the finance office."}
      sections={[
        { title: "Frictionless payments", bullets: ["Single-click UPI and card payments", "EMI and installment options", "Auto-pay for recurring fees", "Instant receipts in PDF"] },
        { title: "Transparency", body: "Full breakup of every fee head, applied concessions, paid and outstanding amounts — always up to date." },
      ]}
      related={[
        { label: "Back to Parent Portal", to: "/features/parent-portal" },
        { label: "All Features", to: "/features" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
