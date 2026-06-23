import { experience } from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

function highlightMetrics(text: string) {
  const parts = text.split(/(\$[\d.]+[MBK]?|\d+%|\d+\+)/g);
  return parts.map((part, i) =>
    /(\$[\d.]+[MBK]?|\d+%|\d+\+)/.test(part) ? (
      <strong key={i} className="font-semibold text-accent">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            At scale
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Owning features end to end
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            From internal tools at WebMD to research systems at Syracuse — I
            build across the stack and measure impact in production.
          </p>
        </Reveal>

        <Stagger className="mt-12 space-y-6">
          {experience.map((job) => (
            <StaggerItem key={job.id}>
              <article className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8 transition-colors hover:border-accent/30">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-accent">{job.company}</p>
                  </div>
                  <p className="font-mono text-sm text-muted">{job.period}</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{highlightMetrics(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
