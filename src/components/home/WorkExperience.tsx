"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Rocket, 
  Code, 
  Globe,
  Star,
  Zap
} from "lucide-react";

// Define TypeScript interface for floating elements
interface FloatingElement {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  icon: 'rocket' | 'star' | 'zap';
}

function WorkExperience() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  
  const accentColor = resolvedTheme === "dark" ? "text-blue-400" : "text-amber-500";
  const cardBg = resolvedTheme === "dark" 
    ? "bg-gray-900/50 border-gray-700/50" 
    : "bg-white/80 border-gray-200/50";
  const glow = resolvedTheme === "dark" ? "#3B82F6" : "#FFC107";
  
  useEffect(() => {
    setMounted(true);
    
    // Generate floating space elements
    const elements: FloatingElement[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 15,
      x: Math.random() * 100,
      y: Math.random() * 60 + 20,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 3,
      icon: ['rocket', 'star', 'zap'][Math.floor(Math.random() * 3)] as 'rocket' | 'star' | 'zap'
    }));
    
    setFloatingElements(elements);
  }, []);

  if (!mounted) return null;

  const showSpaceElements = resolvedTheme === "dark";

  const renderFloatingIcon = (icon: string) => {
    const iconProps = { 
      className: `w-full h-full ${accentColor}`, 
      style: { filter: `drop-shadow(0 0 8px ${glow})` }
    };
    
    switch (icon) {
      case 'rocket':
        return <Rocket {...iconProps} />;
      case 'star':
        return <Star {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      default:
        return <Star {...iconProps} />;
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-8 px-4 md:px-12">
      {/* Floating space elements - only in dark mode */}
      {showSpaceElements && floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute z-10 opacity-20"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          {renderFloatingIcon(element.icon)}
        </motion.div>
      ))}

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`font-paytone_one text-4xl md:text-5xl mb-6 tracking-tight text-foreground`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center gap-3">
              <Briefcase className={`w-8 h-8 ${accentColor}`} />
              Mission Control
            </span>
          </motion.h2>
          
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Navigating through the cosmos of code, one project at a time. 
            Here&apos;s my journey through the digital galaxy.
          </motion.p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={cn(
            "absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2",
            resolvedTheme === "dark" ? "bg-blue-500/30" : "bg-amber-500/30"
          )} />

          {/* Experience Card */}
          <motion.div
            className="relative flex flex-col md:flex-row items-start md:items-center mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className={cn(
              "absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-30",
              "border-4 border-background",
              resolvedTheme === "dark" ? "bg-blue-500" : "bg-amber-500"
            )} />

            {/* Content Card */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
              <motion.div
                className={cn(
                  "p-8 rounded-2xl backdrop-blur-md border shadow-xl",
                  cardBg,
                  "hover:shadow-2xl transition-all duration-300"
                )}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: resolvedTheme === "dark" 
                    ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)" 
                    : "0 25px 50px -12px rgba(255, 193, 7, 0.25)"
                }}
              >
                {/* Company Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`font-paytone_one text-2xl font-bold text-foreground mb-2`}>
                      Next.js Developer Intern
                    </h3>
                    <p className={`text-xl font-semibold ${accentColor} mb-2`}>
                      Kraf Technologies
                    </p>
                  </div>
                  <div className={cn(
                    "p-3 rounded-full",
                    resolvedTheme === "dark" 
                      ? "bg-blue-900/30" 
                      : "bg-amber-500/10"
                  )}>
                    <Code className={`w-6 h-6 ${accentColor}`} />
                  </div>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-4 h-4 ${accentColor}`} />
                    <span className={`text-sm ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      May 2024 - Present
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${accentColor}`} />
                    <span className={`text-sm ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      Remote
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-base leading-relaxed mb-6 ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Embarking on a stellar journey in web development, crafting responsive and 
                  dynamic applications using Next.js. Contributing to innovative projects that 
                  push the boundaries of user experience and technical excellence.
                </p>
              </motion.div>
            </div>

            {/* Orbital Decoration */}
            <div className="hidden md:block md:w-1/2 md:pl-8">
              <motion.div
                className="relative w-32 h-32 mx-auto"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className={cn(
                  "absolute inset-0 rounded-full border-2 border-dashed opacity-30",
                  resolvedTheme === "dark" ? "border-blue-400" : "border-amber-500"
                )} />
                <motion.div
                  className={cn(
                    "absolute top-0 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2",
                    resolvedTheme === "dark" ? "bg-blue-400" : "bg-amber-500"
                  )}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className={`w-12 h-12 ${accentColor}`} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className={`text-lg ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Ready to embark on your next digital adventure? 
            <span className={`font-semibold ${accentColor} ml-2`}>
              Let&apos;s launch something extraordinary together! 🚀
            </span>
          </p>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-5 z-0",
        resolvedTheme === "dark" 
          ? "from-blue-900 via-transparent to-purple-900" 
          : "from-amber-500 via-transparent to-orange-500"
      )} />
    </section>
  );
}

export default WorkExperience;