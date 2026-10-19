export type EducationItem = {
  id: string;
  title: { es: string; en: string };
  institution: string;
  period: { es: string; en: string };
  desc: { es: string; en: string };
};

export const education: EducationItem[] = [
  {
    id: "utn",
    title: {
      es: "Tecnicatura Universitaria en Programación",
      en: "University Technical Degree in Programming",
    },
    institution: "Universidad Tecnológica Nacional – F.R.C.",
    period: { es: "Completado", en: "Completed" },
    desc: {
      es: "Córdoba, Argentina. Formación en desarrollo de software, algoritmos, estructuras de datos, bases de datos y desarrollo web full stack.",
      en: "Córdoba, Argentina. Training in software development, algorithms, data structures, databases and full stack web development.",
    },
  },
  {
    id: "ispc",
    title: {
      es: "Tecnico universitario en Ciencia de datos e Inteligencia Artificial",
      en: "University Technician in Data Science and Artificial Intelligence",
    },
    institution: "Instituto Superior Politécnico Córdoba - ISPC",
    period: { es: "En Curso", en: "In Progress" },
    desc: {
      es: "Córdoba, Argentina.",
      en: "Córdoba, Argentina.",
    },
  },
];
