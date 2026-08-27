"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";

const sections = [
  { id: "sobre-mi", key: "about" as const },
  { id: "skills", key: "skills" as const },
  { id: "experiencia", key: "experience" as const },
  { id: "proyectos", key: "projects" as const },
  { id: "contacto", key: "contact" as const },
];

export function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-[#0b1120]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-bold">
          {profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="transition hover:text-primary">
              {t.nav[s.key]}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />
          <a
            href="#contacto"
            className="ml-3 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className="p-2 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-[#0b1120] md:hidden">
          <nav className="flex flex-col gap-4 text-slate-600 dark:text-slate-300">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="transition hover:text-primary"
              >
                {t.nav[s.key]}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
