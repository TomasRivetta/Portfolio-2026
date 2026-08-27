"use client";

import { useLang } from "@/lib/lang-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  const { t } = useLang();

  return (
    <section id="sobre-mi" className="bg-slate-50 px-6 py-24 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <Reveal className="space-y-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </Reveal>
      </div>
    </section>
  );
}
