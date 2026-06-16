import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Cloud, ShieldCheck, Users, Layers,
  GraduationCap, ClipboardList, CalendarCheck, Wallet,
  BookOpen, Laptop, Bell, UserCog, Briefcase, BarChart3,
} from "lucide-react";
import { BrandButton, FeatureCard, SectionEyebrow } from "@/components/ui-bits";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Campuses — Cloud ERP & LMS for Modern Institutions" },
      { name: "description", content: "Transform your school, college or university with a unified ERP and LMS for admissions, attendance, fees, exams, communication and learning." },
      { property: "og:title", content: "Smart Campuses — Cloud ERP & LMS" },
      { property: "og:description", content: "One platform for admissions, academics, attendance, fees, exams and learning." },
    ],
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
              <BrandButton to="/contact" variant="outline">Schedule Consultation</BrandButton>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                ["500+", "Institutions"],
                ["1.2M", "Students served"],
                ["99.98%", "Uptime"],
              ].map(([k, v]) => (
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 text-primary-foreground md:p-16">
          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                See Smart Campuses in your institution.
              </h2>
              <p className="mt-4 max-w-xl text-base text-primary-foreground/85">
                Book a personalized demo with our specialists and discover how teams ship
                better academic outcomes in weeks, not semesters.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" className="inline-flex items-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-card hover:bg-cream">
                Request Free Demo
              </Link>
              <Link to="/pricing" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </>
  );
}
