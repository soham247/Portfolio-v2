import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 border-b bg-background/80 backdrop-blur-md">
      <Link
        href="/"
        className="font-mono font-bold text-lg hover:text-primary transition-colors"
      >
        &gt; soham_
      </Link>

      <NavLinks />

      <div className="flex items-center gap-4">
        <Button size="sm" className="font-medium" asChild>
          <Link href="mailto:sohamsadhukhan247@gmail.com">Contact Me</Link>
        </Button>
      </div>
    </nav>
  );
}
