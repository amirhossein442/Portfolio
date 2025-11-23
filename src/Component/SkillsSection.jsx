const Skills = [
  { name: "HTML/CSS", Level: 95, category: "Frontend" },
  { name: "JavaScript", Level: 70, category: "Frontend" },
  { name: "React", Level: 80, category: "Frontend" },
  { name: "Tailwind CSS", Level: 75, category: "Frontend" },
  { name: "Tailwind CSS", Level: 75, category: "Frontend" },
  { name: "Tailwind CSS", Level: 75, category: "Frontend" },
];
export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-purple-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Skills.map((Skills, key) => (
            <div key={key} className="p-6 rounded-lg shadow-xs bg-slate-950">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{Skills.name}</h3>
              </div>

              <div className="w-full bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="bg-purple-500 h-2 rounded-full origin-left animate-fill"
                  style={{ width: Skills.Level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
