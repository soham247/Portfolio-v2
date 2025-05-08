import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "express",
  "prisma",
  "postgresql",
  "tailwindcss",
  "nextdotjs",
  "nodedotjs",
  "mongodb",
  "shadcnui"
];

export function TopSkillsIconCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/pink`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden -mb-20">
      <IconCloud images={images} />
    </div>
  );
}
