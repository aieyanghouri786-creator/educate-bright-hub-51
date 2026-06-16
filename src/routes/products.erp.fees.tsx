import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/products/erp/fees")({
  head: () => ({
    meta: [
      { title: "Fee Management without the chaos. — Smart Campuses" },
      { name: "description", content: "Automate fee structures, invoicing, online collection, receipts and reconciliation — with full audit trails for finance and management." },
      { property: "og:title", content: "Fee Management without the chaos. — Smart Campuses" },
      { property: "og:description", content: "Automate fee structures, invoicing, online collection, receipts and reconciliation — with full audit trails for finance and management." },
      { property: "og:url", content: "/products/erp/fees" },
    ],
    links: [{ rel: "canonical", href: "/products/erp/fees" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"ERP Module"}
      title={"Fee Management"} highlight={"without the chaos."}
      description={"Automate fee structures, invoicing, online collection, receipts and reconciliation — with full audit trails for finance and management."}
      sections={[
        { title: "Fee collection", body: "Configurable fee heads, term-wise structures, scholarships, concessions and late-fee rules applied automatically." },
        { title: "Online payments", body: "Parents pay via UPI, cards, net-banking and wallets through a secure portal — receipts generated instantly." },
        { title: "Financial reports", bullets: ["Daily collection register", "Outstanding dues and aging reports", "Concession and scholarship reports", "Reconciliation with bank statements"] },
      ]}
      related={[
        { label: "All ERP modules", to: "/products/erp" },
        { label: "Pricing", to: "/pricing" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
