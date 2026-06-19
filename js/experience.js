const experiences = [
    {
        id: 'freelance',
        title: {
            es: 'Desarrollador Full Stack',
            en: 'Full Stack Developer'
        },
        date: {
            es: 'Actualmente',
            en: 'Currently'
        },
        company: 'Freelance',
        descriptions: {
            es: [
                'Desarrollo de aplicaciones web y móviles para clientes de diversos sectores.',
                'Uso de tecnologías como TypeScript, Angular, Java, Spring Boot y bases de datos SQL y NoSQL.',
                'Implementación de APIs REST, gestión de usuarios, roles y contratos.',
                'Control de versiones con Git y GitHub, trabajo bajo metodología Scrum con Jira.'
            ],
            en: [
                'Development of web and mobile applications for clients from various sectors.',
                'Use of technologies such as Python, Django, FastAPI, Flask and SQL and NoSQL databases.',
                'Implementation of REST APIs, user management, roles and contracts.',
                'Version control with Git and GitHub, working under Scrum methodology with Jira.'
            ]
        },
        id: 'b2gov',
        title: {
            es: 'Desarrollador Backend en Python',
            en: 'Backend Developer in Python'
        },
        date: {
            es: '05/2026 - Actual',
            en: '05/2026 - Current'
        },
        company: 'B2Gov',
        descriptions: {
            es: [
                'Desarrollo de API para la creación, edición y consulta de proyectos de presupuesto participativo con sistema de votación.',
                'Uso de tecnologías como Python y MongoDB.',
                'Desarrollo de APIs REST, gestión de usuarios, roles y contratos.',
                'Control de versiones con Git y GitHub, trabajo bajo metodología Scrum.'
            ],
            en: [
                'Development of API for creation, editing and consultation of participatory budget projects with voting system.',
                'Use of technologies such as Python and MongoDB.',
                'Development of REST APIs, user management, roles and contracts.',
                'Version control with Git and GitHub, working under Scrum methodology with Jira.'
            ]
        }
    }
];

function renderExperience(lang) {
    const container = document.getElementById('experience-grid');
    if (!container) return;

    container.innerHTML = `
        <div class="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-border-dark"></div>
        ${experiences.map(exp => `
            <div class="relative pl-8 mb-6 last:mb-0">
                <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-white dark:bg-surface-dark"></div>
                <div class="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 class="text-lg font-bold text-slate-900 dark:text-white">${exp.title[lang]}</h4>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary w-fit">${exp.date[lang]}</span>
                  </div>
                  <p class="text-slate-700 dark:text-slate-300 font-medium mb-3">${exp.company}</p>
                  <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    ${exp.descriptions[lang].map(desc => `<li>${desc}</li>`).join('')}
                  </ul>
                </div>
            </div>
        `).join('')}
    `;
}
