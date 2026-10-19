"use client";

import { useLang } from "@/lib/lang-context";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading cmd="ls stack/" title={t.skills.title} subtitle={t.skills.subtitle} />

        <Reveal className="card p-6">
          <dl className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.key} className="grid gap-1 md:grid-cols-[110px_1fr] md:gap-4">
                <dt className="text-accent">
                  {t.skills.groups[group.key as keyof typeof t.skills.groups].toLowerCase()}/
                </dt>
                <dd className="flex flex-wrap gap-x-4 gap-y-1 text-fg/80">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
