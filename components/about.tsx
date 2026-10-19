"use client";

import { useLang } from "@/lib/lang-context";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  const { t } = useLang();

  return (
    <section id="sobre-mi" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading cmd="cat about.md" title={t.about.title} subtitle={t.about.subtitle} />

        <Reveal className="max-w-2xl space-y-5 leading-relaxed text-fg/80">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </Reveal>
      </div>
    </section>
  );
}
