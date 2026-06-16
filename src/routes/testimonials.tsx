import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/ui-bits";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Smart Campuses" },
      { name: "description", content: "What educators and administrators say about Smart Campuses." },
      { property: "og:title", content: "Testimonials — Smart Campuses" },
      { property: "og:description", content: "Educational excellence through innovation." },
    ],
  }),
  component: Testimonials,
});

const quotes = [
  {
    quote: "Our administrative workload decreased significantly after implementing Smart Campuses. Everything is now organized and accessible.",
    name: "Dr. Anika Sharma",
    role: "Principal, Greenfield International School",
  },
  {
    quote: "The LMS and communication tools dramatically improved engagement between teachers, students and parents.",
    name: "Prof. Rohan Mehta",
    role: "Academic Director, Skyline College",
  },
  {
    quote: "The reporting and analytics features provide valuable insights for confident, data-driven decision-making.",
    name: "Vikram Patel",
    role: "University Administrator, Northridge University",
  },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>Educational excellence <span className="text-gradient-brand">through innovation.</span></>}
        description="Hear from the principals, deans and administrators running their campuses on Smart Campuses."
      />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card">
              <Quote className="h-8 w-8 text-brand/40" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{q.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <div className="font-semibold">{q.name}</div>
                <div className="text-sm text-muted-foreground">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
