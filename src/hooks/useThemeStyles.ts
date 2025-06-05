import { useTheme } from "next-themes";

export function useThemeStyles() {
  const { resolvedTheme } = useTheme();
  
  const isDark = resolvedTheme === "dark";
  
  return {
    // Basic colors
    textColor: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-gray-300" : "text-gray-700",
    accentColor: isDark ? "text-blue-400" : "text-amber-500",
    
    // Card styles
    cardBg: isDark ? "bg-slate-900/60" : "bg-white/80",
    cardBorder: isDark ? "border-blue-500/20" : "border-amber-500/20",
    
    // Form elements
    inputBg: isDark ? "bg-gray-700/50" : "bg-gray-50",
    inputBorder: isDark ? "border-gray-600" : "border-gray-300",
    inputText: isDark ? "text-white" : "text-gray-900",
    inputFocus: isDark ? "focus:ring-blue-500" : "focus:ring-amber-500",
    
    // Tags/badges
    tagBg: isDark ? "bg-blue-900/40" : "bg-amber-500/20",
    tagText: isDark ? "text-blue-300" : "text-amber-700",
    
    // Buttons
    buttonPrimary: isDark 
      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400"
      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600",
    
    buttonSecondary: isDark ? "bg-blue-600 hover:bg-blue-700" : "bg-amber-500 hover:bg-amber-600",
    
    // Box shadows
    cardShadow: isDark 
      ? "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 8px rgba(124, 58, 237, 0.3)" 
      : "0 8px 32px rgba(0, 0, 0, 0.05), 0 0 8px rgba(217, 119, 6, 0.2)",
    
    // Gradients for cards
    gradientPurple: isDark 
      ? "linear-gradient(135deg, #8B5CF6, #6366F1)" 
      : "linear-gradient(135deg, #D97706, #F59E0B)",
    
    gradientPink: isDark 
      ? "linear-gradient(135deg, #EC4899, #D946EF)" 
      : "linear-gradient(135deg, #B45309, #D97706)",
    
    // Utility
    isDark,
    resolvedTheme
  };
}