import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Check, ArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden bg-hero-glow border-b border-border">
      <div className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[color:var(--brand)]/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-[color:var(--ink)]/20 blur-3xl animate-blob delay-300" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <div className="animate-fade-up"><SectionEyebrow>{eyebrow}</SectionEyebrow></div>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl animate-fade-up delay-100">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up delay-200">{description}</p>
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

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export type ContentBlock = {
  title: string;
  body?: string;
  bullets?: string[];
};

export function ContentSections({ sections, alt }: { sections: ContentBlock[]; alt?: boolean }) {
  return (
    <section className={alt ? "border-y border-border bg-muted/40" : ""}>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-12">
          {sections.map((s, i) => (
            <div key={s.title} className="grid gap-6 md:grid-cols-[auto_1fr]">
              <div className="font-display text-3xl font-semibold text-brand md:w-24">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h2>
                {s.body && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>}
                {s.bullets && <BulletList items={s.bullets} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ links }: { links: { label: string; to: string }[] }) {
  if (!links.length) return null;
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Explore more</h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold transition hover:border-brand/40 hover:shadow-card"
          >
            <span>{l.label}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-brand" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CTASection({
  title = "Ready to modernize your campus?",
  text = "Book a personalized demo with our specialists and see Smart Campuses live.",
  primaryTo = "/contact",
  primaryLabel = "Request Free Demo",
  secondaryTo = "/pricing",
  secondaryLabel = "View Pricing",
}: {
  title?: string;
  text?: string;
  primaryTo?: string;
  primaryLabel?: string;
  secondaryTo?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-primary-foreground md:p-14">
        <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-base text-primary-foreground/85">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to={primaryTo} className="inline-flex items-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-card hover:bg-cream">
              {primaryLabel}
            </Link>
            <Link to={secondaryTo} className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10">
              {secondaryLabel}
            </Link>
          </div>
        </div>
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}

export function SubPage({
  eyebrow,
  title,
  highlight,
  description,
  sections,
  related = [],
  ctaTitle,
  ctaText,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  sections: ContentBlock[];
  related?: { label: string; to: string }[];
  ctaTitle?: string;
  ctaText?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={highlight ? <>{title} <span className="text-gradient-brand">{highlight}</span></> : title}
        description={description}
      />
      <ContentSections sections={sections} />
      <RelatedLinks links={related} />
      <CTASection title={ctaTitle} text={ctaText} />
    </>
  );
}
