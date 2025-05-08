"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Camera, Code } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { HyperText } from "@/components/magicui/hyper-text";

// Define TypeScript interface for orbiting elements
interface OrbitingElement {
  id: number;
  size: number;
  angle: number;
  speed: number;
  radius: number;
  delay: number;
}

function AboutMe() {
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
    const elements: OrbitingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      angle: Math.random() * 360,
      speed: Math.random() * 10 + 20,
      radius: Math.random() * 60 + 100,
      delay: Math.random() * 2,
    }));
    
    setOrbitingElements(elements);
  }, []);

  // Early return if not mounted
  if (!mounted) return null;

  // Determine if we should show particles (only in dark mode)
  const showSpaceElements = resolvedTheme === "dark";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background py-16 px-4">
      {/* Particles background - only in dark mode */}
      {showSpaceElements && (
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={120}
          color={particleColor}
          refresh={false}
        />
      )}
      
      {/* Content section */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className={`font-rubik_dirt text-4xl md:text-5xl mb-4 ${textColor}`}>About Me</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>
        
        {/* Bio content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 relative"
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10"
          >
            <HyperText className={`${accentColor} text-2xl font-semibold mb-2`}>
              Hello, Digital Explorer!
            </HyperText>
            <p className={`${textColor} mb-4`}>
              Hey there! 👋 I&apos;m Soham Sadhukhan, a second-year B.Tech student at Jalpaiguri Government Engineering College, diving deep into the world of Information Technology (and occasionally wondering if JavaScript dreams of electric sheep).
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`p-4 rounded-lg ${bgAccent} border ${borderColor} relative z-10`}
          >
            <h3 className={`${textColor} font-semibold flex items-center mb-2`}>
              <Code className={`mr-2 ${accentColor}`} />
              Developer Universe
            </h3>
            <p className={resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}>
              When I&apos;m not busy debugging my way through life, I&apos;m flexing my skills as a MERN stack developer, building sleek apps and chasing the next big idea. 💻✨ My projects are a mix of code, creativity, and caffeine — the perfect recipe for innovation!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={`p-4 rounded-lg ${bgAccent} border ${borderColor} relative z-10`}
          >
            <h3 className={`${textColor} font-semibold flex items-center mb-2`}>
              <Camera className={`mr-2 ${accentColor}`} />
              Beyond The Code
            </h3>
            <p className={resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}>
              But wait, there&apos;s more! When I step away from the keyboard, you&apos;ll find me capturing the world through my lens 📸 or binge-watching sitcoms because, hey, even developers need some Ctrl+Alt+Del time!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="relative z-10"
          >
            <p className={`${textColor} italic`}>
              Life&apos;s all about writing the best lines of code — and maybe the occasional cheesy bio. 😄
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-wrap gap-4 mt-8 relative z-10"
          >
            <Button className="group">
              View Skills
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className={resolvedTheme === "dark" ? "text-white border-white hover:bg-white/10" : ""}>
              <Github className="mr-2 h-4 w-4" />
              Projects
            </Button>
          </motion.div>
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
        </svg>
      )}
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-1" />
    </div>
  );
}

export default AboutMe;