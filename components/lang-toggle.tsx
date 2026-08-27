"use client";

import { useLang } from "@/lib/lang-context";

export function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      aria-label="Cambiar idioma"
      onClick={toggle}
      className="rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {lang.toUpperCase()}
    </button>
  );
}
