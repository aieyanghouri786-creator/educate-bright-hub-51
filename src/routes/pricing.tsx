import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui-bits";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Smart Campuses" },
      { name: "description", content: "Flexible plans for every institution — Starter, Professional and Enterprise." },
      { property: "og:title", content: "Pricing — Smart Campuses" },
      { property: "og:description", content: "Transparent pricing for schools, colleges and universities." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Starter",
    blurb: "Ideal for small institutions",
    price: "₹4,999",
    suffix: "/mo",
    features: ["Student Management", "Attendance", "Admissions", "Fee Management", "Basic Reports", "Parent Portal"],
    cta: "Start free trial",
    featured: false,
  },
  {
    name: "Professional",
    blurb: "Perfect for growing institutions",
    price: "₹12,999",
    suffix: "/mo",
    features: ["Everything in Starter", "LMS Integration", "Examination Management", "HR & Payroll", "Advanced Reports", "Mobile App"],
    cta: "Get Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    blurb: "For large institutions and universities",
    price: "Custom",
    suffix: "",
    features: ["Unlimited Users", "Multi-Campus Support", "Custom Integrations", "Dedicated Support", "Custom Reports", "Enterprise Security"],
    cta: "Contact Sales",
    featured: false,
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Flexible plans for <span className="text-gradient-brand">every institution.</span></>}
        description="Pay for what your campus actually needs. Switch plans, scale users or move to Enterprise at any time."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition ${
                t.featured
                  ? "border-transparent bg-gradient-brand text-primary-foreground shadow-elegant"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-background px-3 py-1 text-xs font-semibold text-brand">
                  Most popular
                </span>
              )}
              <h3 className="text-2xl font-semibold">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {t.blurb}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold">{t.price}</span>
                <span className={t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>{t.suffix}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 ${t.featured ? "text-primary-foreground" : "text-brand"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  t.featured
                    ? "bg-background text-foreground hover:bg-cream"
                    : "bg-gradient-brand text-primary-foreground hover:opacity-95"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans include onboarding, data migration support and 24/7 monitoring.
          <Link to="/contact" className="ml-1 font-semibold text-brand hover:underline">Contact sales</Link> for custom pricing.
        </p>
      </section>
    </>
  );
}
