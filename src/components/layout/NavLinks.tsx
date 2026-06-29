"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8 h-full">
      {navLinks.map((link, idx) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`flex items-center gap-1.5 pr-2 text-xs font-semibold transition-colors duration-200 relative h-full group ${isActive
                ? "text-foreground font-bold"
                : "text-foreground/65 hover:text-foreground"
              }`}
          >
            <span
              className={`text-[9px] font-mono transition-colors ${isActive
                  ? "text-primary font-bold"
                  : "text-foreground/45 group-hover:text-foreground/75"
                }`}
            >
              0{idx + 1}.
            </span>
            <span>{link.label}</span>
            {/* Architectural underline that aligns with bottom border */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-foreground transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
