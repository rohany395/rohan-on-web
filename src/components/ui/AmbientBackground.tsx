export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 retro-vignette" />
      <div className="absolute inset-0 retro-scanlines" />
    </div>
  );
}
