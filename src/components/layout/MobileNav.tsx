"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiCpu, FiLayers, FiBriefcase } from "react-icons/fi";

const mobileLinks = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "Skills", href: "/skills", icon: FiCpu },
  { label: "Projects", href: "/projects", icon: FiLayers },
  { label: "Experience", href: "/experience", icon: FiBriefcase },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-[360px]">
      <nav className="flex items-center justify-around py-2 px-3 rounded-full border border-border bg-background/80 backdrop-blur-lg shadow-lg shadow-black/5">
        {mobileLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-0.5 pt-1 pb-2 px-2.5 rounded-full transition-all duration-300 relative group ${
                isActive
                  ? "text-primary scale-105"
                  : "text-text-tertiary hover:text-foreground"
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${
                isActive ? "bg-primary/10" : "group-hover:bg-secondary"
              }`}>
                <Icon className="size-4.5" />
              </div>
              <span className="text-[9px] font-semibold tracking-wide font-sans">
                {link.label}
              </span>
              
              {isActive && (
                <span className="absolute bottom-0.5 size-1 rounded-full bg-primary animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
