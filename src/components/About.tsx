import { FiGitBranch, FiMapPin } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

export function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b bg-background">
      {/* Left Column: Title and Intro (1/3 width) */}
      <div className="py-4 px-5 sm:px-6 md:px-8 border-b md:border-b-0 md:border-r border-border flex flex-col justify-center bg-muted/5">
        <div>
          <h2 className="text-sm font-mono text-primary mb-1.5">01.5 Overview</h2>
          <h3 className="text-4xl font-bold mb-3 tracking-tight">Profile</h3>
          <p className="text-sm text-foreground/75 leading-relaxed">
            A snapshot of my current software engineering internship, hackathon results, and contributions to the developer community.
          </p>
        </div>
      </div>

      {/* Middle Column: SDE Internship (1/3 width) */}
      <div className="py-4 px-5 sm:px-6 md:px-8 border-b md:border-b-0 md:border-r border-border flex flex-col justify-center group cursor-default">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2 block">
          Currently Working
        </span>
        <h4 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
          SDE Intern
        </h4>
        <div className="flex items-baseline gap-2.5 mt-2">
          <span className="text-xl font-medium text-foreground/80">Quantum Heaps</span>
          <span className="text-border text-2xl">|</span>
          <span className="text-sm font-mono text-primary/80">June — Present</span>
        </div>
      </div>

      {/* Right Column: Achievements & Open Source (1/3 width, split vertically into 3 rows) */}
      <div className="grid grid-rows-3">
        {/* Top: Based in */}
        <div className="py-4 px-5 sm:px-6 md:px-8 border-b border-border flex flex-col justify-center group cursor-default bg-background">
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2 block">
            Based in
          </span>
          <div className="flex items-center gap-3 group/item">
            <FiMapPin className="size-5 text-primary shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
            <h4 className="text-base font-semibold tracking-tight text-foreground/90 group-hover/item:text-primary transition-colors duration-200">
              West Bengal, <span className="text-xl font-bold">INDIA</span>
            </h4>
          </div>
        </div>

        {/* Bottom: Achievements */}
        <div className="py-4 px-5 sm:px-6 md:px-8 row-span-2 flex flex-col justify-center group cursor-default bg-background">
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2 block">
            Achievements
          </span>
          <div className="space-y-3">
            <div className="flex items-center gap-3 group/item">
              <FaTrophy className="size-5 text-primary shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
              <h4 className="text-base font-semibold tracking-tight text-foreground/90 group-hover/item:text-primary transition-colors duration-200">
                Winner of Hackwars 2025
              </h4>
            </div>
            <div className="flex items-center gap-3 group/item">
              <FiGitBranch className="size-5 text-primary shrink-0 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12" />
              <h4 className="text-base font-semibold tracking-tight text-foreground/90 group-hover/item:text-primary transition-colors duration-200">
                Open Source Contributor
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

