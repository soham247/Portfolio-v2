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
  SiGithubactions
} from "react-icons/si";
import {
  TbBrain,
  TbApi,
  TbDatabaseSearch,
  TbCpu,
  TbNetwork,
  TbTrees
} from "react-icons/tb";
import { FiCloud, FiActivity } from "react-icons/fi";
import BackButton from "@/components/ui/BackButton";
import { Metadata } from "next";
import { FaCss3Alt } from "react-icons/fa";

interface Skill {
  name: string;
  Icon: React.ComponentType;
  colorClass: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical Skills & Tools of Soham Sadhukhan",
};

export default function SkillsPage() {
  const categories: SkillCategory[] = [
    {
      name: "Languages",
      description: "Core languages used for scripting, systems programming, and web documents.",
      skills: [
        { name: "JavaScript", Icon: SiJavascript, colorClass: "group-hover:text-yellow-500" },
        { name: "TypeScript", Icon: SiTypescript, colorClass: "group-hover:text-blue-500" },
        { name: "Python", Icon: SiPython, colorClass: "group-hover:text-amber-500" },
        { name: "HTML", Icon: SiHtml5, colorClass: "group-hover:text-orange-500" },
        { name: "CSS", Icon: FaCss3Alt, colorClass: "group-hover:text-indigo-400" }
      ]
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
        { name: "REST APIs", Icon: TbApi, colorClass: "group-hover:text-purple-400" }
      ]
    },
    {
      name: "Databases & ORMs",
      description: "Data storage, relational/document systems, and vector databases for AI systems.",
      skills: [
        { name: "MongoDB", Icon: SiMongodb, colorClass: "group-hover:text-green-500" },
        { name: "PostgreSQL", Icon: SiPostgresql, colorClass: "group-hover:text-blue-400" },
        { name: "Supabase", Icon: SiSupabase, colorClass: "group-hover:text-emerald-400" },
        { name: "Prisma", Icon: SiPrisma, colorClass: "group-hover:text-indigo-500" },
        { name: "Pinecone", Icon: TbTrees, colorClass: "group-hover:text-green-400" }
      ]
    },
    {
      name: "AI & LLM Tools",
      description: "Core AI integration resources, neural models, retrieval architectures, and prompting.",
      skills: [
        { name: "OpenAI API", Icon: SiOpenai, colorClass: "group-hover:text-emerald-400" },
        { name: "Prompt Eng.", Icon: TbBrain, colorClass: "group-hover:text-purple-400" },
        { name: "LLMs", Icon: TbCpu, colorClass: "group-hover:text-cyan-400" },
        { name: "RAG", Icon: TbDatabaseSearch, colorClass: "group-hover:text-amber-400" },
        { name: "AI Integration", Icon: FiActivity, colorClass: "group-hover:text-rose-400" }
      ]
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
        { name: "Render", Icon: FiCloud, colorClass: "group-hover:text-blue-400" }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen px-12 py-16 flex flex-col gap-12">
      {/* Top Header / Navigation Bar */}
      <div className="flex flex-col gap-4">
        <BackButton />

        <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-8 gap-4">
          <div>
            <h1 className="text-sm font-mono text-primary mb-2">03. Stack & Tools</h1>
            <h2 className="text-4xl font-bold tracking-tight">Technical Stack Portal</h2>
          </div>
          <p className="text-sm font-mono max-w-md">
            An inventory of technologies, platforms, and methodologies I leverage to design, engineer, and deploy high-performance applications.
          </p>
        </div>
      </div>

      {/* Main Categories Section */}
      <div className="flex flex-col gap-16">
        {categories.map((category, catIdx) => (
          <div key={category.name} className="flex flex-col lg:grid lg:grid-cols-4 gap-8 border-b pb-12 last:border-0 last:pb-0">
            {/* Category Intro */}
            <div className="lg:col-span-1 flex flex-col gap-3">
              <span className="text-xs font-mono text-primary">03.{catIdx + 1}</span>
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-xs text-foreground font-mono leading-relaxed">
                {category.description}
              </p>
              <div className="mt-2">
                <span className="text-[10px] font-mono bg-muted/60 px-2 py-1 text-foreground border border-border/60">
                  {category.skills.length} Items
                </span>
              </div>
            </div>

            {/* Skills grid */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill) => {
                const SkillIcon = skill.Icon;
                return (
                  <div
                    key={skill.name}
                    className="group aspect-square flex flex-col items-center justify-center gap-4 p-4 border border-border bg-card/25 transition-all duration-300 hover:border-foreground/40 hover:bg-muted/15"
                  >
                    <div className={`text-5xl text-foreground transition-all duration-300 group-hover:scale-110 ${skill.colorClass}`}>
                      <SkillIcon />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-center text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
