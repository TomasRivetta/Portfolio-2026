"use client";

import { useLang } from "@/lib/lang-context";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 px-6 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-slate-500">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="text-slate-400 dark:text-slate-600">{t.footer.designed}</p>
      </div>
    </footer>
  );
}
