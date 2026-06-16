import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Cloud, ShieldCheck, Users, Layers,
  GraduationCap, ClipboardList, CalendarCheck, Wallet,
  BookOpen, Laptop, Bell, UserCog, Briefcase, BarChart3,
  Quote, Star, School, Building2, Landmark, Network, BookMarked,
} from "lucide-react";
import { BrandButton, FeatureCard, SectionEyebrow, CTASection } from "@/components/ui-bits";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Campuses — Cloud ERP & LMS for Modern Institutions" },
      { name: "description", content: "Transform your school, college or university with a unified ERP and LMS for admissions, attendance, fees, exams, communication and learning." },
      { property: "og:title", content: "Smart Campuses — Cloud ERP & LMS" },
      { property: "og:description", content: "One platform for admissions, academics, attendance, fees, exams and learning." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const benefits = [
  { icon: Cloud, title: "Cloud Based", description: "Access your institution anytime, anywhere with secure cloud technology." },
  { icon: ShieldCheck, title: "Secure & Reliable", description: "Enterprise-grade security with continuous backups and role-based access." },
  { icon: Users, title: "User Friendly", description: "Intuitive for administrators, teachers, students and parents alike." },
  { icon: Layers, title: "Scalable", description: "From a single school to multi-campus universities and academies." },
];

const features = [
  { icon: GraduationCap, title: "Student Information", description: "Complete profiles, academic records and enrollment data in one place." },
  { icon: ClipboardList, title: "Admission Management", description: "Digitize admissions from inquiry to enrollment with paperless workflows." },
  { icon: CalendarCheck, title: "Attendance Tracking", description: "Monitor student and staff attendance in real time with automated alerts." },
  { icon: Wallet, title: "Fee Management", description: "Automate fee collection, invoicing, receipts and payment reconciliation." },
  { icon: BookOpen, title: "Examination Management", description: "Conduct exams, generate report cards and track academic performance." },
  { icon: Laptop, title: "Learning Management", description: "Upload lectures, assignments, quizzes and run online assessments." },
  { icon: Bell, title: "Parent Portal", description: "Keep parents informed with instant updates, notifications and reports." },
  { icon: UserCog, title: "Faculty Portal", description: "Empower teachers with digital classroom management tools." },
  { icon: Briefcase, title: "HR & Payroll", description: "Manage employee records, salaries, attendance and leave requests." },
  { icon: BarChart3, title: "Reporting & Analytics", description: "Powerful dashboards and detailed reports for confident decisions." },
];

const solutionsCards = [
  { icon: School, title: "Schools", to: "/solutions/schools", description: "K-12 schools that want a single, branded platform for academics, parents and teachers." },
  { icon: Building2, title: "Colleges", to: "/solutions/colleges", description: "Single and affiliated colleges running admissions, academics and examinations at scale." },
  { icon: Landmark, title: "Universities", to: "/solutions/universities", description: "Multi-faculty universities consolidating ERP, LMS, research and alumni." },
  { icon: BookMarked, title: "Training Institutes", to: "/solutions/training-institutes", description: "Vocational and professional training providers running batches and certifications." },
  { icon: Network, title: "Multi-Campus", to: "/solutions/multi-campus", description: "Networks of campuses with central control and branch-level autonomy." },
];

const stats = [
  ["500+", "Institutions"],
  ["1.2M", "Students served"],
  ["18", "Countries"],
  ["99.98%", "Uptime"],
];

const testimonials = [
  { quote: "Our administrative workload decreased significantly after implementing Smart Campuses.", name: "Dr. Anika Sharma", role: "Principal, Greenfield International School" },
  { quote: "The LMS and communication tools dramatically improved engagement between teachers and parents.", name: "Prof. Rohan Mehta", role: "Academic Director, Skyline College" },
  { quote: "Reporting and analytics give us valuable insights for confident, data-driven decisions.", name: "Vikram Patel", role: "University Administrator, Northridge University" },
];

const latestPosts = [
  { slug: "how-erp-improves-school-management", title: "How ERP improves school management", category: "Education Technology", date: "14 Jun 2026" },
  { slug: "choosing-an-lms-for-your-college", title: "Choosing an LMS for your college", category: "LMS Trends", date: "8 Jun 2026" },
  { slug: "digital-transformation-in-higher-education", title: "Digital transformation in higher education", category: "Higher Education", date: "1 Jun 2026" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionEyebrow>Cloud ERP · LMS · Analytics</SectionEyebrow>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Smart education <br />
              <span className="text-gradient-brand">for modern institutions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Transform your school, college, university or training institute with a powerful
              cloud-based ERP and Learning Management System. One platform for admissions,
              attendance, academics, examinations, fees, communication and administration.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BrandButton to="/contact">
                Request Free Demo <ArrowRight className="ml-2 h-4 w-4" />
              </BrandButton>
              <BrandButton to="/contact/book-consultation" variant="outline">Schedule Consultation</BrandButton>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              {stats.slice(0, 3).map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl font-semibold text-foreground">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-soft blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
              <img src={hero} alt="Smart Campuses platform illustration" className="h-auto w-full" width={1280} height={1024} />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-brand" />
                <div>
                  <p className="text-sm font-semibold">Term enrollment</p>
                  <p className="text-xs text-muted-foreground">+24% this semester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <SectionEyebrow>Why choose us</SectionEyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              One platform. <span className="text-gradient-brand">Unlimited possibilities.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Smart Campuses automates administration while strengthening communication
              between management, teachers, students and parents.
            </p>
          </div>
          <Link to="/features" className="hidden text-sm font-semibold text-brand hover:underline md:inline-flex">
            Explore all features →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => <FeatureCard key={b.title} {...b} />)}
        </div>
      </section>

      {/* Core features */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <SectionEyebrow>Core modules</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Everything your campus runs on.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ten deeply integrated modules built for K-12, higher education and training institutes.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionEyebrow>Solutions</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Built for every kind of institution.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From a single neighborhood school to multi-campus universities, Smart Campuses adapts to your structure and pedagogy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsCards.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-brand/40 hover:shadow-card"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <ArrowRight className="mt-4 h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-brand" />
            </Link>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-border bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-5xl font-semibold text-brand md:text-6xl">{k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <SectionEyebrow>Testimonials</SectionEyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Loved by educators across the country.
            </h2>
          </div>
          <Link to="/testimonials" className="hidden text-sm font-semibold text-brand hover:underline md:inline-flex">
            Read all testimonials →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card">
              <Quote className="h-8 w-8 text-brand/40" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed">"{q.quote}"</blockquote>
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

      {/* Latest blogs */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <SectionEyebrow>From the blog</SectionEyebrow>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Ideas, guides and frameworks.
              </h2>
            </div>
            <Link to="/blog" className="hidden text-sm font-semibold text-brand hover:underline md:inline-flex">
              Visit the blog →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}` as never}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-brand/40 hover:shadow-card"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">{p.category}</div>
                <h3 className="mt-3 flex-1 text-xl font-semibold leading-snug">{p.title}</h3>
                <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{p.date}</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-brand" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
