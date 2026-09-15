import { AboutSection } from "@/components/about-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function App() {
  return (
    <div id="top" className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
