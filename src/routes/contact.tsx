import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Clock } from "lucide-react";
import { PageHero } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Smart Campus | Finland's #1 Education Management System" },
      { name: "description", content: "Get a personalized demo of Smart Campus. 24/7 dedicated support trusted by schools, colleges and universities across Finland." },
      { property: "og:title", content: "Contact Smart Campus" },
      { property: "og:description", content: "Let's transform education together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's transform <span className="text-gradient-brand">education together.</span></>}
        description="Have questions or want a personalized demo? Our Finland-based team offers 24/7 dedicated support and is ready to help you find the perfect UMS & LMS solution for your institution."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-xl font-semibold">Contact information</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-brand" /><span>Helsinki, Finland</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 text-brand" /><span>+358 9 123 4567</span></li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-brand" /><span>hello@smartcampus.fi</span></li>
              <li className="flex gap-3"><Globe className="h-5 w-5 text-brand" /><span>www.smartcampus.fi</span></li>
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-elegant">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <h3 className="text-xl font-semibold">24/7 Dedicated Support</h3>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Walk through Smart Campus live with an expert and get a tailored quote within 24 hours.
              Trusted by schools, colleges and universities across Helsinki and all of Finland.
            </p>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-8 shadow-card"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-brand" />
              <h3 className="mt-4 text-2xl font-semibold">Request received</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Thanks — our team will reach out within one business day to schedule your demo.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">Request a free demo</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tell us a bit about your institution.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Institution name" name="institution" required />
                <Field label="Email address" name="email" type="email" required />
                <Field label="Phone number" name="phone" type="tel" />
                <Field label="Number of students" name="students" type="number" />
                <Field label="Role" name="role" placeholder="Principal, IT Head…" />
              </div>
              <label className="mt-4 block">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Tell us what you'd like to see…"
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-95"
              >
                Request Free Demo <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}{required && <span className="text-brand"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
