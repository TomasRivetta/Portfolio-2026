"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const categories: (ProjectCategory | "all")[] = ["all", "backend", "fullstack", "frontend", "learning"];

export function Projects() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.categories.includes(active))),
    [active]
  );

  return (
    <section id="proyectos" className="bg-slate-50 px-6 py-24 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === cat
                  ? "bg-sky-500 text-white"
                  : "card text-slate-600 hover:border-sky-400 dark:text-slate-300"
              }`}
            >
              {categoryLabels[cat][lang]}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.1}>
              <article className="card group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity group-hover:opacity-100"
                  >
                    <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                      <ExternalLink className="h-4 w-4" />
                      {t.projects.preview}
                    </span>
                  </a>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title[lang]}</h3>
                  <p className="mb-2 text-sm font-semibold text-sky-500 dark:text-sky-400">
                    {project.type[lang]}
                  </p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.desc[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge !py-1 !text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
