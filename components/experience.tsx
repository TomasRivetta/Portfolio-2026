"use client";

import { useLang } from "@/lib/lang-context";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="relative space-y-8 border-l border-slate-200 pl-10 dark:border-slate-700">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1} className="relative">
              <div
                className={`absolute -left-[3.15rem] top-2 h-4 w-4 rounded-full ${
                  item.current ? "bg-sky-400" : "bg-slate-400 dark:bg-slate-600"
                }`}
              />
              <div className="card rounded-2xl p-8">
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{item.role[lang]}</h3>
                    <p className="font-semibold text-sky-500 dark:text-sky-400">{item.company}</p>
                  </div>
                  <span className="w-fit rounded-full bg-sky-500/10 px-4 py-2 text-sm text-sky-500 dark:text-sky-400">
                    {item.period[lang]}
                  </span>
                </div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  {item.bullets[lang].map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-sky-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading title={t.education.title} subtitle={t.education.subtitle} />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <div className="card h-full rounded-2xl p-8">
                  <h4 className="mb-1 text-xl font-bold">{item.title[lang]}</h4>
                  <p className="mb-2 font-semibold text-sky-500 dark:text-sky-400">
                    {item.institution}
                  </p>
                  <span className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.period[lang]}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
