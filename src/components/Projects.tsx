import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <div
      id="projects"
      className="col-span-1 md:col-span-2 px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24 border-t md:border-t-0 md:border-l border-border flex flex-col justify-between scroll-mt-16 bg-background"
    >
      <div>
        <div className="mb-12">
          <h2 className="text-sm font-mono text-primary mb-2">02. Selected Work</h2>
          <h3 className="text-4xl font-bold">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border bg-background group hover:border-foreground/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Image container (16:9 ratio) */}
                  <div className="relative w-full aspect-video overflow-hidden bg-muted border-b border-border">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted/65 text-muted-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-text-secondary mb-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="px-5 pb-5 pt-0 mt-auto">
                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      variant="default"
                      className="flex-1 font-semibold text-[11px] h-8 rounded-none"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <FaExternalLinkAlt className="size-2.5" aria-hidden="true" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 font-semibold text-[11px] h-8 rounded-none"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FaGithub className="size-3" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
