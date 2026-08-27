export type Lang = "es" | "en";

export type Dictionary = {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    greeting: string;
    role: string;
    desc: string;
    viewProjects: string;
    contactMe: string;
    downloadCV: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  contributions: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    subtitle: string;
    groups: {
      backend: string;
      data: string;
      devops: string;
      frontend: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
  };
  education: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    preview: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    subjectOptions: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    directly: string;
  };
  footer: {
    designed: string;
    rights: string;
  };
};

export const dictionaries: Record<Lang, Dictionary> = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      badge: "Disponible para nuevos proyectos",
      greeting: "Hey, soy Tomas",
      role: "Python Developer",
      desc: "Python Developer especializado en backend, automatización y extracción de datos. Actualmente trabajo en B2Gov, desarrollando pipelines de datos, scrapers y soluciones basadas en el estándar OCDS.",
      viewProjects: "Ver proyectos",
      contactMe: "Contactarme",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      subtitle: "Backend Developer orientado a automatización y procesamiento de datos",
      p1: "Soy Python Developer y estudiante de la Tecnicatura Universitaria en Programación en la UTN FRC.",
      p2: "Actualmente trabajo en B2Gov, desarrollando soluciones para procesamiento de datos gubernamentales y licitaciones públicas utilizando el estándar OCDS.",
      p3: "Trabajo diariamente construyendo scrapers, fetchers, APIs REST y pipelines de datos utilizando Python, FastAPI, PostgreSQL y Docker.",
      p4: "Me interesa especialmente backend engineering, arquitectura de software, data engineering y sistemas escalables.",
    },
    contributions: {
      title: "Cómo puedo ayudarte",
      subtitle: "Áreas donde aporto más valor a un equipo o proyecto",
    },
    skills: {
      title: "Stack Tecnológico",
      subtitle: "Tecnologías y herramientas que utilizo diariamente",
      groups: {
        backend: "Backend",
        data: "Data",
        devops: "DevOps",
        frontend: "Frontend",
      },
    },
    experience: {
      title: "Experiencia",
      subtitle: "Trayectoria profesional",
    },
    education: {
      title: "Educación",
      subtitle: "Formación académica",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos de mis proyectos recientes",
      preview: "Ver",
    },
    contact: {
      title: "Trabajemos juntos",
      subtitle: "Disponible para oportunidades backend, automatización y desarrollo Python.",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      subjectOptions: ["Inquietud general", "Propuesta de proyecto", "Trabajo freelance", "Otro"],
      message: "Mensaje",
      messagePlaceholder: "Contame sobre tu proyecto...",
      submit: "Enviar mensaje",
      directly: "O escribime directamente",
    },
    footer: {
      designed: "Diseñado y desarrollado por Tomas Rivetta",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      badge: "Available for new projects",
      greeting: "Hey, I'm Tomas",
      role: "Python Developer",
      desc: "Python Developer specialized in backend, automation and data extraction. Currently working at B2Gov, building data pipelines, scrapers and solutions based on the OCDS standard.",
      viewProjects: "View projects",
      contactMe: "Contact me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About me",
      subtitle: "Backend Developer focused on automation and data processing",
      p1: "I'm a Python Developer and student of the University Technical Degree in Programming at UTN FRC.",
      p2: "I currently work at B2Gov, building solutions for government data processing and public tenders using the OCDS standard.",
      p3: "I work daily building scrapers, fetchers, REST APIs and data pipelines using Python, FastAPI, PostgreSQL and Docker.",
      p4: "I'm especially interested in backend engineering, software architecture, data engineering and scalable systems.",
    },
    contributions: {
      title: "How I can help",
      subtitle: "Areas where I bring the most value to a team or project",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Technologies and tools I use daily",
      groups: {
        backend: "Backend",
        data: "Data",
        devops: "DevOps",
        frontend: "Frontend",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Professional background",
    },
    education: {
      title: "Education",
      subtitle: "Academic background",
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my recent projects",
      preview: "View",
    },
    contact: {
      title: "Let's work together",
      subtitle: "Available for backend, automation and Python development opportunities.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      subjectOptions: ["General inquiry", "Project proposal", "Freelance work", "Other"],
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      directly: "Or reach me directly",
    },
    footer: {
      designed: "Designed and developed by Tomas Rivetta",
      rights: "All rights reserved.",
    },
  },
};
