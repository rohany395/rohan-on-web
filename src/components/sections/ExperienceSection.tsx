import { experience } from "@/content/resume";
import type { Experience } from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

function ExperienceCard({ job }: { job: Experience }) {
  const cardClass = [
    "glass-card group rounded-2xl p-6 sm:p-8",
    job.featured ? "featured-card" : "",
    job.compact ? "opacity-90" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClass}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
          <p className="mt-0.5 text-accent">{job.company}</p>
        </div>
        <p className="font-mono text-sm text-muted">{job.period}</p>
      </div>
      {job.pullQuote ? (
        <blockquote className="pull-quote">{job.pullQuote}</blockquote>
      ) : null}
      <ul className="mt-5 space-y-3">
        {job.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
              aria-hidden
            />
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
          description="Consumer health products for millions of users — plus research systems and AI tooling at Syracuse."
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
