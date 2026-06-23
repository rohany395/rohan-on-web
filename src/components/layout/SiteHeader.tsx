"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/resume";

export function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            download
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
