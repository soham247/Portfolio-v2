import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";
import { LoadingFallback } from "@/components/ui/LoadingFallback";

const About = dynamic(() => import("@/components/About").then((mod) => mod.About), {
  loading: () => <LoadingFallback moduleName="about" />,
});

const Skills = dynamic(() => import("@/components/Skills").then((mod) => mod.Skills), {
  loading: () => <LoadingFallback moduleName="skills" />,
});

const Projects = dynamic(() => import("@/components/Projects").then((mod) => mod.Projects), {
  loading: () => <LoadingFallback moduleName="projects" />,
});

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <div className="grid grid-cols-1 md:grid-cols-3 border-b bg-muted/5">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}



