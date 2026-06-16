## Scope

Expand the existing Smart Campuses site into the full multi-page structure you outlined. This is a large build (~80+ route files). I'll keep the existing brand system (magenta/royal blue, Fraunces/Inter) and reuse `SiteLayout`, `PageHero`, `BrandButton`, `FeatureCard`.

## Approach

**1. Shared infrastructure (small edits)**
- Extend `SiteLayout` navigation: dropdowns for Products, Solutions, Features, Resources, Support, Company, Legal.
- Expand footer with the 6 quick-link columns you listed.
- Add a reusable `SubPageTemplate` component (hero + sections + CTA) so each leaf page stays consistent without hand-writing 80 layouts.
- Add a `ContentSection` + `BulletList` + `RelatedLinks` helper in `ui-bits.tsx`.

**2. Routes to create (file → URL)**

Company
- `about.tsx` (update — add Leadership, Why Choose Us anchors)
- `leadership.tsx` → /leadership
- `careers.tsx` → /careers
- `careers.apply.tsx` → /careers/apply

Products — ERP (hub + 9 modules)
- `products.erp.tsx`, plus: `student-information`, `admissions`, `attendance`, `fees`, `examinations`, `hr-payroll`, `library`, `transport`, `hostel`

Products — LMS (hub + 7 modules)
- `products.lms.tsx`, plus: `online-classes`, `assignments`, `quizzes`, `video-learning`, `progress-tracking`, `course-management`, `certificates`

Solutions (5 pages — extend existing `solutions.tsx` as hub)
- `solutions.schools`, `solutions.colleges`, `solutions.universities`, `solutions.training-institutes`, `solutions.multi-campus`

Features (4 hubs + 15 leaf pages)
- `features.student-management` (+ profiles, academic-records, documents, parent-info)
- `features.parent-portal` (+ attendance, results, fee-payments, communication)
- `features.teacher-portal` (+ class-management, attendance, assignments, reports)
- `features.analytics` (+ reports, kpis, insights)

Pricing (extend hub + 3 plan pages)
- `pricing.starter`, `pricing.professional`, `pricing.enterprise`

Resources — Blog
- `blog.tsx` (index), 6 category pages, 3 sample post pages

Case Studies
- `case-studies.tsx`, 3 individual case pages

Testimonials (extend existing + category pages)
- `testimonials.schools`, `testimonials.colleges`, `testimonials.universities`

Knowledge Base
- `knowledge-base.tsx`, plus getting-started, user-guides, faqs, video-tutorials, documentation

Support
- `support.tsx`, plus help-center, submit-ticket, contact-support, system-status, remote-assistance

Contact (extend existing + actions)
- `contact.schedule-demo`, `contact.book-consultation`, `contact.request-pricing`

Legal
- `legal/privacy`, `terms`, `cookie-policy`, `refund-policy`, `data-security`

**3. Content strategy**
- Each page gets unique `head()` title/description (no copy-paste meta).
- Leaf pages: ~3–5 short sections of original marketing copy + CTA. Not lorem ipsum — real, plausible copy for the EdTech/ERP space.
- Blog posts: realistic ~600-word articles with author/date.
- Forms (careers application, demo, consultation, pricing, submit ticket): client-side only, success toast — no backend wiring unless you ask.

**4. Home page**
- Add Statistics, Testimonials snippet, Latest Blogs, final CTA sections (Hero + Features + Solutions already exist).

## Out of scope (ask if you want these)
- Backend (Lovable Cloud): forms are UI-only.
- Real blog CMS — posts are hardcoded sample articles.
- Auth / actual user portals (parent/student/teacher login).
- Live chat / status page data feed.
- Image generation for each page (would use existing hero + abstract gradients).

## Build order
1. Update SiteLayout nav + footer, add helper components.
2. Generate all route files in parallel batches (grouped by section).
3. Update home page with the new sections.
4. Verify build, spot-check a few routes in the preview.

This will be ~80 new files. Confirm and I'll execute — or tell me to trim (e.g. skip individual blog posts, skip per-feature leaf pages, skip Legal sub-pages).
