import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.asset.json";

type NavLink = { to: string; label: string };
type NavItem = { label: string; to?: string; children?: NavLink[] };

const nav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { to: "/about", label: "Company Overview" },
      { to: "/leadership", label: "Leadership Team" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    label: "Products",
    children: [
      { to: "/products/erp", label: "Education ERP" },
      { to: "/products/lms", label: "Learning Management" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { to: "/solutions", label: "All Solutions" },
      { to: "/solutions/schools", label: "For Schools" },
      { to: "/solutions/colleges", label: "For Colleges" },
      { to: "/solutions/universities", label: "For Universities" },
      { to: "/solutions/training-institutes", label: "Training Institutes" },
      { to: "/solutions/multi-campus", label: "Multi-Campus" },
    ],
  },
  {
    label: "Features",
    children: [
      { to: "/features", label: "All Features" },
      { to: "/features/student-management", label: "Student Management" },
      { to: "/features/parent-portal", label: "Parent Portal" },
      { to: "/features/teacher-portal", label: "Teacher Portal" },
      { to: "/features/analytics", label: "Analytics Dashboard" },
    ],
  },
  { label: "Pricing", to: "/pricing" },
  {
    label: "Resources",
    children: [
      { to: "/blog", label: "Blog" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/knowledge-base", label: "Knowledge Base" },
    ],
  },
  {
    label: "Support",
    children: [
      { to: "/support", label: "Support Center" },
      { to: "/support/help-center", label: "Help Center" },
      { to: "/support/submit-ticket", label: "Submit Ticket" },
      { to: "/support/system-status", label: "System Status" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 xl:flex">
      {nav.map((n) =>
        n.to ? (
          <Link
            key={n.label}
            to={n.to}
            className="rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition hover:bg-accent hover:text-accent-foreground"
            activeProps={{ className: "rounded-full px-3 py-2 text-sm font-medium bg-accent text-accent-foreground" }}
          >
            {n.label}
          </Link>
        ) : (
          <div key={n.label} className="group relative">
            <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition hover:bg-accent hover:text-accent-foreground">
              {n.label} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-1 pt-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
                {n.children!.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className="block px-5 py-3 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-accent-foreground"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ),
      )}
    </nav>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="border-t border-border bg-background xl:hidden">
      <div className="mx-auto flex max-h-[80vh] max-w-7xl flex-col gap-1 overflow-y-auto px-6 py-4">
        {nav.map((n) =>
          n.to ? (
            <Link
              key={n.label}
              to={n.to}
              onClick={onClose}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
            >
              {n.label}
            </Link>
          ) : (
            <div key={n.label} className="mt-2">
              <div className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {n.label}
              </div>
              {n.children!.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  onClick={onClose}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ),
        )}
        <Link
          to="/contact"
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Request Demo
        </Link>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Smart Campuses" className="h-10 w-auto" />
        </Link>
        <DesktopNav />
        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-95"
          >
            Request Demo
          </Link>
        </div>
        <button className="rounded-md p-2 xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && <MobileNav onClose={() => setOpen(false)} />}
    </header>
  );
}

const footerCols: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/leadership", label: "Leadership" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { to: "/products/erp", label: "Education ERP" },
      { to: "/products/lms", label: "Learning Management" },
      { to: "/features", label: "All Features" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions/schools", label: "Schools" },
      { to: "/solutions/colleges", label: "Colleges" },
      { to: "/solutions/universities", label: "Universities" },
      { to: "/solutions/multi-campus", label: "Multi-Campus" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/knowledge-base", label: "Knowledge Base" },
      { to: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/support/help-center", label: "Help Center" },
      { to: "/knowledge-base/faqs", label: "FAQs" },
      { to: "/support/contact-support", label: "Contact Support" },
      { to: "/support/system-status", label: "System Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/legal/privacy", label: "Privacy Policy" },
      { to: "/legal/terms", label: "Terms & Conditions" },
      { to: "/legal/cookie-policy", label: "Cookie Policy" },
      { to: "/legal/refund-policy", label: "Refund Policy" },
      { to: "/legal/data-security", label: "Data Security" },
    ],
  },
];

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <img src={logo.url} alt="Smart Campus" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70">
              Finland's #1 cloud-based University Management System. 50+ modules, 24/7 support, one platform for every device.
            </p>
            <div className="mt-6 space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Helsinki, Finland</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +358 9 123 4567</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@smartcampus.fi</div>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/60">{col.title}</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-secondary-foreground/85 hover:text-primary-foreground hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-secondary-foreground/60">
          © 2026 Smart Campus. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
