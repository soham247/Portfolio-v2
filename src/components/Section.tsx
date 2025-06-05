"use client";
import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  showParticles?: boolean;
  particleQuantity?: number;
  className?: string;
  containerClassName?: string;
}

function Section({
  id,
  title,
  subtitle,
  children,
  showParticles = true,
  particleQuantity = 100,
  className = "",
  containerClassName = "max-w-6xl"
}: SectionProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Theme-based styling
  const textColor = resolvedTheme === "dark" ? "text-white" : "text-black";
  const subtitleColor = resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700";
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Show particles only in dark mode and when enabled
  const shouldShowParticles = showParticles && resolvedTheme === "dark";

  return (
    <div 
      id={id}
      className={`relative min-h-screen w-full overflow-hidden bg-background py-16 px-4 ${className}`}
    >
      {/* Particles background - only in dark mode */}
      {shouldShowParticles && (
        <Particles
          className="absolute inset-0 z-0"
          quantity={particleQuantity}
          ease={120}
          color={particleColor}
          refresh={false}
        />
      )}
      
      {/* Content section */}
      <div className={`relative z-10 ${containerClassName} mx-auto`}>
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`font-rubik_dirt text-4xl md:text-5xl mb-4 ${textColor}`}>
            {title}
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          {subtitle && (
            <p className={`mt-4 max-w-2xl mx-auto ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
        </motion.div>
        
        {/* Section content */}
        {children}
      </div>
    </div>
  );
}

export default Section;