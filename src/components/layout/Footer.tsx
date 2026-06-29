import { Button } from "@/components/ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="p-4 pb-28 md:pb-4 flex items-center justify-between border-t bg-background mt-auto">
      <Button variant="outline" className="font-semibold rounded-2xl" asChild>
        <a
          href={process.env.RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume (opens in new tab)"
        >
          Resume <FiArrowUpRight aria-hidden="true" />
        </a>
      </Button>

      <nav aria-label="Social links" className="flex flex-wrap justify-center">
        <SocialLinks />
      </nav>
    </footer>
  );
}

