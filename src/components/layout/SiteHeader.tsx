"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/resume";

export function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setScrolled(scrollTop > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-background/90 shadow-[0_8px_32px_-12px_var(--shadow-strong)] backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-sm"
      }`}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-accent via-accent-secondary to-accent"
        style={{
          transform: `scaleX(${scrollProgress})`,
          boxShadow: scrollProgress > 0 ? "0 0 12px var(--glow)" : undefined,
        }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <span
            className="h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-secondary shadow-[0_0_10px_var(--glow)]"
            aria-hidden
          />
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-sm text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a href={profile.resumePath} download className="btn-ghost !px-3 !py-1.5">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
