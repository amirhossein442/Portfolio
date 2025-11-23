import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button className="pt-5  px-5 flex ml-auto  z-50 " onClick={toggleTheme}>{isDarkMode ? <Sun className="text-yellow-200"/> : <Moon />}</button>
  );
};
