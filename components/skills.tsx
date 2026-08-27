"use client";

import { useLang } from "@/lib/lang-context";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="bg-slate-50 px-6 py-24 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.key} delay={i * 0.08}>
              <div className="card h-full rounded-2xl p-8">
                <h3 className={`mb-6 text-2xl font-bold ${group.color}`}>
                  {t.skills.groups[group.key as keyof typeof t.skills.groups]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
