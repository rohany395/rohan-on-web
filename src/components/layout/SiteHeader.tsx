"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/resume";

export function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="retro-header fixed inset-x-0 top-0 z-50">
      <div className="retro-header-bar">
        <a href="#top" className="retro-header-title">
          <span className="retro-blink" aria-hidden>
            _
          </span>
          {profile.name.toLowerCase().replace(" ", ".")}.exe
        </a>
        <span className="retro-header-status hidden sm:inline">SYS ONLINE</span>
      </div>
      <div className="mx-auto flex max-w-5xl items-center justify-between border-x-2 border-border bg-surface px-6 py-3">
        <p className="font-mono text-xs text-muted">
          C:\users\rohan\<span className="text-accent">portfolio</span>
        </p>
        <nav className="hidden items-center gap-2 sm:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="btn-ghost btn-sm"
            >
              {item.label}
            </a>
          ))}
          <a href={profile.resumePath} download className="btn-ghost btn-sm">
            Resume
          </a>
        </nav>
      </div>
      <div
        className="retro-scroll-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden
      />
    </header>
  );
}
