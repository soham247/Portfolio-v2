import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="grid md:grid-cols-3 border-b scroll-mt-16">
      <div className="col-span-2 px-12 py-24 flex flex-col justify-center">
        <h1 className="text-2xl font-mono text-primary mb-4">01. Hello, I'm</h1>
        <h2 className="text-7xl font-bold mb-4 tracking-tight">Soham Sadhukhan</h2>
        <h3 className="text-4xl font-semibold text-foreground/75 mb-6">Full Stack Developer</h3>
        <p className="text-foreground/70 max-w-xl text-base mb-8 leading-relaxed">
          I develop visually stunning and highly functional products that elevate brands and create seamless digital experiences. Specializing in Next.js, React, Node.js, and modern CSS/Tailwind design systems.
        </p>
        <div>
          <Button size="lg" className="font-semibold uppercase tracking-wider text-xs">See Projects</Button>
        </div>
      </div>
      <div className="p-12 border-l hidden md:flex items-center justify-center">
        <div className="relative group">
          <Image
            src="/picture.jpg"
            alt="Profile Picture"
            width={300}
            height={400}
            className="relative object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
