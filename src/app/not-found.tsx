"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiHome, FiTerminal, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    setTerminalText([]); // Reset terminal lines on route change
    const lines = [
      `guest@soham:~$ locate ${currentPath || "/page"}`,
      `[searching] scanning index database...`,
      `[warning] path "${currentPath || "/page"}" is not resolved in routing tables.`,
      `Error 404: RESOURCE_NOT_FOUND`,
      `guest@soham:~$ help --suggest`,
      `Suggestions:`,
      `  - Home (/) - The core entry point.`,
      `  - Experience (/experience) - Professional history.`,
      `  - Projects (/project) - Selected works.`,
      `  - Skills (/skills) - Technology stack.`,
      `guest@soham:~$ _`
    ];

    let timer: NodeJS.Timeout;
    let currentLineIndex = 0;

    const typeNextLine = () => {
      if (currentLineIndex < lines.length) {
        const lineToAppend = lines[currentLineIndex];
        setTerminalText((prev) => [...prev, lineToAppend]);
        currentLineIndex++;
        timer = setTimeout(typeNextLine, 180);
      }
    };

    timer = setTimeout(typeNextLine, 100);
    return () => clearTimeout(timer);
  }, [currentPath]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border flex-1">
      {/* Left Column: Error Info & Actions */}
      <div className="flex flex-col justify-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-border bg-background">
        <div className="space-y-6 max-w-md">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-destructive mb-4 border border-destructive/20 bg-destructive/5 px-2.5 py-1">
              <FiAlertCircle className="size-3.5 animate-pulse" />
              <span>DIAGNOSTIC_ERR_404</span>
            </div>
            <h1 className="text-sm font-mono text-primary mb-2">0X. Error Page</h1>
            <h2 className="text-5xl font-bold tracking-tight mb-4 font-sans">Lost in Transit.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              The requested resource could not be resolved on this system. It might have been relocated, removed, or is configured to trigger this custom diagnostic screen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild size="default" variant="default" className="rounded-none font-semibold cursor-pointer">
              <Link href="/" className="flex items-center gap-2">
                <FiHome className="size-4" />
                <span>Return Home</span>
              </Link>
            </Button>
            <Button asChild size="default" variant="outline" className="rounded-none font-semibold cursor-pointer">
              <Link href="/experience" className="flex items-center gap-2">
                <span>View Experience</span>
                <FiArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column: Terminal Emulator */}
      <div className="flex flex-col justify-center p-12 md:p-16 bg-muted/5 relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

        <div className="relative border border-border bg-card/60 backdrop-blur-sm shadow-xl flex flex-col h-[360px] font-mono text-xs rounded-none">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/20">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-destructive/40 border border-destructive/20" />
              <span className="size-2 rounded-full bg-amber-400/40 border border-amber-400/20" />
              <span className="size-2 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1.5">
              <FiTerminal className="size-3" />
              diagnostic_session.sh
            </span>
            <div className="w-10" />
          </div>

          {/* Terminal Logs Content */}
          <div className="p-5 flex-1 flex flex-col gap-2 font-mono text-foreground/80 leading-relaxed">
            {terminalText.map((line, index) => {
              if (!line) return null;
              const isCommand = line.startsWith("guest@soham");
              const isError = line.includes("Error 404") || line.includes("[warning]");
              const isSuggestion = line.startsWith("  -");

              let textClass = "text-muted-foreground";
              if (isCommand) {
                textClass = "text-primary font-semibold";
              } else if (isError) {
                textClass = "text-destructive font-semibold";
              } else if (isSuggestion) {
                textClass = "text-foreground font-medium pl-2";
              }

              return (
                <div key={index} className={`whitespace-pre-wrap ${textClass}`}>
                  {line}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
