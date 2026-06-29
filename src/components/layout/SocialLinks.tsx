"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiLeetcode, SiX } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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

export function SocialLinks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {socialLinks.map(({ label, href, Icon, isEmail }) => {
        const linkElement = (
          <Link
            key={label}
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="p-3 rounded-xl hover:bg-muted/80 transition-all text-foreground/70 hover:text-foreground active:scale-95 flex items-center justify-center"
            aria-label={label}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
          </Link>
        );

        if (!mounted) {
          return linkElement;
        }

        return (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              {linkElement}
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        );
      })}
    </>
  );
}
