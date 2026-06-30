"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiTerminal } from "react-icons/fi";

export function TerminalAnimation() {
  const pathname = usePathname();
  const [terminalText, setTerminalText] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      `guest@soham:~$ locate ${pathname || "/page"}`,
      `[searching] scanning index database...`,
      `[warning] path "${pathname || "/page"}" is not resolved in routing tables.`,
      `Error 404: RESOURCE_NOT_FOUND`,
      `guest@soham:~$ help --suggest`,
      `Suggestions:`,
      `  - Home (/) - The core entry point.`,
      `  - Experience (/experience) - Professional history.`,
      `  - Skills (/skills) - Technology stack.`,
      `guest@soham:~$ _`,
    ];

    let timer: ReturnType<typeof setTimeout>;
    let currentLineIndex = 1;

    const typeNextLine = () => {
      if (currentLineIndex < lines.length) {
        const lineToAppend = lines[currentLineIndex];
        setTerminalText((prev) => [...prev, lineToAppend]);
        currentLineIndex++;
        timer = setTimeout(typeNextLine, 180);
      }
    };

    timer = setTimeout(() => {
      setTerminalText([lines[0]]);
      timer = setTimeout(typeNextLine, 180);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
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
      <div className="p-5 flex-1 flex flex-col gap-2 font-mono text-text-secondary leading-relaxed overflow-y-auto">
        {terminalText.map((line, index) => {
          if (!line) return null;
          const isCommand = line.startsWith("guest@soham");
          const isError = line.includes("Error 404") || line.includes("[warning]");
          const isSuggestion = line.startsWith("  -");

          let textClass = "text-muted-foreground";
          if (isCommand) textClass = "text-primary font-semibold";
          else if (isError) textClass = "text-destructive font-semibold";
          else if (isSuggestion) textClass = "text-foreground font-medium pl-2";

          return (
            <div key={index} className={`whitespace-pre-wrap ${textClass}`}>
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
}
