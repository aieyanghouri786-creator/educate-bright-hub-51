import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/legal/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy fair, transparent and predictable. — Smart Campuses" },
      { name: "description", content: "We want you to get value from Smart Campuses. This policy explains when refunds apply and how to request them." },
      { property: "og:title", content: "Refund Policy fair, transparent and predictable. — Smart Campuses" },
      { property: "og:description", content: "We want you to get value from Smart Campuses. This policy explains when refunds apply and how to request them." },
      { property: "og:url", content: "/legal/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/legal/refund-policy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Legal"}
      title={"Refund Policy"} highlight={"fair, transparent and predictable."}
      description={"We want you to get value from Smart Campuses. This policy explains when refunds apply and how to request them."}
      sections={[
        { title: "Free trial", body: "Every plan includes a 30-day free trial. You'll only be charged if you choose to continue after the trial ends." },
        { title: "Monthly plans", body: "You can cancel a monthly plan any time. Cancellations stop future billing; no partial-month refunds are issued." },
        { title: "Annual plans", body: "Refunds within the first 30 days of an annual term are pro-rated to the lesser of unused time or 11 months." },
        { title: "How to request a refund", body: "Email billing@smartcampuses.app with your institution name and reason. Most refunds are processed within 7 business days." },
      ]}
      related={[
        { label: "Privacy", to: "/legal/privacy" },
        { label: "Terms", to: "/legal/terms" },
        { label: "Data Security", to: "/legal/data-security" }
      ]}
    />
  );
}
