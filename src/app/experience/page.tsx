import { Experience } from "@/components/Experience";
import BackButton from "@/components/ui/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Experience of Soham Sadhukhan",
};

export default function ExperiencePage() {
    return (
        <div className="w-full min-h-screen px-12 py-16">
            <BackButton />
            <Experience />
        </div>
    );
}