import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="bg-hero-glow border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}

export function BrandButton({
  to,
  href,
  children,
  variant = "primary",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}) {
  const cls =
    variant === "primary"
      ? "bg-gradient-brand text-primary-foreground shadow-elegant hover:opacity-95"
      : "border border-border bg-background text-foreground hover:bg-accent";
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  if (to) return <Link to={to} className={`${base} ${cls}`}>{children}</Link>;
  return <a href={href ?? "#"} className={`${base} ${cls}`}>{children}</a>;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:shadow-card">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-soft opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-card">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
