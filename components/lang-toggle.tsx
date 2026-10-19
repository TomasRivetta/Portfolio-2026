"use client";

import { useLang } from "@/lib/lang-context";

export function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      aria-label="Cambiar idioma"
      onClick={toggle}
      className="px-2 py-1 text-sm text-muted transition-colors hover:text-accent"
    >
      [{lang}]
    </button>
  );
}
