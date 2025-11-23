import { useState } from "react";
import { ThemeToggle } from "../Component/ThemeToggle";
import { StartBackground } from "../Component/startBackground";
import { Navbar } from "../Component/Navbar";
import { HeroSection } from "../Component/HeroSection";
import { AboutMeSection } from "../Component/AboutMeSection";
import { SkillsSection } from "../Component/SkillsSection";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`  min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      {/*ThemeToggle*/ }
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/*StartBackground*/ }
      <StartBackground />

      {/*Navbar*/ }
      <Navbar />

      {/*Main*/}
      <main>
        <HeroSection />
        <AboutMeSection isDarkMode={isDarkMode}/>
        <SkillsSection />
      </main>

    </div>
  );
};
