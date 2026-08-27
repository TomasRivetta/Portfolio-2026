"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { profile } from "@/data/profile";
import { Reveal } from "./reveal";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="flex min-h-screen items-center px-6 pb-20 pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-500 dark:text-sky-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
              {t.hero.badge}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mb-8 text-5xl font-extrabold leading-tight lg:text-7xl">
              {t.hero.greeting} <br />
              <span className="gradient-text">{t.hero.role}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {t.hero.desc}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-400"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-sky-400 dark:border-slate-700"
              >
                {t.hero.contactMe}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex gap-6 text-slate-500 dark:text-slate-400">
              <a href={profile.github} target="_blank" className="transition hover:text-primary">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" className="transition hover:text-primary">
                LinkedIn
              </a>
              <a href={profile.cv} target="_blank" className="transition hover:text-primary">
                {t.hero.downloadCV}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />
          <Image
            src="/assets/profile.webp"
            alt={profile.name}
            width={640}
            height={640}
            priority
            className="relative rounded-3xl border border-slate-200 shadow-2xl shadow-sky-500/10 dark:border-slate-700 section-glow"
          />
        </Reveal>
      </div>
    </section>
  );
}
