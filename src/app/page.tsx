import { AboutMeSection } from "@/components/AboutMeSection";
import { AcademicEducationSection } from "@/components/AcademicEducationSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { HeroSection } from "@/components/HeroSection";
import { MySkillsSection } from "@/components/MySkillsSection";
import { PublishedProjectsSection } from "@/components/PublishedProjectsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo Silva Pereira - Desenvolvedor Web e Mobile</title>
        <meta
          name="description"
          content="Desenvolvedor especializado em React, React Native, Next.js e Node.js. Construindo aplicações performáticas e escaláveis."
        />
        <meta
          name="keywords"
          content="React, Next.js, TypeScript, Desenvolvedor Web, Node.js, React Native"
        />
        <meta name="author" content="Eduardo Silva Pereira" />
        <meta
          property="og:title"
          content="Eduardo Silva Pereira - Desenvolvedor Web e Mobile"
        />
        <meta
          property="og:description"
          content="Desenvolvedor especializado em aplicações escaláveis e performáticas."
        />
        <meta
          property="og:image"
          content="/assets/eduardo-silva-pereira-thumb.jpg"
        />
        <meta property="og:url" content="https://eduardosilvapereira.com.br" />
        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eduardo Silva Pereira",
              jobTitle: "Desenvolvedor Web e Mobile",
              url: "https://eduardosilvapereira.com.br",
              sameAs: [
                "https://www.linkedin.com/in/eduardo-silva-pereira-7945026b/",
                "https://github.com/seu-github",
              ],
            }),
          }}
        />
      </Head>
      <main>
        <HeroSection />
        <AboutMeSection />
        <ExperiencesSection />
        <MySkillsSection />
        <AcademicEducationSection />
        <PublishedProjectsSection />
      </main>
    </>
  );
}
