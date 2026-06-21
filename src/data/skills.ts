import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiOpenai,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiGithubactions,
} from "react-icons/si";
import {
  TbBrain,
  TbApi,
  TbDatabaseSearch,
  TbCpu,
  TbNetwork,
  TbTrees,
} from "react-icons/tb";
import { FiCloud, FiActivity } from "react-icons/fi";
import { FaCss3Alt } from "react-icons/fa";
import type { ComponentType } from "react";

export interface Skill {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: ComponentType<any>;
  colorClass: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

/** Condensed teaser shown on the homepage Skills section */
export const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", Icon: SiTypescript, colorClass: "group-hover/skill:text-blue-500" },
      { name: "JavaScript", Icon: SiJavascript, colorClass: "group-hover/skill:text-yellow-500" },
      { name: "Python", Icon: SiPython, colorClass: "group-hover/skill:text-amber-500" },
    ],
  },
  {
    category: "Frameworks & Libs",
    skills: [
      { name: "React.js", Icon: SiReact, colorClass: "group-hover/skill:text-cyan-400" },
      { name: "Next.js", Icon: SiNextdotjs, colorClass: "group-hover/skill:text-foreground" },
      { name: "Node.js", Icon: SiNodedotjs, colorClass: "group-hover/skill:text-emerald-500" },
    ],
  },
  {
    category: "Databases & AI",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, colorClass: "group-hover/skill:text-blue-400" },
      { name: "Supabase", Icon: SiSupabase, colorClass: "group-hover/skill:text-emerald-400" },
      { name: "Gemini / LLMs", Icon: TbBrain, colorClass: "group-hover/skill:text-indigo-400" },
      { name: "OpenAI API", Icon: SiOpenai, colorClass: "group-hover/skill:text-emerald-400" },
    ],
  },
];

/** Full skill categories shown on the /skills portal page */
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    description: "Core languages used for scripting, systems programming, and web documents.",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, colorClass: "group-hover:text-yellow-500" },
      { name: "TypeScript", Icon: SiTypescript, colorClass: "group-hover:text-blue-500" },
      { name: "Python", Icon: SiPython, colorClass: "group-hover:text-amber-500" },
      { name: "HTML", Icon: SiHtml5, colorClass: "group-hover:text-orange-500" },
      { name: "CSS", Icon: FaCss3Alt, colorClass: "group-hover:text-indigo-400" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    description: "Libraries and web frameworks for building backend APIs and client-side interfaces.",
    skills: [
      { name: "React.js", Icon: SiReact, colorClass: "group-hover:text-cyan-400" },
      { name: "Next.js", Icon: SiNextdotjs, colorClass: "group-hover:text-foreground" },
      { name: "Node.js", Icon: SiNodedotjs, colorClass: "group-hover:text-emerald-500" },
      { name: "Express.js", Icon: SiExpress, colorClass: "group-hover:text-gray-400" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "group-hover:text-cyan-500" },
      { name: "FastAPI", Icon: SiFastapi, colorClass: "group-hover:text-teal-400" },
      { name: "LangChain", Icon: TbBrain, colorClass: "group-hover:text-indigo-400" },
      { name: "LangGraph", Icon: TbNetwork, colorClass: "group-hover:text-pink-400" },
      { name: "REST APIs", Icon: TbApi, colorClass: "group-hover:text-purple-400" },
    ],
  },
  {
    name: "Databases & ORMs",
    description: "Data storage, relational/document systems, and vector databases for AI systems.",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, colorClass: "group-hover:text-green-500" },
      { name: "PostgreSQL", Icon: SiPostgresql, colorClass: "group-hover:text-blue-400" },
      { name: "Supabase", Icon: SiSupabase, colorClass: "group-hover:text-emerald-400" },
      { name: "Prisma", Icon: SiPrisma, colorClass: "group-hover:text-indigo-500" },
      { name: "Pinecone", Icon: TbTrees, colorClass: "group-hover:text-green-400" },
    ],
  },
  {
    name: "AI & LLM Tools",
    description: "Core AI integration resources, neural models, retrieval architectures, and prompting.",
    skills: [
      { name: "OpenAI API", Icon: SiOpenai, colorClass: "group-hover:text-emerald-400" },
      { name: "Prompt Eng.", Icon: TbBrain, colorClass: "group-hover:text-purple-400" },
      { name: "LLMs", Icon: TbCpu, colorClass: "group-hover:text-cyan-400" },
      { name: "RAG", Icon: TbDatabaseSearch, colorClass: "group-hover:text-amber-400" },
      { name: "AI Integration", Icon: FiActivity, colorClass: "group-hover:text-rose-400" },
    ],
  },
  {
    name: "Developer Tools",
    description: "Development environments, deployment pipelines, containerization, and toolkits.",
    skills: [
      { name: "Git", Icon: SiGit, colorClass: "group-hover:text-red-500" },
      { name: "GitHub", Icon: SiGithub, colorClass: "group-hover:text-neutral-400" },
      { name: "Docker", Icon: SiDocker, colorClass: "group-hover:text-sky-400" },
      { name: "Postman", Icon: SiPostman, colorClass: "group-hover:text-orange-500" },
      { name: "CI/CD", Icon: SiGithubactions, colorClass: "group-hover:text-blue-500" },
      { name: "Vercel", Icon: SiVercel, colorClass: "group-hover:text-foreground" },
      { name: "Render", Icon: FiCloud, colorClass: "group-hover:text-blue-400" },
    ],
  },
];
