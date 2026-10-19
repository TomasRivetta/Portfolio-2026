"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { profile } from "@/data/profile";
import { Reveal } from "./reveal";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="flex min-h-screen items-center px-6 pb-16 pt-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_260px]">
        <div>
          <Reveal>
            <p className="mb-2 text-sm text-muted">
              <span className="text-accent">$</span> whoami
            </p>
            <h1 className="mb-1 text-4xl font-bold leading-tight lg:text-5xl">
              {t.hero.greeting}
            </h1>
            <p className="mb-8 text-xl text-accent cursor">
              {t.hero.role} · {profile.location}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-2 text-sm text-muted">
              <span className="text-accent">$</span> cat README.md
            </p>
            <p className="mb-8 max-w-xl leading-relaxed text-fg/80">{t.hero.desc}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-2 text-sm text-muted">
              <span className="text-accent">$</span> ls links/
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#proyectos" className="hover:text-accent">
                [{t.hero.viewProjects}]
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
                [github]
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                [linkedin]
              </a>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="hover:text-accent">
                [{t.hero.downloadCV}]
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Image
            src="/assets/profile.webp"
            alt={profile.name}
            width={520}
            height={520}
            priority
            className="w-full border border-line grayscale transition hover:grayscale-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
