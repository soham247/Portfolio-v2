import Achievements from "@/components/home/Achievements";
import Hero from "@/components/home/Hero";
import WorkExperience from "@/components/home/WorkExperience";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      
      <Suspense fallback={
        <p className="text-center text-foreground">Launching into orbit… Loading work experience data!</p>
      }>
        <section className="my-16">
          <WorkExperience />
        </section>
      </Suspense>
      
      <Suspense fallback={
        <p className="text-center text-foreground">Brushing off the stardust… Fetching my finest creations just for you!</p>
      }>
        <section className="my-16">
          <Achievements />
        </section>
      </Suspense>
    </div>
  );
}