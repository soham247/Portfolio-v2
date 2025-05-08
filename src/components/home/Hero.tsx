"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Particles } from "../magicui/particles";
import { ArrowRight, Github, Star, ChevronDown, FileIcon, Linkedin, Twitter } from "lucide-react";
import { HyperText } from "../magicui/hyper-text";
import profilePhoto from "@/../public/profile.jpg";
import Image from "next/image";

// Define TypeScript interface for asteroid objects
interface Asteroid {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  
  // Ensure text visibility with explicit colors based on theme
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";
  const blackHoleColor = resolvedTheme === "dark" ? "#0A0D1E" : "#F2F0DD";
  const glow = resolvedTheme === "dark" ? "#3B82F6" : "#FFC107";
  const accentColor = resolvedTheme === "dark" ? "text-blue-400" : "text-amber-500";
  
  // Setup effect that runs on mount
  useEffect(() => {
    setMounted(true);
    
    // Generate random asteroids
    const newAsteroids: Asteroid[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 40 + 10,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    
    setAsteroids(newAsteroids);
  }, []);

  if (!mounted) return null;

  // Determine if we should show particles and asteroids (only in dark mode)
  const showSpaceElements = resolvedTheme === "dark";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Particles background - only in dark mode */}
      {showSpaceElements && (
        <Particles
          className="absolute inset-0 z-0"
          quantity={150}
          ease={120}
          color={particleColor}
          refresh={false}
        />
      )}
      
      <div className="absolute right-2 bottom-5 -translate-x-1/2 -translate-y-1/2 z-0 md:block hidden">
        <div className="relative">
          <div className={cn(
            "w-48 h-48 rounded-full",
            "bg-gradient-to-r from-transparent via-transparent to-transparent",
            "border-8 border-transparent",
            "shadow-[0_0_100px_40px_rgba(0,0,0,0.2)]",
            resolvedTheme === "dark" ? "shadow-blue-500/20" : "shadow-amber-500/20"
          )}>
            <div className="absolute inset-0 rounded-full animate-spin-slow" 
              style={{ 
                background: `radial-gradient(circle, ${blackHoleColor} 30%, transparent 70%)`,
                boxShadow: `0 0 60px 20px ${glow}25`
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Asteroids - only in dark mode */}
      {showSpaceElements && asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="absolute bg-gray-600 rounded-full z-10"
          style={{
            width: asteroid.size,
            height: asteroid.size,
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            boxShadow: `0 0 5px ${glow}`
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: asteroid.duration,
            delay: asteroid.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-screen px-4 md:px-12">
        <div className="text-left space-y-4">
          <motion.h2 
            className={`font-paytone_one text-lg mb-4 tracking-wide text-foreground`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="flex items-center">
              <Star className={`inline-block mr-2 w-5 h-5 ${accentColor}`} />
              <HyperText className={`${accentColor} text-2xl`}>Web Developer</HyperText>
            </span>
          </motion.h2>
          
          <motion.h1 
            className={`font-rubik_dirt text-5xl md:text-6xl mb-4 tracking-tight text-foreground`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Soham Sadhukhan
          </motion.h1>
          
          <motion.p 
            className={`max-w-md mb-8 text-lg ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Crafting stellar digital experiences that orbit around your needs.
            Blast off into a universe of exceptional web solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <a href="https://github.com/soham247" target="_blank" rel="noopener noreferrer" 
                className={cn(
                  "p-3 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  resolvedTheme === "dark" 
                    ? "bg-gray-800 hover:bg-blue-900 text-white" 
                    : "bg-gray-200 hover:bg-amber-200 text-gray-800"
                )}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sohamsadhukhan2004" target="_blank" rel="noopener noreferrer" 
                className={cn(
                  "p-3 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  resolvedTheme === "dark" 
                    ? "bg-gray-800 hover:bg-blue-900 text-white" 
                    : "bg-gray-200 hover:bg-amber-200 text-gray-800"
                )}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/geekSoham" target="_blank" rel="noopener noreferrer" 
                className={cn(
                  "p-3 rounded-full transition-all duration-300",
                  "hover:scale-110",
                  resolvedTheme === "dark" 
                    ? "bg-gray-800 hover:bg-blue-900 text-white" 
                    : "bg-gray-200 hover:bg-amber-200 text-gray-800"
                )}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <a 
              href={`${process.env.NEXT_PUBLIC_RESUME_LINK}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "group flex items-center gap-2",
                "px-6 py-3 rounded-full font-medium",
                "transition-all duration-300",
                "relative overflow-hidden",
                resolvedTheme === "dark" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-amber-500 hover:bg-amber-600 text-white",
                "shadow-md hover:shadow-lg"
              )}
            >
              <FileIcon className="w-5 h-5" /> 
              <span>View Resume</span>
              <motion.div
                className="absolute right-5"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
        
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className={cn(
            "relative w-64 h-64 md:w-80 md:h-80 rounded-full",
            "flex items-center justify-center",
            "before:absolute before:inset-0 before:rounded-full",
            "before:animate-pulse-slow",
            resolvedTheme === "dark" 
              ? "bg-blue-900/20 border-2 border-blue-500/30 before:bg-blue-500/10" 
              : "bg-amber-500/10 border-2 border-amber-500/30 before:bg-amber-500/10"
          )}>
            <div className="w-full h-full p-2 rounded-full overflow-hidden">
              <Image 
                src={profilePhoto} 
                alt="Soham Sadhukhan" 
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className={cn(
          "p-3 rounded-full",
          "backdrop-blur-sm",
          resolvedTheme === "dark" 
            ? "bg-blue-900/20" 
            : "bg-amber-500/10"
        )}>
          <ChevronDown className={`w-6 h-6 ${accentColor}`} />
        </div>
      </motion.div>
      
      {/* Enhanced gradient */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t z-20",
        resolvedTheme === "dark" 
          ? "from-background via-background/90 to-transparent" 
          : "from-background via-background/80 to-transparent"
      )} />
    </div>
  );
}

export default Hero;