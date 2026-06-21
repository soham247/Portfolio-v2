import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mt-4">
      <div className="mb-12">
        <h2 className="text-sm font-mono text-primary mb-2">04. Journey</h2>
        <h3 className="text-4xl font-bold">Work History</h3>
      </div>

      <div className="space-y-12">
        {experiences.map((entry, idx) => (
          <div
            key={idx}
            className="grid md:grid-cols-3 gap-4 border-l-2 border-primary/30 pl-6 relative"
          >
            {/* Timeline dot */}
            <div
              className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ${
                entry.isCurrent
                  ? "bg-primary animate-pulse"
                  : "bg-primary/40"
              }`}
              aria-hidden="true"
            />

            {/* Date */}
            <div className="col-span-1">
              <span className="text-sm font-mono text-muted-foreground">
                {entry.period}
              </span>
            </div>

            {/* Role details */}
            <div className="col-span-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <h4 className="text-xl font-bold">{entry.title}</h4>
                {entry.type && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {entry.type}
                  </span>
                )}
              </div>
              <h5 className="text-sm text-primary mb-3">{entry.company}</h5>
              {entry.bullets && (
                <ul className="list-disc pl-4 space-y-2 text-sm text-foreground/70">
                  {entry.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
