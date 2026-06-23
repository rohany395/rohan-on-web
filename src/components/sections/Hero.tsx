import { profile } from "@/content/resume";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-24 border-b border-border/40 pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Full-stack engineer
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Shipping production software for{" "}
            <span className="text-accent">millions of users.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.summary}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              See my work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
