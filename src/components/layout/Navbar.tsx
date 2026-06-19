"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosPin } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", id: "home", href: "/" },
    { label: "Projects", id: "project", href: "/project" },
    { label: "Skills", id: "skill", href: "/skills" },
    { label: "Experience", id: "experience", href: "/experience" }
  ];

  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname === "/project") {
      setActiveSection("project");
    } else if (pathname === "/skill") {
      setActiveSection("skill");
    } else if (pathname === "/experience") {
      setActiveSection("experience");
    } else {
      setActiveSection("");
    }
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.id === "home" && pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("home");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 border-b bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-8 h-full">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              const el = document.getElementById("home");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }
          }}
          className="font-mono font-bold text-lg hover:text-primary transition-colors"
        >
          &gt; soham_
        </Link>
        <p className="text-xs text-muted-foreground flex gap-1 items-center border-l pl-4 h-5 hidden lg:flex">
          <IoIosPin className="w-3.5 h-3.5" /> <span>Based in WB, India</span>
        </p>
      </div>

      <div className="hidden md:flex items-center gap-8 h-full">
        {navLinks.map((link, idx) => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 relative h-full group ${isActive
                ? "text-foreground font-bold"
                : "text-foreground/65 hover:text-foreground"
                }`}
            >
              <span className={`text-[9px] font-mono transition-colors ${isActive ? "text-primary font-bold" : "text-foreground/45 group-hover:text-foreground/75"
                }`}>
                0{idx + 1}.
              </span>
              <span>{link.label}</span>
              {/* Architectural underline that aligns with bottom border */}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-foreground transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <Button size="sm" className="font-medium">Contact Me</Button>
      </div>
    </nav>
  );
}


