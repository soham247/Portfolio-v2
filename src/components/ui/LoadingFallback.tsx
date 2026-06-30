import { cn } from "@/lib/utils";

interface LoadingFallbackProps {
  className?: string;
  moduleName?: string; // Kept for backwards compatibility if passed, but ignored in UI
}

export function LoadingFallback({ className }: LoadingFallbackProps) {
  return (
    <div
      className={cn(
        "w-full h-[2px] bg-border/40 overflow-hidden relative",
        className
      )}
      role="progressbar"
      aria-label="Loading..."
    >
      <div className="absolute inset-0 bg-primary/40 animate-pulse" />
    </div>
  );
}
