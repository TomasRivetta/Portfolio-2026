const projects = [
    {
        id: 'manitas',
        image: 'assets/manitasApp.webp',
        imageAlt: {
            es: 'Captura del proyecto ManitasApp – Plataforma para Contratación de Servicios',
            en: 'Screenshot of ManitasApp – Service Hiring Platform'
        },
        title: {
            es: 'ManitasApp – Plataforma para Contratación de Servicios',
            en: 'ManitasApp – Service Hiring Platform'
        },
        type: {
            es: 'Proyecto de tesis – UTN FRC',
            en: 'Thesis project – UTN FRC'
        },
        desc: {
            es: 'Plataforma web que conecta clientes con profesionales de servicios. Gestión de usuarios, roles, contratos, disponibilidad y pagos. Desarrollo full stack con Angular (frontend) y Java con Spring Boot (backend). Persistencia de datos con PostgreSQL.',
            en: 'Web platform that connects clients with service professionals. User management, roles, contracts, availability and payments. Full stack development with Angular (frontend) and Java with Spring Boot (backend). Data persistence with PostgreSQL.'
        },
        tags: [
            { name: 'React', color: 'red' },
            { name: 'Tailwind CSS', color: 'teal' },
            { name: 'Python', color: 'orange' },
            { name: 'Django', color: 'green' },
            { name: 'PostgreSQL', color: 'indigo' }
        ],
        link: '#'
    },
    {
        id: 'funko',
        image: 'assets/funkoShop.webp',
        imageAlt: {
            es: 'Captura del proyecto FunkoShop – Ecommerce de Funko Shop',
            en: 'Screenshot of FunkoShop – Funko Pop E-Commerce'
        },
        title: {
            es: 'FunkoShop – Ecommerce de Funkos',
            en: 'FunkoShop – Funko Pop E-Commerce'
        },
        type: {
            es: 'Proyecto final – Codo a Codo 4.0',
            en: 'Final project – Codo a Codo 4.0'
        },
        desc: {
            es: 'Esta es una aplicación web que simula un E-Commerce real. Ofrece funcionalidades completas de creación, visualización, actualización y eliminación de productos (CRUD). Además, permite el registro y el inicio de sesión de usuarios, otorgando acceso al cliente a la parte administrativa para el manejo de la tienda online.',
            en: 'A web application that simulates a real E-Commerce. It offers full CRUD functionality for products (create, view, update, and delete). It also supports user registration and login, granting customers access to the admin panel for managing the online store.'
        },
        tags: [
            { name: 'React', color: 'red' },
            { name: 'Tailwind CSS', color: 'teal' },
            { name: 'Node', color: 'orange' }
        ],
        link: 'https://github.com/MarkoTeixido/FunkoshopCaC-Backend?tab=readme-ov-file'
    },
    {
        id: 'food',
        image: 'assets/foodReviewers.webp',
        imageAlt: {
            es: 'Captura del proyecto FoodReviewrs – Sitio de opiniones de comida',
            en: 'Screenshot of FoodReviewrs – Food review site'
        },
        title: {
            es: 'FoodReviewrs – Sitio donde podes dejar tus opiniones de lugares de comida a los que hayas ido',
            en: 'FoodReviewrs – Share your opinions about food places you\'ve visited'
        },
        type: {
            es: 'Proyecto final – Coder House, curso de python y django',
            en: 'Final project – Coder House, Python & Django course'
        },
        desc: {
            es: 'Un Sitio donde podes dejar tus opiniones de lugares de comida a los que hayas ido, contandole a los demas miembros de la comunidad tus experiencias, ya sean buenas o malas. Tambien vas a poder inspirarte y conocer lugares nuevos para visitar y contarnos tu experiencia. Calificacion final del proyecto: 10.',
            en: 'A site where you can share your opinions about food places you\'ve visited, telling other community members about your experiences, whether good or bad. You can also get inspired and discover new places to visit and share your experience. Final project grade: 10.'
        },
        tags: [
            { name: 'Python', color: 'red' },
            { name: 'Django', color: 'teal' }
        ],
        link: 'https://www.youtube.com/watch?v=WT-_OVER5b8'
    },
    {
        id: 'csharp',
        image: 'assets/proyectoCSharp.png',
        imageAlt: {
            es: 'Proyecto Final del curso de Python de CoderHouse',
            en: 'Final project of the Python course of CoderHouse'
        },
        title: {
            es: 'Proyecto Final del curso de C# de CoderHouse',
            en: 'Final project of the C# course of CoderHouse'
        },
        type: {
            es: 'Proyecto final – Coder House, curso de c#',
            en: 'Final project – Coder House, course of c#'
        },
        desc: {
                    es: 'Sistema de gestión desarrollado en Python y Flask como proyecto final de Coderhouse. Permite administrar entidades, operaciones y flujos de negocio mediante una arquitectura orientada a objetos y persistencia de datos. Incluye funcionalidades CRUD, validaciones y lógica de negocio aplicada en un caso real de gestión. Calificacion final del proyecto: 10.',
                    en: 'Management system developed in Python and Flask as a final project for Coderhouse. It allows the administration of entities, operations, and business flows through an object-oriented architecture and data persistence. It includes CRUD functionalities, validations, and business logic applied in a real-world management scenario.  Final project grade: 10.'
                },
        tags: [
            { name: 'C#', color: 'red' },
            { name: '.NET', color: 'teal' },
            { name: 'SQL', color: 'orange' }
        ],
        link: 'https://github.com/TomasRivetta/ProyectoFinal-CoderHouse-CSharp/tree/main/ProyectoFinalCoderHouseCSharp'
    },
    {
        id: 'tipApp',
        image: 'assets/tipApp.png',
        imageAlt: {
            es: 'Aplicación web TipApp',
            en: 'TipApp web application'
        },
        title: {
            es: 'TipApp – Calculadora de Propinas',
            en: 'TipApp – Tip Calculator'
        },
        type: {
            es: 'Aplicación web',
            en: 'Web application'
        },
        desc: {
            es: 'TipApp es una aplicación web que permite calcular y dividir propinas de forma rápida y sencilla entre varias personas. El usuario puede ingresar el total de la cuenta, seleccionar el porcentaje de propina y obtener automáticamente el monto por persona. La aplicación está diseñada con una interfaz clara, responsiva y orientada a la experiencia de usuario.',
            en: 'TipApp is a web application that allows users to calculate and split tips quickly and easily among multiple people. Users can enter the bill total, select the tip percentage, and automatically obtain the amount per person. The application features a clean, responsive, and user-focused interface.'
        },
        tags: [
            { name: 'React', color: 'orange' },
            { name: 'Tailwind CSS', color: 'blue' },
            { name: 'TypeScript', color: 'yellow' }
        ],
        link: 'https://tip-app-ten.vercel.app/'
    },
    {
        id: 'cuentasClaras',
        image: 'assets/cuentasClaras.png',
        imageAlt: {
            es: 'Aplicación web Cuentas Claras',
            en: 'Cuentas Claras web application'
        },
        title: {
            es: 'Cuentas Claras – Gestión y división de gastos',
            en: 'Cuentas Claras – Expense management and splitting'
        },
        type: {
            es: 'Aplicación web',
            en: 'Web application'
        },
        desc: {
            es: 'Cuentas Claras es una aplicación web desarrollada para simplificar la gestión y división de gastos en grupos. Permite registrar participantes, cargar consumos individuales y calcular automáticamente los balances para determinar quién debe pagar o recibir dinero. El enfoque está puesto en la claridad de la información y la experiencia de usuario, ofreciendo una interfaz intuitiva, rápida y totalmente responsiva. Este proyecto demuestra habilidades en desarrollo frontend moderno, manejo de estado y diseño centrado en el usuario.',
            en: 'Cuentas Claras is a web application designed to simplify group expense management and splitting. It allows users to register participants, log individual expenses, and automatically calculate balances to determine who owes or should receive money. The application focuses on clarity and user experience, providing an intuitive, fast, and fully responsive interface. This project showcases modern frontend development skills, state management, and user-centered design.'
        },
        tags: [
            { name: 'React', color: 'orange' },
            { name: 'Tailwind CSS', color: 'blue' },
            { name: 'TypeScript', color: 'yellow' }
        ],
        link: 'https://cuentas-claras-dun.vercel.app/'
    },
{
    id: 'pulsoFit',
    image: 'assets/pulsoFit.png',
    imageAlt: {
        es: 'Aplicación web PulsoFit',
        en: 'PulsoFit web application'
    },
    title: {
        es: 'PulsoFit – App de seguimiento de actividad física',
        en: 'PulsoFit – Fitness activity tracking app'
    },
    type: {
        es: 'Aplicación web',
        en: 'Web application'
    },
    desc: {
        es: 'PulsoFit es una aplicación web diseñada para ayudar a los usuarios a realizar un seguimiento de su actividad física y mantener una rutina de entrenamiento más organizada. Permite visualizar entrenamientos, registrar avances y acceder a una experiencia clara, dinámica y responsiva. El proyecto está enfocado en la usabilidad, el diseño moderno y la motivación del usuario, demostrando habilidades en desarrollo frontend, manejo de componentes y construcción de interfaces centradas en la experiencia de uso.',
        en: 'PulsoFit is a web application designed to help users track their physical activity and maintain a more organized workout routine. It allows users to view workouts, log progress, and enjoy a clear, dynamic, and responsive experience. The project focuses on usability, modern design, and user motivation, showcasing frontend development skills, component-based architecture, and user-centered interface design.'
    },
    tags: [
        { name: 'React', color: 'orange' },
        { name: 'Tailwind CSS', color: 'blue' },
        { name: 'TypeScript', color: 'yellow' }
    ],
    link: 'https://pulso-fit.vercel.app/login'
},
{
  id: 'CompaPc',
  image: 'assets/compaPc.png',
  imageAlt: {
    es: 'Aplicación web CompaPC',
    en: 'CompaPC web application'
  },
  title: {
    es: 'CompaPC – Comparador de precios de hardware',
    en: 'CompaPC – Hardware price comparison platform'
  },
  type: {
    es: 'Aplicación web',
    en: 'Web application'
  },
  desc: {
    es: 'CompaPC es una aplicación web que permite comparar precios de componentes de PC en distintas tiendas de Argentina. Centraliza información obtenida mediante scraping y APIs, normalizando productos para facilitar la búsqueda y comparación. El sistema está diseñado con una arquitectura modular que separa scraper, backend y frontend, permitiendo escalar la incorporación de nuevas tiendas. El proyecto destaca el manejo de datos reales, integración de servicios y construcción de interfaces enfocadas en la experiencia del usuario.',
    en: 'CompaPC is a web application that allows users to compare prices of PC hardware components across different stores in Argentina. It aggregates data using scraping and APIs, normalizing products to enable efficient search and comparison. The system is built with a modular architecture separating scrapers, backend, and frontend, making it scalable for adding new stores. The project highlights real data handling, service integration, and user-focused interface design.'
  },
  tags: [
    { name: 'Next.js', color: 'black' },
    { name: 'TypeScript', color: 'blue' },
    { name: 'Tailwind CSS', color: 'cyan' },
    { name: 'FastAPI', color: 'green' },
    { name: 'Python', color: 'yellow' }
  ],
  link: 'https://compa-pc.vercel.app/'
}
];

