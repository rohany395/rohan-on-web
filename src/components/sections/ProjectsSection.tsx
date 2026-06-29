import { projects } from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  return (
    <PageSection id="projects" innerClassName="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--accent)_6%,transparent),transparent_70%)]"
        aria-hidden
      />

      <Reveal>
        <SectionHeading
          label="Build in public"
          title="AI experiments that ship"
          description="Side projects where I explore multimodal models, RAG pipelines, and interfaces that make complex data approachable."
        />
      </Reveal>

      <Stagger className="section-content grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <article className="glass-card group flex h-full flex-col rounded-2xl p-6">
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-60 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="project-highlight">{project.highlight}</p>
                  <h3 className="mt-1 text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-transparent px-2 py-0.5 text-sm text-accent transition-all hover:border-accent/30 hover:bg-accent/10"
                  aria-label={`Open ${project.name}`}
                >
                  Live &rarr;
                </a>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <dl className="mt-5 flex flex-1 flex-col gap-4">
                <div className="case-study-row">
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div className="case-study-row">
                  <dt>Built</dt>
                  <dd>{project.built}</dd>
                </div>
                <div className="case-study-row">
                  <dt>Result</dt>
                  <dd className="text-foreground">{project.result}</dd>
                </div>
              </dl>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
