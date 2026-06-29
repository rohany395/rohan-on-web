import { projects } from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  return (
    <PageSection id="projects">
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
            <article className="glass-card group flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="project-highlight">{project.highlight}</p>
                  <h3 className="mt-1 font-display text-xl text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost btn-sm shrink-0"
                  aria-label={`Open ${project.name}`}
                >
                  Live
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
