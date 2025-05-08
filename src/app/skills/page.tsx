"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";
import { HyperText } from "@/components/magicui/hyper-text";

interface Skill {
  name: string;
  icon?: string;
}

function SkillsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ensure text visibility with explicit colors based on theme
  const textColor = resolvedTheme === "dark" ? "text-white" : "text-black";
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  // Categorize skills
  const skillCategories: Record<string, Skill[]> = {
    "Frontend Frameworks": [
      { name: "Next JS", icon: "devicon-nextjs-plain" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "ShadCn" },
    ],
    "Backend Technologies": [
      { name: "Node JS", icon: "devicon-nodejs-plain-wordmark colored" },
      { name: "Express JS", icon: "devicon-express-original" },
    ],
    "Databases": [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    ],
    Languages: [
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
    ],
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className={`font-rubik_dirt text-4xl md:text-5xl mb-4 ${textColor}`}>My Skills</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            A collection of technologies and tools I&apos;ve worked with
          </p>
        </motion.div>

        {/* Skills categories */}
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8"
            >
              <HyperText>{category}</HyperText>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map(skill => {
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className={`rounded-lg border ${resolvedTheme === "dark" ? "border-gray-700 bg-gray-800/50" : "border-gray-200 bg-gray-50"} p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      {skill.icon && (
                        <i className={`${skill.icon} text-4xl md:text-5xl`}></i>
                      )}
                      <p className={`text-sm font-medium mt-2 ${textColor}`}>{skill.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;