export interface Project {
  title: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Jeevan Verse",
    image:
      "https://res.cloudinary.com/dbafirupc/image/upload/v1774750130/jeevanverse_bjwqry.png",
    liveUrl: "https://jeevan-verse.vercel.app/",
    githubUrl: "https://github.com/Dutta2005/Jeevan-verse",
    description:
      "Find symptoms, request blood, join discussions, and support health campaigns—all in one place.",
    tags: ["MERN", "Socket.io", "Tailwind"],
  },
  {
    title: "Learntrix",
    image:
      "https://res.cloudinary.com/dbafirupc/image/upload/v1774750280/Screenshot_2026-03-29_074059_xthpyf.png",
    liveUrl: "https://learntrix-ai.vercel.app/",
    githubUrl: "https://github.com/soham247/learntrix-ai",
    description:
      "Transform YouTube videos and PDF documents into interactive flashcards, responsive quizzes, and intelligent chat assistants.",
    tags: ["Next.js", "FastAPI", "Gemini", "Supabase"],
  },
];
