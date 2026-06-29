export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] p-4">
      <div className="w-full max-w-[280px] p-4 border border-border bg-card/30 backdrop-blur-sm flex flex-col gap-3 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-border pb-1.5 text-[10px] text-muted-foreground select-none">
          <span>SYSTEM_LOAD</span>
          <span className="animate-pulse size-1.5 rounded-full bg-primary" />
        </div>
        <div className="flex items-center gap-1.5 text-foreground/80">
          <span className="text-primary font-semibold select-none animate-pulse">&gt;</span>
          <span>fetching resources...</span>
        </div>
        <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-pulse rounded-full" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
