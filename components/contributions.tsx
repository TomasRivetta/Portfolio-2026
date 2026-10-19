"use client";

import { useLang } from "@/lib/lang-context";
import { contributions } from "@/data/contributions";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Contributions() {
  const { t, lang } = useLang();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          cmd="man help"
          title={t.contributions.title}
          subtitle={t.contributions.subtitle}
        />

        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {contributions.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05} className="bg-bg">
              <div className="h-full p-6">
                <p className="mb-2 text-xs text-muted">0{i + 1}</p>
                <h3 className="mb-3 font-bold text-accent">{item.title[lang]}</h3>
                <p className="mb-5 text-sm leading-relaxed text-fg/80">{item.desc[lang]}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
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
