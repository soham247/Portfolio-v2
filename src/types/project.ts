import { StaticImageData } from "next/image";

export interface Project {
  image: StaticImageData | string;
  name: string;
  technologies: string[];
  description: string;
  liveLink: string;
  gitHubLink: string;
}