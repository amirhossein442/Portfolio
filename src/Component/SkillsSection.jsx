import { useState } from "react";
import { ProgressBar } from "./progressBar";

const Skills = [
  { name: "HTML/CSS", Level: 80, category: "Frontend" },
  { name: "JavaScript", Level: 60, category: "Frontend" },
  { name: "React", Level: 85, category: "Frontend" },
  { name: "Tailwind CSS", Level: 70, category: "Frontend" },
  { name: "Python", Level: 40, category: "Backend" },
  { name: "Node.js", Level: 10, category: "Backend" },
  { name: "PHP", Level: 30, category: "Backend" },
  { name: "aseqbase", Level: 50, category: "Backend" },
  { name: "Figma", Level: 30, category: "Tools" },
  { name: "VS Code", Level: 80, category: "Tools" },
  { name: "Git/Githup", Level: 75, category: "Tools" },
  { name: "Docker", Level: 15, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];
export const SkillsSection = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filterSkills = Skills.filter(
    (Skill) => activeCategory === "All" || Skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-purple-500">Skills</span>
        </h2>
        <div className="justify-center flex gap-5 md:text-xl mb-6">
          {categories.map((category, key) => (
            <button
              className={`px-4 py-2  rounded-full transition-colors duration-300 ${
                activeCategory === category ? "bg-purple-600" : "bg-transparent"
              }`}
              key={key}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 `}
        >
          {filterSkills.map((Skill, key) => (
            <div
              key={key}
              className={`p-6 rounded-lg shadow-xs bg-slate-950 ${
                !isDarkMode && "bg-slate-950/10"
              }`}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{Skill.name}</h3>
              </div>
              <ProgressBar Level={Skill.Level} />
              <h4 className="text-right mt-1">{Skill.Level}%</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
