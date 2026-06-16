import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Cloud, ShieldCheck, Users, Layers,
  GraduationCap, ClipboardList, CalendarCheck, Wallet,
  BookOpen, Laptop, Bell, UserCog, Briefcase, BarChart3,
  Quote, Star, School, Building2, Landmark, Network, BookMarked, Sparkles,
} from "lucide-react";
import { BrandButton, FeatureCard, SectionEyebrow, CTASection } from "@/components/ui-bits";
import hero from "@/assets/hero.jpg";
import students from "@/assets/students.jpg";
import teacher from "@/assets/teacher.jpg";
import campus from "@/assets/campus.jpg";
import heroBg from "@/assets/hero-bg.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Campus — Finland's #1 University Management System" },
      { name: "description", content: "All-in-one cloud-based UMS & LMS for schools, colleges and universities in Finland. 50+ modules, 24/7 support, and an intuitive platform built for modern education." },
      { property: "og:title", content: "Smart Campus — Finland's #1 Education Management System" },
      { property: "og:description", content: "50+ feature-rich modules. 24/7 support. One platform for every device. Trusted across Finland." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const benefits = [
  { icon: Cloud, title: "Cloud Based", description: "Access your institution anytime, anywhere with secure cloud technology built for Finland." },
  { icon: ShieldCheck, title: "Secure & Reliable", description: "Enterprise-grade security with continuous backups, GDPR compliance and role-based access." },
  { icon: Users, title: "User Friendly", description: "Intuitive for administrators, faculty, students and parents — no technical expertise required." },
  { icon: Layers, title: "50+ Modules", description: "From admissions and attendance to parent portals and automated report cards — fully scalable." },
];

const features = [
  { icon: GraduationCap, title: "Student Information", description: "Complete profiles, academic records and enrollment data in one place." },
  { icon: ClipboardList, title: "Admission Management", description: "Digitize admissions from inquiry to enrollment with paperless workflows." },
  { icon: CalendarCheck, title: "Attendance Tracking", description: "Monitor student and staff attendance in real time with automated alerts." },
  { icon: Wallet, title: "Fee Management", description: "Automate fee collection, invoicing, receipts and payment reconciliation." },
  { icon: BookOpen, title: "Automated Report Cards", description: "Generate report cards instantly with grades, remarks and performance summaries." },
  { icon: Laptop, title: "Learning Management", description: "Upload lectures, assignments, quizzes and run online assessments." },
  { icon: Bell, title: "Parent Engagement Portal", description: "Keep parents informed with instant updates, fee alerts, attendance and results." },
  { icon: UserCog, title: "Faculty Portal", description: "Empower teachers with digital classroom management and progress tracking tools." },
  { icon: Briefcase, title: "HR & Payroll", description: "Manage employee records, salaries, attendance and leave requests." },
  { icon: BarChart3, title: "Reporting & Analytics", description: "Powerful dashboards and detailed reports for confident, data-driven decisions." },
];

const solutionsCards = [
  { icon: School, title: "Schools", to: "/solutions/schools", description: "K-12 schools across Finland that want a single platform for academics, parents and teachers." },
  { icon: Building2, title: "Colleges", to: "/solutions/colleges", description: "Single and affiliated colleges running admissions, academics and examinations at scale." },
  { icon: Landmark, title: "Universities", to: "/solutions/universities", description: "Multi-faculty universities consolidating ERP, LMS, research and alumni management." },
  { icon: BookMarked, title: "Training Institutes", to: "/solutions/training-institutes", description: "Vocational and professional training providers running batches and certifications." },
  { icon: Network, title: "Multi-Campus", to: "/solutions/multi-campus", description: "Networks of campuses with central control and branch-level autonomy." },
];

const stats = [
  ["500+", "Institutions"],
  ["1.2M", "Students served"],
  ["50+", "Modules"],
  ["99.98%", "Uptime"],
];

const testimonials = [
  { quote: "Our administrative workload decreased significantly after implementing Smart Campus. The 24/7 support team is exceptional.", name: "Dr. Liisa Mäkinen", role: "Principal, Helsinki International School" },
  { quote: "The LMS and parent engagement portal dramatically improved communication between teachers and families across our campus.", name: "Prof. Juhani Korhonen", role: "Academic Director, Tampere Polytechnic" },
  { quote: "Choosing the right University Management System in Finland transformed how we operate. Smart Campus solved our biggest operational challenges.", name: "Aino Virtanen", role: "University Administrator, Oulu University of Applied Sciences" },
];

const latestPosts = [
  { slug: "how-erp-improves-school-management", title: "How ERP improves school management", category: "Education Technology", date: "14 Jun 2026" },
  { slug: "choosing-an-lms-for-your-college", title: "Choosing an LMS for your college", category: "LMS Trends", date: "8 Jun 2026" },
  { slug: "digital-transformation-in-higher-education", title: "Digital transformation in higher education", category: "Higher Education", date: "1 Jun 2026" },
];

const trustLogos = ["Helsinki International School", "Tampere Polytechnic", "Oulu University of Applied Sciences", "Turku Academy", "Espoo High School", "Vaasa College Group"];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-glow">
        {/* background video */}
        <video
          src={heroBg.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />

        {/* animated colored blobs */}
        <div className="pointer-events-none absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-[color:var(--brand)]/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-20 right-0 h-[26rem] w-[26rem] rounded-full bg-[color:var(--ink)]/25 blur-3xl animate-blob delay-300" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr]">
          <div className="lg:order-2">
            <div className="animate-fade-up">
              <SectionEyebrow>Cloud UMS · LMS · Analytics</SectionEyebrow>
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl animate-fade-up delay-100">
              Smart Education <br />
              <span className="text-gradient-brand">Management for Modern Institutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up delay-200">
              Transform your school, college or university with an all-in-one cloud-based
              University Management System. With 50+ feature-rich modules covering everything
              from automated report cards and fee management to attendance tracking and parent
              engagement portals — all at an affordable price.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up delay-300">
              <BrandButton to="/contact">
                Request Free Demo <ArrowRight className="ml-2 h-4 w-4" />
              </BrandButton>
              <BrandButton to="/contact/book-consultation" variant="outline">Schedule Consultation</BrandButton>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8 animate-fade-up delay-500">
              {stats.slice(0, 3).map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl font-semibold text-foreground">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-scale-in delay-200 lg:order-1">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-soft blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant animate-float">
              <img src={hero} alt="Smart Campuses platform dashboards" className="h-auto w-full" width={1280} height={1024} />
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
            <div className="absolute -top-4 -right-4 hidden rounded-2xl border border-border bg-card p-3 shadow-card md:block animate-float delay-300">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span className="font-semibold">99.98% uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust marquee */}
        <div className="relative border-t border-border/70 bg-background/40 py-6 backdrop-blur">
          <div className="overflow-hidden">
            <div className="flex w-max gap-16 px-6 animate-marquee">
              {[...trustLogos, ...trustLogos].map((n, i) => (
                <span key={i} className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                  {n}
                </span>
              ))}
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
              One platform. <span className="text-gradient-brand">Every device.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Smart Campus automates administration while strengthening real-time communication
              between administrators, faculty, students and parents. Our cloud-based Academic
              Management Software solves your biggest operational challenges through intelligent
              automation and seamless integrations.
            </p>
          </div>
          <Link to="/features" className="story-link hidden text-sm font-semibold text-brand md:inline-flex">
            Explore all 50+ modules →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div key={b.title} className="animate-fade-up hover-lift" style={{ animationDelay: `${i * 80}ms` }}>
              <FeatureCard {...b} />
            </div>
          ))}
        </div>
      </section>

      {/* For Faculty — image split */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-soft blur-xl" />
            <img
              src={teacher}
              alt="Faculty using Smart Campus in classroom"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute bottom-4 right-4 rounded-2xl border border-border bg-card/95 p-4 shadow-card backdrop-blur">
              <div className="flex items-center gap-2 text-sm">
                <Sparkles className="h-4 w-4 text-brand" />
                <span className="font-semibold">Two-tap attendance</span>
              </div>
            </div>
          </div>
          <div>
            <SectionEyebrow>For faculty & administrators</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Less admin work. <span className="text-gradient-brand">More focus on students.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Smart Campus frees educators to focus on student success rather than paperwork.
              Mark attendance in seconds, distribute assignments instantly, grade with smart
              rubrics, and keep parents informed — all from one intuitive interface.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Mobile-first faculty app with offline mode",
                "Smart gradebook with automated report cards",
                "Instant parent communication with real-time updates",
                "Lesson plan library shared across departments",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <BrandButton to="/features/teacher-portal">Explore Faculty Portal</BrandButton>
            </div>
          </div>
        </div>
      </section>

      {/* Core features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionEyebrow>50+ Feature-rich modules</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything your institution needs.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From automated report cards and fee management to attendance tracking and parent
            engagement portals — built for K-12, higher education and training institutes across Finland.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f, i) => (
            <div key={f.title} className="animate-fade-up hover-lift" style={{ animationDelay: `${i * 50}ms` }}>
              <FeatureCard {...f} />
            </div>
          ))}
        </div>
      </section>

      {/* For Students & Families — split */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-soft" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="lg:order-2 relative">
            <img
              src={students}
              alt="Students and families connected through Smart Campus"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -top-4 -left-4 rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="text-3xl font-display font-semibold text-brand">1.2M</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Active learners</div>
            </div>
          </div>
          <div>
            <SectionEyebrow>For students & families</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Connected learning <span className="text-gradient-brand">in real time.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our cloud-based LMS bridges the gap between faculty, students and families through
              integrated communication tools and dedicated student & parent portals. Everyone stays
              informed, connected and engaged — from any device, online or offline.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Live classes", "with recordings"],
                ["Assignments", "auto-distributed"],
                ["Quizzes", "instant feedback"],
                ["Certificates", "verifiable"],
              ].map(([t, s]) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="font-semibold">{t}</div>
                  <div className="text-xs text-muted-foreground">{s}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <BrandButton to="/products/lms" variant="outline">Explore the LMS</BrandButton>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionEyebrow>Solutions</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Built for every institution in Finland.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choosing the right School Management System in Finland or University Management System
            in Finland can transform how your institution operates. From a single neighborhood
            school to multi-campus universities, Smart Campus adapts to your structure, scale
            and pedagogy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsCards.map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover-lift hover:border-brand/40 animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-soft opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Campus banner with stats overlay */}
      <section className="relative overflow-hidden">
        <img
          src={campus}
          alt="Modern university campus"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand)]/85 via-[color:var(--brand-2)]/75 to-[color:var(--ink)]/85" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-primary-foreground">
          <div className="max-w-2xl">
            <SectionEyebrow>By the numbers</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Trusted across schools, colleges and universities.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([k, v], i) => (
              <div key={v} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="font-display text-5xl font-semibold md:text-6xl">{k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/80">{v}</div>
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
          <Link to="/testimonials" className="story-link hidden text-sm font-semibold text-brand md:inline-flex">
            Read all testimonials →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((q, i) => (
            <figure key={q.name} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card hover-lift animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <Quote className="h-8 w-8 text-brand/40" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed">"{q.quote}"</blockquote>
              <div className="mt-6 flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
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
            <Link to="/blog" className="story-link hidden text-sm font-semibold text-brand md:inline-flex">
              Visit the blog →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestPosts.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}` as never}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 hover-lift hover:border-brand/40 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
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
