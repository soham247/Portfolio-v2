import BackButton from "@/components/ui/BackButton";
import { skillCategories } from "@/data/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and tools of Soham Sadhukhan — languages, frameworks, databases, AI tools, and developer tooling.",
};

export default function SkillsPage() {
  return (
    <div className="w-full min-h-screen px-12 py-16 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <BackButton />

        <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-8 gap-4">
          <div>
            <p className="text-sm font-mono text-primary mb-2" aria-hidden="true">
              03. Stack &amp; Tools
            </p>
            <h1 className="text-4xl font-bold tracking-tight">Technical Stack Portal</h1>
          </div>
          <p className="text-sm font-mono max-w-md text-foreground/80">
            An inventory of technologies, platforms, and methodologies I leverage
            to design, engineer, and deploy high-performance applications.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-16">
        {skillCategories.map((category, catIdx) => (
          <div
            key={category.name}
            className="flex flex-col lg:grid lg:grid-cols-4 gap-8 border-b pb-12 last:border-0 last:pb-0"
          >
            {/* Category intro */}
            <div className="lg:col-span-1 flex flex-col gap-3">
              <span className="text-xs font-mono text-primary" aria-hidden="true">
                03.{catIdx + 1}
              </span>
              <h2 className="text-xl font-bold">{category.name}</h2>
              <p className="text-xs text-foreground/75 font-mono leading-relaxed">
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
                    <div
                      className={`text-5xl text-foreground transition-all duration-300 group-hover:scale-110 ${skill.colorClass}`}
                      aria-hidden="true"
                    >
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
