import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-24 border-b bg-background">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-xl">&gt; soham_</h1>
        <p>Based in WB, India</p>
      </div>
      <div>
        <Button>Contact Me</Button>
      </div>
    </nav>
  );
}
