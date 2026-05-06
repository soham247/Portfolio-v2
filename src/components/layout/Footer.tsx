import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="p-4 flex items-center justify-between border-t px-24 bg-background mt-auto">
      <Button variant="outline" className="font-semibold rounded-2xl">
        Download CV
      </Button>
      <div>Socials</div>
    </footer>
  );
}
