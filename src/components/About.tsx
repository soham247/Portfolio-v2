import { Briefcase, Trophy, GitBranch } from "lucide-react";

export function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-3 border-b scroll-mt-16 bg-background">
      {/* Left Column: Title and Intro (1/3 width) */}
      <div className="p-12 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between bg-muted/5">
        <div>
          <h2 className="text-sm font-mono text-primary mb-2">01.5 Overview</h2>
          <h3 className="text-4xl font-bold mb-4 tracking-tight">Profile</h3>
          <p className="text-sm text-foreground/75 leading-relaxed">
            A snapshot of my current software engineering internship, hackathon results, and contributions to the developer community.
          </p>
        </div>
      </div>

      {/* Middle Column: SDE Internship (1/3 width) */}
      <div className="p-12 border-b md:border-b-0 md:border-r border-border flex flex-col justify-center group cursor-default">
        <div className="flex items-center gap-3">
          <Briefcase className="size-6 text-primary shrink-0" />
          <h4 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
            SDE Intern
          </h4>
        </div>
        <p className="text-lg font-medium text-foreground/80 mt-1">
          Quantum Heaps
        </p>
        <p className="text-sm font-mono text-muted-foreground mt-2">
          June — Present
        </p>
      </div>

      {/* Right Column: Achievements & Open Source (1/3 width, split vertically) */}
      <div className="grid grid-rows-2">
        {/* Top: Winner of Hackwars */}
        <div className="p-12 border-b border-border flex flex-col justify-center group cursor-default">
          <div className="flex items-center gap-3">
            <Trophy className="size-5 text-primary shrink-0" />
            <h4 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
              Winner of Hackwars 2025
            </h4>
          </div>
        </div>

        {/* Bottom: Open Source */}
        <div className="p-12 flex flex-col justify-center group cursor-default">
          <div className="flex items-center gap-3">
            <GitBranch className="size-5 text-primary shrink-0" />
            <h4 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
              Open Source Contributor
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
