"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HyperText } from "@/components/magicui/hyper-text";
import Section from "@/components/Section";
import { useThemeStyles } from "@/hooks/useThemeStyles";

interface Skill {
  name: string;
  icon?: string;
}

function SkillsSection() {
  const { textColor, cardBg, cardBorder } = useThemeStyles();
  const [mounted, setMounted] = useState(false);

  // Categorize skills
  const skillCategories: Record<string, Skill[]> = {
    "Frontend Frameworks": [
      { name: "Next JS", icon: "devicon-nextjs-plain" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
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
    "Tools & Technologies": [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
    ],
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Section 
      id="skills"
      title="My Skills"
      subtitle="A collection of technologies and tools I've worked with"
      particleQuantity={100}
    >
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
            <HyperText className={`text-2xl md:text-3xl font-bold mb-8 ${textColor}`}>
              {category}
            </HyperText>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categorySkills.map(skill => {
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-lg border ${cardBorder} ${cardBg} p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    {skill.icon && (
                      <i className={`${skill.icon} text-4xl md:text-5xl mb-3`}></i>
                    )}
                    <p className={`text-sm font-medium text-center ${textColor}`}>{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default SkillsSection;