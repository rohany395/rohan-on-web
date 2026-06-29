import type { ReactNode } from "react";
import "./section.css";

type PageSectionProps = {
  id: string;
  children: ReactNode;
  variant?: "default" | "hero";
  className?: string;
  innerClassName?: string;
};

export function PageSection({
  id,
  children,
  variant = "default",
  className = "",
  innerClassName = "",
}: PageSectionProps) {
  const sectionClass =
    variant === "hero" ? "page-section-hero" : "page-section";

  return (
    <section
      id={id}
      className={`${sectionClass} ${className}`.trim()}
    >
      <div
        className={`mx-auto max-w-5xl border-x-2 border-border px-6 ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
