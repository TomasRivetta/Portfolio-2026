import { Reveal } from "./reveal";

export function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Reveal className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold">{title}</h2>
      <p className="text-slate-500 dark:text-slate-400">{subtitle}</p>
    </Reveal>
  );
}
