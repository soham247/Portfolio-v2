import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiLeetcode, SiX } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { FiArrowUpRight } from "react-icons/fi";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sohamsadhukhan2004/",
    Icon: FaLinkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/geekSoham",
    Icon: SiX,
  },
  {
    label: "GitHub",
    href: "https://github.com/soham247",
    Icon: FaGithub,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/soham_247/",
    Icon: SiLeetcode,
  },
  {
    label: "Email",
    href: "mailto:sohamsadhukhan247@gmail.com",
    Icon: MdEmail,
    isEmail: true,
  },
];

export function Footer() {
  return (
    <footer className="p-4 flex items-center justify-between border-t bg-background mt-auto">
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
        {socialLinks.map(({ label, href, Icon, isEmail }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="p-3 rounded-xl hover:bg-muted/80 transition-all text-foreground/70 hover:text-foreground active:scale-95 flex items-center justify-center"
                aria-label={label}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </footer>
  );
}
