import {
  education,
  leadership,
  profile,
  skillGroups,
} from "@/content/resume";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Connect
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Background & skills
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Education
              </h3>
              <p className="mt-3 text-lg font-medium text-foreground">
                {education.degree}
              </p>
              <p className="text-accent">{education.school}</p>
              <p className="mt-2 font-mono text-sm text-muted">
                GPA {education.gpa} &middot; {education.period}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Leadership
              </h3>
              <p className="mt-3 text-lg font-medium text-foreground">
                {leadership.role}
              </p>
              <p className="text-accent">{leadership.organization}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {leadership.description}
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-8 space-y-6">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
            <p className="text-lg text-foreground">
              Interested in working together?
            </p>
            <p className="mt-2 text-muted">
              {profile.location} &middot; {profile.email}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
              >
                Download resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
