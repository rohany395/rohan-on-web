import { impactStats, profile } from "@/content/resume";
import { Reveal } from "@/components/motion/Reveal";
import { ImpactStats } from "@/components/ui/ImpactStats";
import { PageSection } from "@/components/ui/PageSection";

export function Hero() {
  return (
    <PageSection
      id="top"
      variant="hero"
      className="relative overflow-hidden"
      innerClassName="relative"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_65%)]"
        aria-hidden
      />

      <Reveal>
        <span className="status-pill mb-6">
          <span className="status-dot" aria-hidden />
          {profile.availability}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.subline}
        </p>
      </Reveal>
      <Reveal delay={0.14}>
        <div className="mt-10">
          <ImpactStats stats={impactStats} />
        </div>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#experience" className="btn-primary">
            See my work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            Email
          </a>
        </div>
      </Reveal>
    </PageSection>
  );
}
