import { useState } from "react";
import { ThemeToggle } from "../Component/ThemeToggle";
import { StartBackground } from "../Component/startBackground";
import { Navbar } from "../Component/Navbar";
import { HeroSection } from "../Component/HeroSection";
import { AboutMeSection } from "../Component/AboutMeSection";
import { SkillsSection } from "../Component/SkillsSection";
import { Footer } from "../Component/Footer";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`  min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >

      {/*StartBackground*/ }
      <StartBackground />

      {/*Navbar*/ }
      <Navbar />

      {/*ThemeToggle*/ }
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/*Main*/}
      <main>
        <HeroSection />
        <AboutMeSection isDarkMode={isDarkMode}/>
        <SkillsSection isDarkMode={isDarkMode}/>
        {/*ProjectSection*/}
        {/*ContactSection*/}
      </main>
      <Footer />

    </div>
  );
};
