import {
  education,
  leadership,
  profile,
  skillPillars,
} from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <PageSection id="about">
      <Reveal>
        <SectionHeading
          label="Connect"
          title="How I work"
          description="Full-stack by default — comfortable owning features from UI through APIs, data, and deployment."
        />
      </Reveal>

      <div className="section-stack section-content">
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {skillPillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="pillar-card glass-card h-full p-6 sm:p-8">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillar.items.map((skill) => (
                    <span key={skill} className="tag text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-secondary">
                Education
              </h3>
              <p className="mt-4 font-display text-xl text-foreground">
                {education.degree}
              </p>
              <p className="mt-1 text-accent">{education.school}</p>
              <p className="mt-2 font-mono text-sm text-muted">
                GPA {education.gpa} &middot; {education.period}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-secondary">
                Leadership
              </h3>
              <p className="mt-4 font-display text-xl text-foreground">
                {leadership.role}
              </p>
              <p className="mt-1 text-accent">{leadership.organization}</p>
              <p className="mt-3 font-mono text-sm leading-relaxed text-muted sm:text-base">
                {leadership.description}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="cta-panel relative">
            <p className="relative font-display text-xl text-foreground">
              Interested in working together?
            </p>
            <p className="relative mt-2 font-mono text-sm text-muted">
              {profile.location} &middot; {profile.email}
            </p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Get in touch
              </a>
              <a href={profile.resumePath} download className="btn-ghost">
                Download resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
