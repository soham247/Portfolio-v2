import { Experience } from "@/components/Experience";
import BackButton from "@/components/ui/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Experience of Soham Sadhukhan",
};

export default function ExperiencePage() {
    return (
        <div className="w-full min-h-screen px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
            <BackButton />
            <Experience />
        </div>
    );
}