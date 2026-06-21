import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

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


