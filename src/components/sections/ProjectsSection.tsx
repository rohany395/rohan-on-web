import { projects } from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-border/40 bg-surface/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Build
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI-powered products
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Side projects where I explore multimodal models, RAG pipelines, and
            interfaces that make complex data approachable.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/30">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm text-accent transition-opacity hover:opacity-80"
                    aria-label={`Open ${project.name}`}
                  >
                    Live &rarr;
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 flex-1 space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-muted sm:text-base"
                    >
                      {bullet}
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
