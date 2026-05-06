import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="grid md:grid-cols-3 border-b">
      <div className="col-span-2 px-8 pt-8">
        <h1 className="text-2xl font-semibold mb-4">I'm Soham Sadhukhan,</h1>
        <h2 className="text-7xl font-bold mb-8">Aspiring Full Stack Developer</h2>
        <p className="text-muted-foreground mb-4">I develop visually stunning and highly functional products that elevate brands and create seamless digital experiences.</p>
        <Button>See Projects</Button>
      </div>
      <div className="p-8 border-l hidden md:block">
        <Image
          src="/picture.jpg"
          alt="Profile Picture"
          width={400}
          height={400}
          className="object-cover shadow-2xl"
        />
      </div>

    </section>
    </>
  );
}
