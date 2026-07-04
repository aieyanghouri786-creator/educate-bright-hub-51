import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FEATURES = [
  { name: "Admissions Management", description: "Streamline application processing, enrollment and student onboarding." },
  { name: "Academic Management", description: "Manage classes, subjects, curriculum and academic schedules." },
  { name: "Attendance Management", description: "Track attendance with automated reports and notifications." },
  { name: "Examination System", description: "Create exams, grading structures, result processing and report cards." },
  { name: "Fee & Finance Management", description: "Manage invoices, payments, dues and financial reporting." },
  { name: "Human Resource Management", description: "Handle employee records, payroll, performance and leave management." },
  { name: "Library Management", description: "Manage books, circulation, returns and inventory." },
  { name: "Transport Management", description: "Track routes, vehicles, drivers and transportation records." },
  { name: "Communication Module", description: "Send notifications, SMS alerts, emails and announcements." },
  { name: "Learning Management System", description: "Online learning with assignments, lectures, quizzes and assessments." },
];

export default defineTool({
  name: "list_features",
  title: "List product features",
  description: "List Smart Campuses ERP & LMS product features, optionally filtered by a keyword.",
  inputSchema: {
    query: z.string().optional().describe("Optional keyword to filter feature name or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const items = q
      ? FEATURES.filter((f) => f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q))
      : FEATURES;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { features: items },
    };
  },
});
