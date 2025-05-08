"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme/Theme-Toggler";


const NavItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/aboutme" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    setMounted(true);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  // Get theme-specific styles
  const getActiveStyles = (path: string) => {
    const isActive = pathname === path;
    const activeText = resolvedTheme === "dark" ? "text-blue-400" : "text-amber-600";
    
    return isActive 
      ? `${activeText}`
      : "";
  };

  const navbarBg = scrolled 
    ? resolvedTheme === "dark" 
      ? "bg-background/70 backdrop-blur-md border-b border-white/10"
      : "bg-background/70 backdrop-blur-md border-b border-black/10"
    : "bg-transparent";

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          navbarBg
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div 
                className={cn(
                  "text-xl font-paytone_one tracking-wide",
                  resolvedTheme === "dark" ? "text-white" : "text-black"
                )}
                whileHover={{ scale: 1.05 }}
              >
                SS
                <span className={resolvedTheme === "dark" ? "text-blue-400" : "text-amber-500"}>.</span>
              </motion.div>
              <motion.div 
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
                  resolvedTheme === "dark" ? "bg-blue-400" : "bg-amber-500"
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {NavItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                    resolvedTheme === "dark" ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black",
                    "relative hover:scale-105",
                    getActiveStyles(item.path)
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-2">
              {/* Theme toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                className="block md:hidden p-2 rounded-md"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                aria-label="Toggle menu"
              >
                {mobileNavOpen ? (
                  <X className={resolvedTheme === "dark" ? "text-white" : "text-black"} size={20} />
                ) : (
                  <Menu className={resolvedTheme === "dark" ? "text-white" : "text-black"} size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNavOpen(false)}
            />
            
            {/* Mobile menu */}
            <motion.div
              className={cn(
                "absolute right-0 top-0 h-full w-64",
                resolvedTheme === "dark" ? "bg-black/90 border-l border-white/10" : "bg-white/90 border-l border-black/10"
              )}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileNavOpen(false)}
                    className={resolvedTheme === "dark" ? "text-white" : "text-black"}
                  >
                    <X size={20} />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {NavItems.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.path}
                      className={cn(
                        "px-4 py-2 rounded-md text-lg font-medium transition-all",
                        resolvedTheme === "dark" ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black",
                        getActiveStyles(item.path)
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}