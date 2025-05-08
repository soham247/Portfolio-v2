"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          // Start fade out animation when loading is complete
          setTimeout(() => setFadeOut(true), 500);
          return 100;
        }
        // Randomize progress increments for more natural feel
        const increment = Math.floor(Math.random() * 10) + 5;
        return Math.min(prevProgress + increment, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-md px-4">
        {/* Circular progress with SS logo */}
        <div className="relative w-48 h-48 mb-8">
          {/* Circular background */}
          <div className="absolute inset-0 rounded-full bg-accent"></div>
          
          {/* Circular progress indicator */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#E5E7EB" 
              strokeWidth="8"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="8"
              strokeLinecap="round"
              className="text-primary transition-all duration-500 ease-out"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
            />
          </svg>
          
          {/* SS Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold text-primary font-paytone_one">SS</div>
          </div>
        </div>
        
        <p className="text-gray-500 mb-4 text-center">Loading your experience...</p>
        
        {/* Progress percentage */}
        <p className="text-sm text-gray-400">{progress}%</p>
      </div>
    </div>
  );
}