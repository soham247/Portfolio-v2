"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Home, Compass, ArrowLeft, RefreshCw } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import Link from "next/link";

// Define TypeScript interface for orbiting elements
interface OrbitingElement {
  id: number;
  size: number;
  angle: number;
  speed: number;
  radius: number;
  delay: number;
}

function NotFound() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [orbitingElements, setOrbitingElements] = useState<OrbitingElement[]>([]);
  
  // Ensure text visibility with explicit colors based on theme
  const textColor = resolvedTheme === "dark" ? "text-white" : "text-black";
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";
  const accentColor = resolvedTheme === "dark" ? "text-blue-400" : "text-amber-500";
  const borderColor = resolvedTheme === "dark" ? "border-blue-500/30" : "border-amber-500/30";
  const bgAccent = resolvedTheme === "dark" ? "bg-blue-900/20" : "bg-amber-500/10";
  
  // Setup effect that runs on mount
  useEffect(() => {
    setMounted(true);
    
    // Generate orbiting elements for background effect
    const elements: OrbitingElement[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      angle: Math.random() * 360,
      speed: Math.random() * 10 + 20,
      radius: Math.random() * 80 + 100,
      delay: Math.random() * 2,
    }));
    
    setOrbitingElements(elements);
  }, []);

  // Early return if not mounted
  if (!mounted) return null;

  // Determine if we should show particles (only in dark mode)
  const showSpaceElements = resolvedTheme === "dark";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background py-16 px-4 flex items-center justify-center">
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
      
      {/* Content section */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 100 
          }}
          className="mb-8"
        >
          <h1 className={`font-rubik_dirt text-8xl md:text-9xl mb-2 ${textColor}`}>404</h1>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>
        
        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-6 relative mb-12"
        >
          {/* Background orbiting elements */}
          {showSpaceElements && orbitingElements.map((element) => (
            <motion.div
              key={element.id}
              className={`absolute rounded-full ${bgAccent} border ${borderColor} z-0`}
              style={{
                width: element.size,
                height: element.size,
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: Array.from({ length: 360 }, (_, i) => 
                  Math.cos((i + element.angle) * (Math.PI / 180)) * element.radius
                ),
                y: Array.from({ length: 360 }, (_, i) => 
                  Math.sin((i + element.angle) * (Math.PI / 180)) * element.radius
                ),
              }}
              transition={{
                duration: element.speed,
                delay: element.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-10"
          >
            <p className={`${textColor} text-lg mb-4`}>
              The page you&apos;re looking for has drifted into another dimension. 🚀
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={`p-4 rounded-lg ${bgAccent} border ${borderColor} relative z-10 max-w-md mx-auto`}
          >
            <h3 className={`${textColor} font-semibold flex items-center justify-center mb-2`}>
              <Compass className={`mr-2 ${accentColor}`} />
              Lost in Digital Space
            </h3>
            <p className={resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}>
              It seems you&apos;ve ventured into uncharted territory. The coordinates you entered don&apos;t match any known location in our universe.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mt-8 relative z-10"
        >
          <Link href="/">
            <Button className="group">
              <Home className="mr-2 h-4 w-4" />
              Return Home
              <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className={resolvedTheme === "dark" ? "text-white border-white hover:bg-white/10" : ""}
            onClick={() => window.history.back()}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>
      </div>
      
      {/* Constellation lines in the background */}
      {showSpaceElements && (
        <svg className="absolute inset-0 w-full h-full z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="30%" x2="30%" y2="10%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="30%" y1="10%" x2="50%" y2="20%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="50%" y1="20%" x2="70%" y2="5%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="70%" y1="5%" x2="90%" y2="30%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="20%" y1="80%" x2="40%" y2="60%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="40%" y1="60%" x2="60%" y2="70%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="60%" y1="70%" x2="80%" y2="50%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="40%" y1="40%" x2="60%" y2="30%" stroke="#4F46E5" strokeWidth="0.5" />
          <line x1="60%" y1="30%" x2="70%" y2="50%" stroke="#4F46E5" strokeWidth="0.5" />
        </svg>
      )}
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-1" />
    </div>
  );
}

export default NotFound;