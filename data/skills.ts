export type SkillGroup = {
  key: string;
  color: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: "backend",
    color: "text-sky-400",
    items: ["Python", "FastAPI", "Django", "Flask", "REST APIs", "Pytest"],
  },
  {
    key: "data",
    color: "text-emerald-400",
    items: ["PostgreSQL", "MongoDB", "Pandas", "ETL", "Web Scraping", "OCDS"],
  },
  {
    key: "devops",
    color: "text-orange-400",
    items: ["Docker", "Git", "GitHub", "Linux", "CI/CD"],
  },
  {
    key: "frontend",
    color: "text-violet-400",
    items: ["React", "Angular", "TypeScript", "Tailwind CSS"],
  },
];
