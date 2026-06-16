import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

const top: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/leadership", changefreq: "monthly", priority: "0.6" },
  { path: "/careers", changefreq: "monthly", priority: "0.6" },
  { path: "/careers/apply", changefreq: "monthly", priority: "0.5" },
  { path: "/features", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions", changefreq: "monthly", priority: "0.8" },
  { path: "/pricing", changefreq: "monthly", priority: "0.8" },
  { path: "/testimonials", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.6" },
  { path: "/knowledge-base", changefreq: "monthly", priority: "0.6" },
  { path: "/support", changefreq: "monthly", priority: "0.6" },
];

const sub: string[] = [
  "/products/erp", "/products/erp/student-information", "/products/erp/admissions", "/products/erp/attendance",
  "/products/erp/fees", "/products/erp/examinations", "/products/erp/hr-payroll", "/products/erp/library",
  "/products/erp/transport", "/products/erp/hostel",
  "/products/lms", "/products/lms/online-classes", "/products/lms/assignments", "/products/lms/quizzes",
  "/products/lms/video-learning", "/products/lms/progress-tracking", "/products/lms/course-management",
  "/products/lms/certificates",
  "/solutions/schools", "/solutions/colleges", "/solutions/universities",
  "/solutions/training-institutes", "/solutions/multi-campus",
  "/features/student-management", "/features/student-management/profiles",
  "/features/student-management/academic-records", "/features/student-management/documents",
  "/features/student-management/parent-info",
  "/features/parent-portal", "/features/parent-portal/attendance", "/features/parent-portal/results",
  "/features/parent-portal/fee-payments", "/features/parent-portal/communication",
  "/features/teacher-portal", "/features/teacher-portal/class-management",
  "/features/teacher-portal/attendance", "/features/teacher-portal/assignments",
  "/features/teacher-portal/reports",
  "/features/analytics", "/features/analytics/reports", "/features/analytics/kpis", "/features/analytics/insights",
  "/pricing/starter", "/pricing/professional", "/pricing/enterprise",
  "/blog/education-technology", "/blog/erp-solutions", "/blog/lms-trends", "/blog/school-management",
  "/blog/higher-education", "/blog/digital-transformation",
  "/blog/how-erp-improves-school-management", "/blog/choosing-an-lms-for-your-college",
  "/blog/digital-transformation-in-higher-education",
  "/case-studies/school-success-story", "/case-studies/university-transformation",
  "/case-studies/multi-campus-deployment",
  "/testimonials/schools", "/testimonials/colleges", "/testimonials/universities",
  "/knowledge-base/getting-started", "/knowledge-base/user-guides", "/knowledge-base/faqs",
  "/knowledge-base/video-tutorials", "/knowledge-base/documentation",
  "/support/help-center", "/support/submit-ticket", "/support/contact-support",
  "/support/system-status", "/support/remote-assistance",
  "/contact/schedule-demo", "/contact/book-consultation", "/contact/request-pricing",
  "/legal/privacy", "/legal/terms", "/legal/cookie-policy", "/legal/refund-policy", "/legal/data-security",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...top,
          ...sub.map((path) => ({ path, changefreq: "monthly" as const, priority: "0.5" })),
        ];
        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
