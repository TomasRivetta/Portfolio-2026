"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { profile } from "@/data/profile";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: t.contact.subjectOptions[0] as string,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `[${form.subject}] Contacto desde el portfolio`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <Reveal>
          <form onSubmit={handleSubmit} className="card grid gap-6 rounded-2xl p-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {t.contact.name}
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none focus:border-sky-400 dark:border-slate-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {t.contact.email}
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none focus:border-sky-400 dark:border-slate-700"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {t.contact.subject}
              </label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none focus:border-sky-400 dark:border-slate-700"
              >
                {t.contact.subjectOptions.map((opt) => (
                  <option key={opt} value={opt} className="dark:bg-[#111827]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {t.contact.message}
              </label>
              <textarea
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none focus:border-sky-400 dark:border-slate-700"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-400 md:col-span-2"
            >
              {t.contact.submit}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">{t.contact.directly}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:border-sky-400 dark:border-slate-700"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={profile.github}
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:border-sky-400 dark:border-slate-700"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:border-sky-400 dark:border-slate-700"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
