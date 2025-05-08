"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Calendar, ArrowRight, Trophy, Award } from "lucide-react";

function Achievements() {
    const [showAll, setShowAll] = useState(false);  
  const achievements = [
    {
      type: "Hackathon",
      name: "HackWars",
      description: "Secured 1st place in the Hackathon",
      date: "March, 2025",
      icon: <Trophy size={18} />,
      color: "from-yellow-500 to-amber-600"
    }, 
    {
      type: "Open Source",
      name: "Social Winter of Code",
      description: "Secured 22nd place among 300+ participants",
      date: "March, 2025",
      icon: <Award size={18} />,
      color: "from-purple-500 to-pink-600"
    },
  ];

  const displayedAchievements = showAll ? achievements : achievements.slice(0, 2);

  return (
    <div className="py-8">
      <div className="mb-8 text-center">
        <h2 className="font-paytone_one text-3xl mb-2 text-foreground">
          <span className="text-primary">Achievements</span>
        </h2>
        <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {displayedAchievements.map((achievement, index) => (
          <Card key={index} className="overflow-hidden backdrop-blur-sm transform transition-all duration-300 hover:shadow-md border border-border bg-card/50">
            {/* Colorful top strip */}
            <div className={`h-1 w-full bg-gradient-to-r ${achievement.color}`}></div>
            
            <div className="flex p-4">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gradient-to-br ${achievement.color} shadow-md shrink-0`}>
                <span className="text-white">{achievement.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-medium">{achievement.type}</CardTitle>
                    <h3 className="text-xl font-paytone_one text-primary leading-tight mt-1">
                      {achievement.name}
                    </h3>
                  </div>
                  <div className="flex items-center text-muted-foreground text-xs mt-1">
                    <Calendar size={12} className="mr-1" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
                
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
                
                <CardFooter className="p-0 pt-2 mt-2 flex justify-end border-t border-border/30">
                  <button className="flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                    <span>Details</span>
                    <ArrowRight size={12} className="ml-1" />
                  </button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Toggle Button */}
      {achievements.length > 2 && (
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-sm flex items-center space-x-1 bg-muted hover:bg-primary/10 text-foreground px-3 py-1 rounded-full transition-colors"
          >
            <span>{showAll ? "Show Less" : "View All"}</span>
            <ArrowRight size={12} className={`transition-transform ${showAll ? "rotate-90" : ""}`} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Achievements;