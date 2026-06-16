import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Smart Campuses" className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-medium bg-accent text-accent-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:opacity-95"
          >
            Request Demo
          </Link>
        </div>
        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Smart Campuses" className="h-10 w-auto rounded-md bg-white/95 p-1" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70">
            Cloud-based ERP & LMS purpose-built for modern educational institutions.
          </p>
          <div className="mt-6 space-y-2 text-sm text-secondary-foreground/80">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 221B Knowledge Park, New Delhi</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@smartcampuses.app</div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground/60">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary-foreground/90 hover:underline">About Us</Link></li>
            <li><Link to="/features" className="hover:underline">Features</Link></li>
            <li><Link to="/solutions" className="hover:underline">Solutions</Link></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground/60">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Support Center</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground/60">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Copyright</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-secondary-foreground/60">
          © 2026 Smart Campuses. All Rights Reserved.
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
