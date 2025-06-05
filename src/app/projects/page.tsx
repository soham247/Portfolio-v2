"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { HyperText } from "@/components/magicui/hyper-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import Section from "@/components/Section";
import { useThemeStyles } from "@/hooks/useThemeStyles";

// Import project images
import weatherapp from "../../../public/projects/weatherapp.png";
import portfolio from "../../../public/projects/portfolio.png";
import muse from "../../../public/projects/Muse.png";
import jeevanVerse from "../../../public/projects/jeevanverse.png"
import spendingDiary from "../../../public/projects/spending-diary.png";
import { Project } from "@/types/project";

// Project card component
interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { textColor, textSecondary, accentColor, cardBg, cardBorder, tagBg, tagText, buttonSecondary } = useThemeStyles();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`${cardBg} backdrop-blur-sm rounded-lg overflow-hidden border ${cardBorder} hover:shadow-lg transition-all duration-300 group relative z-10 h-full`}
    >
      <ShineBorder 
        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} 
        className="absolute inset-0"
      />
      <div className="relative overflow-hidden h-48 p-1">
        <Image
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          width={400}
          height={200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <HyperText className="text-white text-xl font-bold p-4">
            {project.name}
          </HyperText>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className={`text-xs px-2 py-1 ${tagBg} rounded-full ${tagText}`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className={`${textSecondary} text-sm mb-4`}>
          {project.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <Link 
            href={project.gitHubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center text-sm ${textColor} hover:${accentColor} transition-colors`}
          >
            <Github size={16} className="mr-1" />
            <span>Source</span>
          </Link>
          
          <Link 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center text-sm gap-1 ${buttonSecondary} px-3 py-1 rounded-md transition-colors text-white group`}
          >
            <span>Demo</span>
            <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  const projects: Project[] = [
    {
        image: jeevanVerse,
        name: "Jeevan Verse",
        technologies: ["MERN", "Socket.io", "TypeScript", "Shadcn UI", "Tailwind"],
        description: "Find symptoms, request blood, join discussions, and support health campaigns—all in one place. ",
        liveLink: "https://jeevan-verse.vercel.app/",
        gitHubLink: "https://github.com/Dutta2005/Jeevan-verse"
    },
    {
      image: spendingDiary,
      name: "Spending Diary",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "Node.js", "MongoDB", "Razorpay"],
      description: "The smart way to track expenses, split bills with friends, and manage your finances in one place.",
      liveLink: "https://www.spendingdiary.xyz/",
      gitHubLink: "https://github.com/soham247/Spending-Diary"
    },
    {
      image: muse,
      name: "Muse",
      technologies: ["MERN", "Tailwind"],
      description: "Modern blogging platform for sharing thoughts and experiences.",
      liveLink: "https://muse-lemon.vercel.app/",
      gitHubLink: "https://github.com/soham247/muse"
    },
    {
        image: portfolio,
        name: "Portfolio website",
        technologies: ["React.js", "Tailwind CSS"],
        description: "Showcase of my projects and professional skills.",
        liveLink: "https://sohamsadhukhan.vercel.app/",
        gitHubLink: "https://github.com/soham247/Porfolio"
      },
      {
        image: weatherapp,
        name: "Weather App",
        technologies: ["React.js"],
        description: "Real-time weather updates with temperature, humidity, and wind speed data.",
        liveLink: "https://weather-wiz-vert.vercel.app/",
        gitHubLink: "https://github.com/soham247/Weather-App"
      }
  ];

  return (
    <Section 
      id="projects"
      title="My Projects"
      particleQuantity={80}
    >
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-1" />
    </Section>
  );
}

export default ProjectsSection;