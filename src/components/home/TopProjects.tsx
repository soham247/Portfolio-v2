"use client";
import { useEffect, useRef, useState } from "react";
import spendingDiary from "../../../public/projects/spending-diary.png";
import jeevanVerse from "../../../public/projects/jeevanverse.png";
import muse from "../../../public/projects/Muse.png";
import Image from "next/image";
import { Card } from "../ui/card";

function TopProjects() {
  const projects = [
    {
      image: jeevanVerse,
      name: "Jeevan Verse",
      description: "Find symptoms, request blood, join discussions, and support health campaigns—all in one place.",
    },
    {
      image: spendingDiary,
      name: "Spending Diary",
      description: "The smart way to track expenses, split bills with friends, and manage your finances in one place.",
    },
    {
      image: muse,
      name: "Muse",
      description: "Modern blogging platform for sharing thoughts and experiences.",
    },
  ];

  // Duplicate projects for continuous scrolling effect
  const allProjects = [...projects, ...projects, ...projects];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const speed = 1; // Adjust speed as needed
    
    const scroll = () => {
      if (isHovered) {
        // Pause animation when hovered
        animationId = requestAnimationFrame(scroll);
        return;
      }
      
      scrollPosition += speed;
      
      // Reset position when we've scrolled a project width
      const firstChild = scrollContainer.children[0] as HTMLElement;
      if (firstChild && scrollPosition >= firstChild.offsetWidth) {
        scrollPosition = 0;
        // Move first item to the end
        scrollContainer.appendChild(firstChild);
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);
  
  return (
    <div 
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef} 
        className="flex gap-4 py-4 transition-transform"
        style={{ width: "max-content" }}
      >
        <div className="h-56 w-10 bg-gradient-to-tr from-black to-transparent"></div>
        <div className="h-56 w-10 bg-gradient-to-tl from-black to-transparent"></div>
        {allProjects.map((project, index) => (
          <Card 
            key={index} 
            className="w-96 h-56 relative overflow-hidden group"
          >
            {/* Image takes up the entire card */}
            <div className="w-full h-full">
              <Image 
                src={project.image} 
                alt={project.name} 
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            
            {/* Title with gradient shadow at bottom (shows by default, hidden on hover) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
            </div>
            
            {/* Description overlay (hidden by default, shows on hover) */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm text-white text-center">{project.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TopProjects;