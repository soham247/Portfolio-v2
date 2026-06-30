import BackButton from "@/components/ui/BackButton";
import { skillCategories } from "@/data/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Projects of Soham Sadhukhan",
};

export default function ProjectsPage() {
    return (
        <div className="w-full min-h-screen px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 flex flex-col gap-12">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <BackButton />

                <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-8 gap-4">
                    <p className="text-sm font-mono max-w-md text-text-secondary">
                        Coming Soon...
                    </p>
                </div>
            </div>
        </div>
    );
}
