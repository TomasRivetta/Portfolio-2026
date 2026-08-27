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
    period: { es: "En curso", en: "In progress" },
    desc: {
      es: "Córdoba, Argentina. Formación en desarrollo de software, algoritmos, estructuras de datos, bases de datos y desarrollo web full stack.",
      en: "Córdoba, Argentina. Training in software development, algorithms, data structures, databases and full stack web development.",
    },
  },
  {
    id: "bachiller",
    title: {
      es: "Bachiller en Ciencias Naturales",
      en: "High School Diploma in Natural Sciences",
    },
    institution: "Instituto Parroquial Bernardo D'Elia",
    period: { es: "Completado", en: "Completed" },
    desc: {
      es: "Córdoba, Argentina.",
      en: "Córdoba, Argentina.",
    },
  },
];
