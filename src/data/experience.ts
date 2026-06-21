export interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  type?: string;
  bullets?: string[];
  isCurrent?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    period: "June 2026 — Present",
    title: "SDE Intern",
    company: "Quantum Heaps",
    type: "Remote",
    isCurrent: true,
    bullets: [
      "Building CRM and Marketing Automation Tools"
    ]
  },
  {
    period: "May 2025 — July 2025",
    title: "Next.js Developer Intern",
    company: "Kraf Technologies",
    type: "Remote",
    bullets: [
      "Led migration of a production EMS platform from Create React App to Next.js, enabling Server-Side Rendering, improving SEO, and reducing page load time by 30%.",
      "Engineered reusable UI components and optimized rendering pipelines using React memoization and lazy loading, achieving a Lighthouse performance score improvement from 72 to 89.",
      "Partnered with backend engineers to refine API contracts and reduce end-to-end latency by 20%.",
      "Refactored legacy modules and introduced a shared component library, reducing duplicate code by 40% and cutting average bug resolution time for frontend issues by 50%.",
    ],
  },
];
