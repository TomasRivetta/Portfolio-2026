export type Contribution = {
  id: string;
  icon: "server" | "workflow" | "database";
  title: { es: string; en: string };
  desc: { es: string; en: string };
  tags: string[];
};

export const contributions: Contribution[] = [
  {
    id: "apis",
    icon: "server",
    title: { es: "APIs & Backend", en: "APIs & Backend" },
    desc: {
      es: "Diseño y desarrollo de APIs REST robustas y mantenibles para productos y herramientas internas.",
      en: "Design and development of robust, maintainable REST APIs for products and internal tools.",
    },
    tags: ["Python", "FastAPI", "Django", "Docker"],
  },
  {
    id: "automation",
    icon: "workflow",
    title: { es: "Automatización & Datos", en: "Automation & Data" },
    desc: {
      es: "Scrapers, fetchers y pipelines que extraen, normalizan y procesan grandes volúmenes de datos.",
      en: "Scrapers, fetchers and pipelines that extract, normalize and process large volumes of data.",
    },
    tags: ["Web Scraping", "ETL", "Pandas"],
  },
  {
    id: "integrations",
    icon: "database",
    title: { es: "Integraciones & Estándares", en: "Integrations & Standards" },
    desc: {
      es: "Integración de fuentes de datos gubernamentales bajo estándares abiertos como OCDS.",
      en: "Integration of government data sources under open standards such as OCDS.",
    },
    tags: ["OCDS", "PostgreSQL", "MongoDB"],
  },
];
