"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      aria-label="Cambiar tema"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="px-2 py-1 text-sm text-muted transition-colors hover:text-accent"
    >
      [{dark ? "dark" : "light"}]
    </button>
  );
}
