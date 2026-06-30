import { ImageResponse } from "next/og";
import { profile } from "@/content/resume";

export const alt = `${profile.name} — Full-Stack Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          backgroundColor: "#faf7f0",
          color: "#1e1e2e",
          border: "4px solid #1e1e2e",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>SYS ONLINE</span>
          <span style={{ color: "#0f766e" }}>PORTFOLIO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#0f766e",
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.4, maxWidth: 900 }}>
            {profile.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#5e5e72",
          }}
        >
          <span>{profile.subline}</span>
          <span>rohan-on-web.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
