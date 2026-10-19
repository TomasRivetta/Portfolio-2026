"use client";

import { useLang } from "@/lib/lang-context";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experiencia" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          cmd="git log --oneline"
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="space-y-6">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="card p-6">
                <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-bold">
                    {item.role[lang]} <span className="text-accent">@ {item.company}</span>
                    {item.current && <span className="ml-2 text-xs text-accent">(HEAD)</span>}
                  </h3>
                  <span className="text-sm text-muted">{item.period[lang]}</span>
                </div>
                <ul className="space-y-2 text-sm text-fg/80">
                  {item.bullets[lang].map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-accent">+</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            cmd="ls education/"
            title={t.education.title}
            subtitle={t.education.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="card h-full p-6">
                  <h4 className="mb-1 font-bold">{item.title[lang]}</h4>
                  <p className="text-accent">{item.institution}</p>
                  <p className="mb-3 text-sm text-muted">{item.period[lang]}</p>
                  <p className="text-sm text-fg/80">{item.desc[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
