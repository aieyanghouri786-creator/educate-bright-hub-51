import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SOLUTIONS = [
  { name: "Schools", description: "Digitize academic and administrative operations for K-12 institutions." },
  { name: "Colleges", description: "Manage admissions, academics, examinations and student services." },
  { name: "Universities", description: "Comprehensive ERP and LMS for higher education institutions." },
  { name: "Training Institutes", description: "Courses, enrollments, certifications and online learning at scale." },
  { name: "Multi-Campus", description: "Centralized management for multiple branches and campuses." },
];

export default defineTool({
  name: "list_solutions",
  title: "List solutions by institution type",
  description: "List Smart Campuses solutions tailored to different institution types.",
  inputSchema: {
    institutionType: z.string().optional().describe("Optional filter, e.g. 'school', 'university'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ institutionType }) => {
    const q = institutionType?.trim().toLowerCase();
    const items = q ? SOLUTIONS.filter((s) => s.name.toLowerCase().includes(q)) : SOLUTIONS;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { solutions: items },
    };
  },
});
