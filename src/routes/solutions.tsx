import { createFileRoute } from "@tanstack/react-router";
import { School, Building2, Landmark, BookMarked, Network } from "lucide-react";
import { PageHero, FeatureCard } from "@/components/ui-bits";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Smart Campuses" },
      { name: "description", content: "Solutions for schools, colleges, universities, training institutes and multi-campus institutions." },
      { property: "og:title", content: "Solutions — Smart Campuses" },
      { property: "og:description", content: "Tailored ERP & LMS for every kind of institution." },
    ],
  }),
  component: Solutions,
});

const solutions = [
  { icon: School, title: "Schools", description: "Digitize academic and administrative operations for K-12 institutions." },
  { icon: Building2, title: "Colleges", description: "Manage admissions, academics, examinations and student services." },
  { icon: Landmark, title: "Universities", description: "Comprehensive ERP and LMS for higher education institutions." },
  { icon: BookMarked, title: "Training Institutes", description: "Courses, enrollments, certifications and online learning at scale." },
  { icon: Network, title: "Multi-Campus", description: "Centralized management for multiple branches and campuses." },
];

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Solutions for <span className="text-gradient-brand">every institution.</span></>}
        description="From a neighborhood school to a multi-campus university, Smart Campuses adapts to your structure, scale and pedagogy."
      />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => <FeatureCard key={s.title} {...s} />)}
        </div>
      </section>
    </>
  );
}