function renderProjects(lang, previewText) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    // Check if we are in the pages directory to fix asset loading
    const isPagesDir = window.location.pathname.includes('/pages/');
    const basePath = isPagesDir ? '../' : '';
    
    // Only show 3 projects on the home page
    const projectsToRender = isPagesDir ? projects : projects.slice(0, 3);

    grid.innerHTML = projectsToRender.map(project => `
        <article class="group bg-slate-50 dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col h-full">
            <div class="aspect-video w-full overflow-hidden bg-slate-800 relative">
                <img loading="lazy" width="600" height="400" alt="${project.imageAlt[lang]}" class="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500" src="${basePath}${project.image}" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <a class="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors" href="${project.link}" title="Preview" target="_blank" aria-label="Vista previa del proyecto">
                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                    </a>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">${project.title[lang]}</h3>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <span class="font-semibold text-primary">${project.type[lang]}</span>
                </p>
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">${project.desc[lang]}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tags.map(tag => `<span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-${tag.color}-100 text-${tag.color}-800 dark:bg-${tag.color}-900/30 dark:text-${tag.color}-300">${tag.name}</span>`).join('\n                    ')}
                </div>
                <div class="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-border-dark mt-auto">
                    <a class="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="${project.link}" target="_blank" aria-label="Abrir enlace del proyecto">
                        <span class="material-symbols-outlined text-[18px]">open_in_new</span>
                        <span>${previewText}</span>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}
');
}
