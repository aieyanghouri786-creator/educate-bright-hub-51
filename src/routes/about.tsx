import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Target, Eye, Heart, Smartphone, Monitor, Tablet } from "lucide-react";
import { PageHero, SectionEyebrow } from "@/components/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Smart Campus | Finland's #1 Education Management System" },
      { name: "description", content: "Smart Campus empowers administrators, faculty and educators across Finland with 50+ cloud-based modules and 24/7 dedicated support." },
      { property: "og:title", content: "About Smart Campus" },
      { property: "og:description", content: "Finland's trusted partner for modern education management." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Innovation", description: "Always shipping what the next generation of education needs." },
  { title: "Integrity", description: "Transparent, secure and accountable in everything we do." },
  { title: "Excellence", description: "A relentless commitment to craftsmanship and quality." },
  { title: "Reliability", description: "24/7 dedicated support your institution can always count on." },
  { title: "Customer Success", description: "Your outcomes are how we measure ours." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Empowering education <span className="text-gradient-brand">across Finland.</span></>}
        description="Smart Campus is an all-in-one cloud-based University Management System designed to empower administrators, faculty and educators — freeing them to focus on student success rather than paperwork. With 50+ feature-rich modules, we cover everything your institution needs at an affordable price."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground"><Eye className="h-5 w-5" /></div>
          <h2 className="mt-6 text-3xl font-semibold">Our vision</h2>
          <p className="mt-3 text-muted-foreground">
            To become Finland's most trusted technology partner for educational institutions
            by delivering intelligent, scalable and future-ready solutions that transform
            how schools, colleges and universities operate.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground"><Target className="h-5 w-5" /></div>
          <h2 className="mt-6 text-3xl font-semibold">Our mission</h2>
          <p className="mt-3 text-muted-foreground">
            To provide affordable, secure and user-friendly education management systems
            that solve your biggest operational challenges through intelligent automation,
            seamless integrations and a fully scalable platform built for modern education.
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

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <SectionEyebrow>Design philosophy</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Where Powerful Technology <span className="text-gradient-brand">Meets Beautiful Design.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Smart Campus redefines the Campus Management System experience with a sleek,
            intuitive and fully responsive interface — leaving behind the outdated, cluttered
            platforms of the past. Built with cutting-edge UI/UX technology, our platform ensures
            effortless navigation for administrators, faculty, students and parents. No technical
            expertise required.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Smartphone, title: "Smartphones", desc: "Full functionality in your pocket" },
            { icon: Tablet, title: "Tablets & iPads", desc: "Optimized touch experience" },
            { icon: Monitor, title: "Laptops & Desktops", desc: "Desktop-grade productivity" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          One platform. Every device. Seamlessly optimized delivering a consistent, high-performance
          experience across every screen. Our expert design team has crafted every detail using
          eye-pleasing color palettes and accessibility-first design standards, making Smart Campus
          as beautiful as it is powerful.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-brand" />
        <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
          A connected educational ecosystem where everyone thrives.
        </h2>
        <p className="mt-4 text-muted-foreground">
          We're builders, educators and parents — committed to giving every institution in Finland
          the tools to focus on what matters most: teaching and learning.
        </p>
      </section>
    </>
  );
}
