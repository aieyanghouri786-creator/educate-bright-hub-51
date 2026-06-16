import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList, BookOpen, CalendarCheck, GraduationCap, Wallet,
  Briefcase, Library, Bus, MessageSquare, Laptop,
} from "lucide-react";
import { PageHero, FeatureCard } from "@/components/ui-bits";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Smart Campuses ERP & LMS" },
      { name: "description", content: "Complete Education ERP and LMS — admissions, academics, attendance, exams, fees, HR, library, transport, communication and online learning." },
      { property: "og:title", content: "Features — Smart Campuses" },
      { property: "og:description", content: "Ten deeply integrated modules built for modern institutions." },
    ],
  }),
  component: Features,
});

const features = [
  { icon: ClipboardList, title: "Admissions Management", description: "Streamline application processing, enrollment and student onboarding." },
  { icon: BookOpen, title: "Academic Management", description: "Manage classes, subjects, curriculum and academic schedules." },
  { icon: CalendarCheck, title: "Attendance Management", description: "Track attendance with automated reports and notifications." },
  { icon: GraduationCap, title: "Examination System", description: "Create exams, grading structures, result processing and report cards." },
  { icon: Wallet, title: "Fee & Finance Management", description: "Manage invoices, payments, dues and financial reporting." },
  { icon: Briefcase, title: "Human Resource Management", description: "Handle employee records, payroll, performance and leave management." },
  { icon: Library, title: "Library Management", description: "Manage books, circulation, returns and inventory." },
  { icon: Bus, title: "Transport Management", description: "Track routes, vehicles, drivers and transportation records." },
  { icon: MessageSquare, title: "Communication Module", description: "Send notifications, SMS alerts, emails and announcements." },
  { icon: Laptop, title: "Learning Management System", description: "Online learning with assignments, lectures, quizzes and assessments." },
];

function Features() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={<>Complete Education <span className="text-gradient-brand">ERP & LMS</span> solution.</>}
        description="Ten purpose-built modules that work as one. Pick what you need today, add the rest when you're ready — no migrations, no data silos."
      />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </section>
    </>
  );
}
