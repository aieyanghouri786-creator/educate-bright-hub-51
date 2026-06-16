import { createFileRoute } from "@tanstack/react-router";
import { SubPage } from "@/components/ui-bits";

export const Route = createFileRoute("/blog/how-erp-improves-school-management")({
  head: () => ({
    meta: [
      { title: "How ERP improves school management ten ways institutions save time. — Smart Campuses" },
      { name: "description", content: "From admissions to fee collection, here's how an integrated ERP changes the day-to-day work of running a school." },
      { property: "og:title", content: "How ERP improves school management ten ways institutions save time. — Smart Campuses" },
      { property: "og:description", content: "From admissions to fee collection, here's how an integrated ERP changes the day-to-day work of running a school." },
      { property: "og:url", content: "/blog/how-erp-improves-school-management" },
    ],
    links: [{ rel: "canonical", href: "/blog/how-erp-improves-school-management" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SubPage
      eyebrow={"Blog Post"}
      title={"How ERP improves school management"} highlight={"ten ways institutions save time."}
      description={"From admissions to fee collection, here's how an integrated ERP changes the day-to-day work of running a school."}
      sections={[
        { title: "By Anika Sharma · 14 June 2026", body: "Reading time: 6 minutes. Originally published in the Education Technology category." },
        { title: "1. One source of truth", body: "When admissions, attendance, fees and academics live in different systems, staff spend hours reconciling spreadsheets. An ERP eliminates that work overnight." },
        { title: "2. Parents get information faster", body: "Real-time attendance, results and fee status — delivered to parents the moment they're recorded, not at the end of the week." },
        { title: "3. Finance teams close books in hours, not weeks", body: "Automated fee collection, online payments and reconciliation turn month-end from a multi-week scramble into a same-day exercise." },
        { title: "4. Leadership gets real numbers", body: "Dashboards showing enrollment, collection efficiency and academic performance — updated continuously, not quarterly." },
      ]}
      related={[
        { label: "All articles", to: "/blog" },
        { label: "Request Demo", to: "/contact" }
      ]}
    />
  );
}
