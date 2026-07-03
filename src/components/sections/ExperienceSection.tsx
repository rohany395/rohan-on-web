import { experience } from "@/content/resume";
import type { Experience } from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

function highlightMetrics(text: string) {
  const metricPattern =
    /(\$[\d.]+[MBK]?|\d+%|\d+\+|\d+ days?|Millions)/gi;
  const isMetric = /^\$[\d.]+[MBK]?$|^\d+%$|^\d+\+$|^\d+ days?$|^Millions$/i;
  const parts = text.split(metricPattern);
  return parts.map((part, i) =>
    isMetric.test(part) ? (
      <strong key={i} className="font-semibold text-accent-secondary">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function ExperienceCard({ job }: { job: Experience }) {
  const cardClass = [
    "glass-card group p-6 sm:p-8",
    job.featured ? "featured-card" : "",
    job.compact ? "opacity-90" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClass}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-xl text-foreground">{job.role}</h3>
          <p className="mt-1 font-mono text-sm text-accent">@{job.company}</p>
        </div>
        <p className="font-mono text-sm text-accent-secondary">{job.period}</p>
      </div>
      {job.pullQuote ? (
        <blockquote className="pull-quote">{job.pullQuote}</blockquote>
      ) : null}
      <ul className="mt-5 space-y-3">
        {job.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-3 font-mono text-sm leading-relaxed text-muted sm:text-base"
          >
            <span className="shrink-0 text-accent" aria-hidden>
              &gt;
            </span>
            <span>{highlightMetrics(bullet)}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <PageSection id="experience">
      <Reveal>
        <SectionHeading
          label="Production impact"
          title="Shipped at WebMD scale"
          description="Consumer health products for millions of users — plus research systems and AI tooling from graduate work at Syracuse."
        />
      </Reveal>

      <Stagger className="section-content space-y-6">
        {experience.map((job) => (
          <StaggerItem key={job.id}>
            <ExperienceCard job={job} />
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
