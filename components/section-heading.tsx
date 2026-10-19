import { Reveal } from "./reveal";

export function SectionHeading({
  title,
  subtitle,
  cmd,
}: {
  title: string;
  subtitle: string;
  cmd: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 text-sm text-muted">
        <span className="text-accent">$</span> {cmd}
      </p>
      <h2 className="mb-2 text-3xl font-bold">{title}</h2>
      <p className="text-muted"># {subtitle}</p>
    </Reveal>
  );
}
