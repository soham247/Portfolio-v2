"use client";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { FiArrowLeft } from "react-icons/fi";


export default function BackButton({
    className = ""
}: {
    className?: string;
}) {
    const router = useRouter();
    const handleBack = () => {
        router.push("/");
    };

    return (
        <Button variant="outline" onClick={handleBack}
            className={`${className} w-fit cursor-pointer inline-flex items-center gap-2 text-xs font-mono text-foreground/80 hover:text-foreground transition-colors group/back mb-4 bg-card/20 hover:bg-muted/10`}>
            <FiArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover/back:-translate-x-1" />
            <span>Back to Home</span>
        </Button>
    );
}