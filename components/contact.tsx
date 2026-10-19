"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { profile } from "@/data/profile";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const field =
  "border border-line bg-transparent px-3 py-2 outline-none transition-colors focus:border-accent";

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
    <section id="contacto" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          cmd="./contact.sh"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <Reveal>
          <form onSubmit={handleSubmit} className="card grid gap-5 p-6 md:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm text-muted">
              --{t.contact.name.toLowerCase()}
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`${field} text-fg`}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-muted">
              --{t.contact.email.toLowerCase()}
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`${field} text-fg`}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm text-muted md:col-span-2">
              --{t.contact.subject.toLowerCase()}
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`${field} text-fg`}
              >
                {t.contact.subjectOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-bg">
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1 text-sm text-muted md:col-span-2">
              --{t.contact.message.toLowerCase()}
              <textarea
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} text-fg`}
              />
            </label>

            <button
              type="submit"
              className="border border-accent px-6 py-3 font-bold text-accent transition-colors hover:bg-accent hover:text-bg md:col-span-2"
            >
              &gt; {t.contact.submit}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <p className="mb-2 text-sm text-muted"># {t.contact.directly}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              [{profile.email}]
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              [github]
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              [linkedin]
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
