import { AboutMeSection } from "@/components/AboutMeSection";
import { AcademicEducationSection } from "@/components/AcademicEducationSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { HeroSection } from "@/components/HeroSection";
import { MySkillsSection } from "@/components/MySkillsSection";
import { PublishedProjectsSection } from "@/components/PublishedProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <ExperiencesSection />
      <MySkillsSection />
      <AcademicEducationSection />
      <PublishedProjectsSection />
    </main>
  );
}
