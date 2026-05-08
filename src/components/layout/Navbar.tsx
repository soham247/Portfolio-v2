import { Button } from "@/components/ui/button";
import { IoIosPin } from "react-icons/io";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 border-b bg-background">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-xl">&gt; soham_</h1>
        <p className="text-sm flex gap-1 items-center"><IoIosPin className="w-5 h-5" /> <span>Based in WB, India</span></p>
      </div>
      <div>
        <Button>Contact Me</Button>
      </div>
    </nav>
  );
}
