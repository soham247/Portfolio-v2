"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "../ui/card";
import { 
  Calendar, 
  ArrowRight, 
  Trophy, 
  Award, 
  Star,
  Rocket,
  Target,
  Medal
} from "lucide-react";

// Define TypeScript interface for floating achievements
interface FloatingAchievement {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  icon: 'star' | 'trophy' | 'medal';
}

function Achievements() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingAchievement[]>([]);
  
  const accentColor = resolvedTheme === "dark" ? "text-blue-400" : "text-amber-500";
  const glow = resolvedTheme === "dark" ? "#3B82F6" : "#FFC107";
  
  useEffect(() => {
    setMounted(true);
    
    // Generate floating achievement elements
    const elements: FloatingAchievement[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: Math.random() * 16 + 12,
      x: Math.random() * 100,
      y: Math.random() * 80 + 10,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      icon: ['star', 'trophy', 'medal'][Math.floor(Math.random() * 3)] as 'star' | 'trophy' | 'medal'
    }));
    
    setFloatingElements(elements);
  }, []);

  const achievements = [
    {
      type: "Galactic Victory",
      name: "HackWars",
      description: "Conquered the digital battlefield and secured 1st place among stellar developers",
      date: "March, 2025",
      icon: <Trophy size={18} />,
      color: "from-yellow-500 to-amber-600",
      spaceIcon: <Target className="w-5 h-5" />
    }, 
    {
      type: "Cosmic Contribution",
      name: "Social Winter of Code",
      description: "Navigated through the open source galaxy, ranking 22nd among 300+ space explorers",
      date: "March, 2025",
      icon: <Award size={18} />,
      color: "from-purple-500 to-pink-600",
      spaceIcon: <Rocket className="w-5 h-5" />
    },
  ];

  const displayedAchievements = showAll ? achievements : achievements.slice(0, 2);

  if (!mounted) return null;

  const showSpaceElements = resolvedTheme === "dark";

  const renderFloatingIcon = (icon: string) => {
    const iconProps = { 
      className: `w-full h-full ${accentColor} opacity-30`, 
      style: { filter: `drop-shadow(0 0 6px ${glow})` }
    };
    
    switch (icon) {
      case 'trophy':
        return <Trophy {...iconProps} />;
      case 'star':
        return <Star {...iconProps} />;
      case 'medal':
        return <Medal {...iconProps} />;
      default:
        return <Star {...iconProps} />;
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Floating achievement elements - only in dark mode */}
      {showSpaceElements && floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute z-5"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.3, 1, 0.3],
            rotate: [0, 180, 360],
            x: [0, Math.random() * 60 - 30],
            y: [0, Math.random() * 60 - 30],
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

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-paytone_one text-3xl md:text-4xl mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center gap-3">
              <Star className={`w-7 h-7 ${accentColor}`} />
              <span className={accentColor}>Achievement Constellation</span>
            </span>
          </motion.h2>
          
          <motion.p 
            className={`text-base max-w-2xl mx-auto mb-4 ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Milestones collected during my journey through the coding cosmos
          </motion.p>
          
          <div className={cn(
            "w-20 h-1 mx-auto rounded-full bg-gradient-to-r",
            resolvedTheme === "dark" 
              ? "from-blue-500 to-purple-600" 
              : "from-amber-500 to-orange-600"
          )}></div>
        </motion.div>
        
        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {displayedAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={cn(
                "overflow-hidden backdrop-blur-md transform transition-all duration-300",
                "hover:shadow-2xl border group cursor-pointer",
                resolvedTheme === "dark" 
                  ? "bg-gray-900/50 border-gray-700/50 hover:border-blue-500/50" 
                  : "bg-white/80 border-gray-200/50 hover:border-amber-500/50",
                "hover:scale-[1.02]"
              )}
            >
              {/* Colorful top strip with animation */}
              <motion.div 
                className={`h-1 w-full bg-gradient-to-r ${achievement.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
              
              <div className="flex p-6">
                {/* Animated Icon */}
                <motion.div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mr-4",
                    `bg-gradient-to-br ${achievement.color} shadow-lg shrink-0`,
                    "group-hover:scale-110 transition-transform duration-300"
                  )}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white">{achievement.icon}</span>
                </motion.div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <CardTitle className={cn(
                        "text-sm font-medium flex items-center gap-2",
                        resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                      )}>
                        {achievement.spaceIcon}
                        {achievement.type}
                      </CardTitle>
                      <h3 className={cn(
                        "text-xl font-paytone_one leading-tight mt-2",
                        accentColor
                      )}>
                        {achievement.name}
                      </h3>
                    </div>
                    <div className={cn(
                      "flex items-center text-xs px-2 py-1 rounded-full",
                      resolvedTheme === "dark" 
                        ? "bg-gray-800 text-gray-300" 
                        : "bg-gray-100 text-gray-600"
                    )}>
                      <Calendar size={10} className="mr-1" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-0 mb-4">
                    <p className={cn(
                      "text-sm leading-relaxed",
                      resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    )}>
                      {achievement.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Toggle Button */}
        {achievements.length > 2 && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={() => setShowAll(!showAll)}
              className={cn(
                "text-sm flex items-center gap-2 px-6 py-3 rounded-full",
                "backdrop-blur-md transition-all duration-300 font-medium",
                "hover:scale-105 border",
                resolvedTheme === "dark" 
                  ? "bg-gray-900/50 hover:bg-blue-900/30 text-blue-400 border-gray-700/50 hover:border-blue-500/50" 
                  : "bg-white/80 hover:bg-amber-500/10 text-amber-600 border-gray-200/50 hover:border-amber-500/50"
              )}
              whileHover={{ boxShadow: resolvedTheme === "dark" 
                ? "0 10px 25px -5px rgba(59, 130, 246, 0.25)" 
                : "0 10px 25px -5px rgba(255, 193, 7, 0.25)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4" />
              <span>{showAll ? "Collapse Constellation" : "Expand Galaxy"}</span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={14} className="rotate-90" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* Inspirational Quote */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={cn(
            "text-sm italic max-w-lg mx-auto",
            resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
          )}>
            &quot;Every achievement is a star in the constellation of success, 
            lighting the path for future cosmic adventures.&quot;
            <span className={`font-semibold ${accentColor} ml-2`}>✨</span>
          </p>
        </motion.div>
      </div>


    </div>
  );
}

export default Achievements;