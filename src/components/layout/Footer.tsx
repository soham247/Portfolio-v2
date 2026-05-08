import { Button } from "@/components/ui/button";
import { SiLeetcode, SiX } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function Footer() {
  return (
    <footer className="p-4 flex items-center justify-between border-t bg-background mt-auto">
      <Button variant="outline" className="font-semibold rounded-2xl">
        Download CV
      </Button>
      <div className="flex flex-wrap justify-center">
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.linkedin.com/in/sohamsadhukhan2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container p-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant active:scale-95 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://x.com/geekSoham"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container p-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant active:scale-95 flex items-center justify-center"
              aria-label="X (Twitter)"
            >
              <SiX className="w-4 h-4" />
            </a>
          </TooltipTrigger>
          <TooltipContent>X (Twitter)</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://github.com/soham247"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container p-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant active:scale-95 flex items-center justify-center"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </TooltipTrigger>
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://leetcode.com/u/soham_247/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container p-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant active:scale-95 flex items-center justify-center"
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
          </TooltipTrigger>
          <TooltipContent>LeetCode</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="mailto:sohamsadhukhan247@gmail.com"
              className="bg-surface-container p-3 rounded-xl hover:bg-surface-container-high transition-all text-on-surface-variant active:scale-95 flex items-center justify-center"
              aria-label="Email"
            >
              <MdEmail className="w-4 h-4" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Email</TooltipContent>
        </Tooltip>
      </div>
    </footer>
  );
}
