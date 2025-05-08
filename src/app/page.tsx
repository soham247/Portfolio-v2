import Achievements from "@/components/home/Achievements";
import Hero from "@/components/home/Hero";
import TopProjects from "@/components/home/TopProjects";
import { TopSkillsIconCloud } from "@/components/home/TopSkillsIconCloud";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Suspense fallback={
        <p className="text-center text-foreground">Brushing off the stardust… Fetching my finest creations just for you!</p>
      }>
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bp-6 rounded-lg flex flex-col">
            <h2 className="text-2xl font-paytone_one mb-4 text-primary text-center">Top Skills</h2>
            <div className="flex-grow">
              <TopSkillsIconCloud />
            </div>
          </div>
          <div className="col-span-2 p-6 rounded-lg flex flex-col">
            <h2 className="text-2xl font-paytone_one mb-4 text-primary text-center">Top Projects</h2>
            <TopProjects />
          </div>
        </div>
          <Achievements />
      </section>
      </Suspense>
    </div>
  );
}