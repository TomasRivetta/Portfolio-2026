"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
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
    <header className="fixed top-0 z-50 w-full border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-sm font-bold">
          <span className="text-accent">tomas@portfolio</span>
          <span className="text-muted">:~$</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-muted transition hover:text-accent">
              ./{t.nav[s.key].toLowerCase()}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <LangToggle />
          <ThemeToggle />
        </div>

        <button
          className="px-2 py-1 text-sm text-muted md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          [{open ? "x" : "menu"}]
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="text-muted transition hover:text-accent"
              >
                ./{t.nav[s.key].toLowerCase()}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
