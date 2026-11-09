export type SkillGroup = {
  key: string;
  color: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: "backend",
    color: "text-sky-400",
    items: ["Python", "FastAPI", "Django", "Flask", "C#", ".NET", "Windows Forms", "Java", "Spring Boot", "REST APIs"],
  },
  {
    key: "data",
    color: "text-emerald-400",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Pandas", "ETL", "Web Scraping", "OCDS"],
  },
  {
    key: "devops",
    color: "text-orange-400",
    items: ["Docker", "Git", "GitHub", "Linux", "CI/CD"],
  },
  {
    key: "frontend",
    color: "text-violet-400",
    items: ["React", "Angular", "TypeScript", "Astro", "WordPress", "Tailwind CSS"],
  },
  {
    key: "testing",
    color: "text-rose-400",
    items: ["Pytest", "JUnit", "Mockito"],
  },
  {
    key: "tools",
    color: "text-amber-400",
    items: ["Jira", "ClickUp", "Scrum", "Kanban"],
  },
];
