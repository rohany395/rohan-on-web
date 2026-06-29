type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="section-label">{label}</p>
      <h2 className="mt-4 font-display text-3xl tracking-wide text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-mono text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
