"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
    <section id="proyectos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading cmd="ls projects/" title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={active === cat ? "text-accent" : "text-muted hover:text-fg"}
            >
              [{categoryLabels[cat][lang].toLowerCase()}]
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.05}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="card group flex h-full flex-col transition-colors hover:border-accent"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-line">
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top grayscale transition group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1 font-bold group-hover:text-accent">{project.title[lang]}</h3>
                  <p className="mb-3 text-xs text-muted">{project.type[lang]}</p>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-fg/80">
                    {project.desc[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
