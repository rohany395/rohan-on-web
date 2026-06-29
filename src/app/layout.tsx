import type { Metadata } from "next";
import { IBM_Plex_Mono, VT323 } from "next/font/google";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { profile } from "@/content/resume";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://rohan-on-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Full-Stack Software Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.headline} ${profile.subline}`,
  openGraph: {
    title: `${profile.name} — Full-Stack Software Engineer`,
    description: `${profile.headline} ${profile.subline}`,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full-Stack Software Engineer`,
    description: `${profile.headline} ${profile.subline}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${vt323.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="relative min-h-full flex flex-col">
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
