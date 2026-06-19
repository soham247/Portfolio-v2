import Link from "next/link";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiOpenai
} from "react-icons/si";
import { TbBrain } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";

const skillGroups = [
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

export function Skills() {
  return (
    <div id="skills" className="col-span-1 p-12 md:py-24 md:px-12 flex flex-col justify-between scroll-mt-16 bg-background">
      <div className="flex flex-col h-fit">
        <div className="mb-12">
          <h2 className="text-sm font-mono text-primary mb-2">03. Core Skills</h2>
          <h3 className="text-4xl font-bold">Expertise</h3>
        </div>

        <p className="text-xs text-muted-foreground mb-6 font-mono">
          Core technologies and methodologies I specialize in.
        </p>

        <div className="flex flex-col gap-6">
          {/* Categories */}
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{group.category}</span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skill.Icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 border border-border/80 bg-muted/20 text-xs font-mono text-foreground/80 hover:text-foreground hover:border-foreground/50 transition-all duration-200 group/skill cursor-default"
                    >
                      <Icon className={`size-3.5 transition-all duration-200 ${skill.colorClass}`} />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <span>View full skills catalog</span>
            <FiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
