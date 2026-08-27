export type ProjectCategory = "backend" | "fullstack" | "frontend" | "learning";

export type Project = {
  id: string;
  image: string;
  title: { es: string; en: string };
  type: { es: string; en: string };
  desc: { es: string; en: string };
  tags: string[];
  categories: ProjectCategory[];
  link: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "compaPc",
    image: "/assets/compaPc.png",
    title: {
      es: "CompaPC – Comparador de precios de hardware",
      en: "CompaPC – Hardware price comparison platform",
    },
    type: { es: "Proyecto personal", en: "Personal project" },
    desc: {
      es: "Compara precios de componentes de PC en distintas tiendas de Argentina. Centraliza información obtenida mediante scraping y APIs, normalizando productos con una arquitectura modular que separa scraper, backend y frontend.",
      en: "Compares PC hardware prices across stores in Argentina. Aggregates data via scraping and APIs, normalizing products with a modular architecture separating scraper, backend and frontend.",
    },
    tags: ["Next.js", "TypeScript", "FastAPI", "Python"],
    categories: ["backend", "fullstack"],
    link: "https://compa-pc.vercel.app/",
    featured: true,
  },
  {
    id: "manitas",
    image: "/assets/manitasApp.webp",
    title: {
      es: "ManitasApp – Plataforma para Contratación de Servicios",
      en: "ManitasApp – Service Hiring Platform",
    },
    type: { es: "Proyecto de tesis – UTN FRC", en: "Thesis project – UTN FRC" },
    desc: {
      es: "Plataforma web que conecta clientes con profesionales de servicios. Gestión de usuarios, roles, contratos, disponibilidad y pagos. Backend en Python con persistencia en PostgreSQL.",
      en: "Web platform that connects clients with service professionals. User management, roles, contracts, availability and payments. Python backend with PostgreSQL persistence.",
    },
    tags: ["React", "Tailwind CSS", "Python", "Django", "PostgreSQL"],
    categories: ["backend", "fullstack"],
    link: "#",
    featured: true,
  },
  {
    id: "food",
    image: "/assets/foodReviewers.webp",
    title: {
      es: "FoodReviewrs – Opiniones de lugares de comida",
      en: "FoodReviewrs – Food place reviews",
    },
    type: { es: "Proyecto final – Coder House", en: "Final project – Coder House" },
    desc: {
      es: "Sitio donde los usuarios comparten opiniones sobre lugares de comida que visitaron. Desarrollado con Python y Django. Calificación final: 10.",
      en: "A site where users share opinions about food places they've visited. Built with Python and Django. Final grade: 10.",
    },
    tags: ["Python", "Django"],
    categories: ["backend"],
    link: "https://www.youtube.com/watch?v=WT-_OVER5b8",
  },
  {
    id: "funko",
    image: "/assets/funkoShop.webp",
    title: { es: "FunkoShop – Ecommerce de Funkos", en: "FunkoShop – Funko Pop E-Commerce" },
    type: { es: "Proyecto final – Codo a Codo 4.0", en: "Final project – Codo a Codo 4.0" },
    desc: {
      es: "Aplicación que simula un E-Commerce real, con CRUD completo de productos, registro e inicio de sesión, y panel administrativo para la tienda.",
      en: "A web application that simulates a real E-Commerce, with full product CRUD, registration/login, and an admin panel for the store.",
    },
    tags: ["React", "Tailwind CSS", "Node"],
    categories: ["fullstack"],
    link: "https://github.com/MarkoTeixido/FunkoshopCaC-Backend?tab=readme-ov-file",
  },
  {
    id: "cuentasClaras",
    image: "/assets/CuentasClaras.png",
    title: {
      es: "Cuentas Claras – Gestión y división de gastos",
      en: "Cuentas Claras – Expense management and splitting",
    },
    type: { es: "Aplicación web", en: "Web application" },
    desc: {
      es: "Simplifica la gestión y división de gastos en grupos, calculando automáticamente los balances entre participantes.",
      en: "Simplifies group expense management and splitting, automatically calculating balances between participants.",
    },
    tags: ["React", "Tailwind CSS", "TypeScript"],
    categories: ["frontend"],
    link: "https://cuentas-claras-dun.vercel.app/",
  },
  {
    id: "pulsoFit",
    image: "/assets/pulsoFit.png",
    title: {
      es: "PulsoFit – App de seguimiento de actividad física",
      en: "PulsoFit – Fitness activity tracking app",
    },
    type: { es: "Aplicación web", en: "Web application" },
    desc: {
      es: "Ayuda a los usuarios a hacer seguimiento de su actividad física y mantener una rutina de entrenamiento organizada.",
      en: "Helps users track their physical activity and maintain an organized workout routine.",
    },
    tags: ["React", "Tailwind CSS", "TypeScript"],
    categories: ["frontend"],
    link: "https://pulso-fit.vercel.app/login",
  },
  {
    id: "tipApp",
    image: "/assets/tipApp.png",
    title: { es: "TipApp – Calculadora de Propinas", en: "TipApp – Tip Calculator" },
    type: { es: "Aplicación web", en: "Web application" },
    desc: {
      es: "Calcula y divide propinas de forma rápida entre varias personas, con una interfaz clara y responsiva.",
      en: "Calculates and splits tips quickly among multiple people, with a clean and responsive interface.",
    },
    tags: ["React", "Tailwind CSS", "TypeScript"],
    categories: ["frontend"],
    link: "https://tip-app-ten.vercel.app/",
  },
  {
    id: "csharp",
    image: "/assets/proyectoCSharp.png",
    title: {
      es: "Sistema de gestión – Coder House",
      en: "Management system – Coder House",
    },
    type: { es: "Proyecto final – Coder House", en: "Final project – Coder House" },
    desc: {
      es: "Sistema de gestión con arquitectura orientada a objetos, funcionalidades CRUD y lógica de negocio aplicada a un caso real. Calificación final: 10.",
      en: "Management system with object-oriented architecture, CRUD functionality and business logic applied to a real case. Final grade: 10.",
    },
    tags: ["C#", ".NET", "SQL"],
    categories: ["learning"],
    link: "https://github.com/TomasRivetta/ProyectoFinal-CoderHouse-CSharp/tree/main/ProyectoFinalCoderHouseCSharp",
  },
];

export const categoryLabels: Record<ProjectCategory | "all", { es: string; en: string }> = {
  all: { es: "Todos", en: "All" },
  backend: { es: "Backend", en: "Backend" },
  fullstack: { es: "Full Stack", en: "Full Stack" },
  frontend: { es: "Frontend", en: "Frontend" },
  learning: { es: "Aprendizaje", en: "Learning" },
};
