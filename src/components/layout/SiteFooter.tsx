import { profile } from "@/content/resume";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 border-x-2 border-border px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-accent">{profile.name}</p>
          <p className="mt-1 font-mono text-sm text-muted">{profile.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a href={`mailto:${profile.email}`} className="btn-ghost btn-sm">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-sm"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-sm"
          >
            GitHub
          </a>
          <a href={profile.resumePath} download className="btn-ghost btn-sm">
            Resume
          </a>
        </div>
        <p className="font-mono text-xs text-muted sm:text-right">
          &copy; {year} // EOF
        </p>
      </div>
    </footer>
  );
}
