"use client";

import { useLang } from "@/lib/lang-context";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 md:flex-row">
        <p>
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p>
          <span className="text-accent">$</span> exit 0
        </p>
      </div>
    </footer>
  );
}
