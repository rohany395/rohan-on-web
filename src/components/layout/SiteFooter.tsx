import { profile } from "@/content/resume";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.resumePath}
            download
            className="text-muted transition-colors hover:text-accent"
          >
            Download resume
          </a>
        </div>
        <p className="text-xs text-muted sm:text-right">
          &copy; {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
