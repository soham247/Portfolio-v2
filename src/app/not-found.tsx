import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiHome, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { TerminalAnimation } from "@/components/ui/TerminalAnimation";

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border flex-1">
      {/* Left column: Error info & actions — server-rendered */}
      <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-border bg-background">
        <div className="space-y-6 max-w-md">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-destructive mb-4 border border-destructive/20 bg-destructive/5 px-2.5 py-1">
              <FiAlertCircle className="size-3.5 animate-pulse" aria-hidden="true" />
              <span>DIAGNOSTIC_ERR_404</span>
            </div>
            <p className="text-sm font-mono text-primary mb-2" aria-hidden="true">
              0X. Error Page
            </p>
            <h1 className="text-5xl font-bold tracking-tight mb-4 font-sans">
              Lost in Transit.
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              The requested resource could not be resolved on this system. It
              might have been relocated, removed, or is configured to trigger
              this custom diagnostic screen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              asChild
              size="default"
              variant="default"
              className="rounded-none font-semibold cursor-pointer"
            >
              <Link href="/" className="flex items-center gap-2">
                <FiHome className="size-4" aria-hidden="true" />
                <span>Return Home</span>
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="outline"
              className="rounded-none font-semibold cursor-pointer"
            >
              <Link href="/experience" className="flex items-center gap-2">
                <span>View Experience</span>
                <FiArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right column: Terminal — client component owns its own state */}
      <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:p-16 bg-muted/5 relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"
          aria-hidden="true"
        />
        <div className="relative">
          <TerminalAnimation />
        </div>
      </div>
    </div>
  );
}
