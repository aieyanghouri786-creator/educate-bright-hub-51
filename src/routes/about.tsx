import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Target, Eye, Heart } from "lucide-react";
import { PageHero, SectionEyebrow } from "@/components/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Smart Campuses" },
      { name: "description", content: "Smart Campuses helps educational institutions embrace digital transformation through innovative ERP and LMS solutions." },
      { property: "og:title", content: "About Smart Campuses" },
      { property: "og:description", content: "Empowering education through technology." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Innovation", description: "Always shipping what the next generation of education needs." },
  { title: "Integrity", description: "Transparent, secure and accountable in everything we do." },
  { title: "Excellence", description: "A relentless commitment to craftsmanship and quality." },
  { title: "Reliability", description: "Always-on infrastructure your institution can trust." },
  { title: "Customer Success", description: "Your outcomes are how we measure ours." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Empowering education <span className="text-gradient-brand">through technology.</span></>}
        description="We help educational institutions embrace digital transformation through innovative ERP and Learning Management solutions — connecting students, teachers, parents and management in one seamless ecosystem."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground"><Eye className="h-5 w-5" /></div>
          <h2 className="mt-6 text-3xl font-semibold">Our vision</h2>
          <p className="mt-3 text-muted-foreground">
            To become a trusted technology partner for educational institutions worldwide
            by delivering intelligent, scalable and future-ready solutions.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground"><Target className="h-5 w-5" /></div>
          <h2 className="mt-6 text-3xl font-semibold">Our mission</h2>
          <p className="mt-3 text-muted-foreground">
            To provide affordable, secure and user-friendly education management systems
            that improve operational efficiency and learning outcomes.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center gap-3">
            <SectionEyebrow>Our values</SectionEyebrow>
          </div>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            The principles guiding every release.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <Heart className="h-5 w-5 text-brand" />
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-brand" />
        <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
          A connected educational ecosystem where everyone thrives.
        </h2>
        <p className="mt-4 text-muted-foreground">
          We're builders, educators and parents — committed to giving every institution
          the tools to focus on what matters most: teaching and learning.
        </p>
      </section>
    </>
  );
}
