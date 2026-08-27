"use client";

import { Server, Workflow, Database } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { contributions } from "@/data/contributions";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const icons = { server: Server, workflow: Workflow, database: Database };

export function Contributions() {
  const { t, lang } = useLang();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.contributions.title} subtitle={t.contributions.subtitle} />

        <div className="grid gap-8 md:grid-cols-3">
          {contributions.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.id} delay={i * 0.1}>
                <div className="card h-full rounded-2xl p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 dark:text-sky-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title[lang]}</h3>
                  <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.desc[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
