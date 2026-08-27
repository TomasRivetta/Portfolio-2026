export type ExperienceItem = {
  id: string;
  role: { es: string; en: string };
  company: string;
  period: { es: string; en: string };
  current: boolean;
  bullets: { es: string[]; en: string[] };
};

export const experience: ExperienceItem[] = [
  {
    id: "b2gov",
    role: { es: "Python Developer", en: "Python Developer" },
    company: "B2Gov",
    period: { es: "2026 — Actualidad", en: "2026 — Present" },
    current: true,
    bullets: {
      es: [
        "Desarrollo y mantenimiento de scrapers y fetchers para extracción de licitaciones públicas.",
        "Implementación de releases bajo el estándar OCDS.",
        "Automatización de pipelines de procesamiento y normalización de datos.",
        "Desarrollo de APIs y herramientas internas utilizando Python y FastAPI.",
        "Optimización de procesos de extracción masiva de datos.",
      ],
      en: [
        "Development and maintenance of scrapers and fetchers for public tender extraction.",
        "Implementation of releases under the OCDS standard.",
        "Automation of data processing and normalization pipelines.",
        "Development of internal APIs and tools using Python and FastAPI.",
        "Optimization of large-scale data extraction processes.",
      ],
    },
  },
  {
    id: "freelance",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    company: "Freelance",
    period: { es: "2024 — 2026", en: "2024 — 2026" },
    current: false,
    bullets: {
      es: [
        "Desarrollo de aplicaciones web para clientes de diversos sectores.",
        "Uso de tecnologías como TypeScript, React, Angular, Java y Spring Boot.",
        "Implementación de APIs REST, gestión de usuarios, roles y contratos.",
        "Control de versiones con Git y GitHub, trabajo bajo metodología Scrum.",
      ],
      en: [
        "Development of web applications for clients across various industries.",
        "Use of technologies such as TypeScript, React, Angular, Java and Spring Boot.",
        "Implementation of REST APIs, user management, roles and contracts.",
        "Version control with Git and GitHub, working under Scrum methodology.",
      ],
    },
  },
];
