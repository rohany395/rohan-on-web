"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/resume";

function NavLinks({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={className}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
      <a
        href={profile.resumePath}
        download
        className={className}
        onClick={onNavigate}
      >
        Resume
      </a>
    </>
  );
}

export function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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
        <nav
          className="hidden items-center gap-2 sm:flex"
          aria-label="Main"
        >
          <NavLinks className="btn-ghost btn-sm" />
        </nav>
        <button
          type="button"
          className="btn-ghost btn-sm sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-x-2 border-t-2 border-border bg-surface sm:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4">
            <NavLinks
              className="btn-ghost btn-sm w-full justify-start"
              onNavigate={closeMenu}
            />
          </div>
        </nav>
      ) : null}
      <div
        className="retro-scroll-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden
      />
    </header>
  );
}
