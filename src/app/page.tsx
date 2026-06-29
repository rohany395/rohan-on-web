import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import "@/components/ui/section.css";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="site-main flex-1">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
