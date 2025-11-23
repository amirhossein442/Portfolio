import { Briefcase, Code, User } from "lucide-react";

export const AboutMeSection = ({isDarkMode}) => {
  return (
    <section id="about" className="py-24 px-4 md:px-20 relative">
      <div className=" mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-purple-500">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Web Developer & Texh Creator
          </h3>
          <p className="text-muted-foreground">
            With over 2 years of experience in web developent, I specialize in
            creating responsive,accessible, and performant web applications
            using modern technologies.
          </p>
          <p>
            With over 2 years of experience in web developent, I specialize in
            creating responsive,accessible, and performant web applications
            using modern technologies.
          </p>
          <div className=" flex gap-4 pt-4 justify-center">
            <a
              href="#contact"
              className="bg-purple-700 py-1 px-4 rounded-3xl font-bold"
            >
              Get In Touch
            </a>
            <a
              href="#contact"
              className=" px-4 py-1 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className={`gradient-border p-6 ${isDarkMode ? "bg-slate-950" : "bg-slate-950/10"}  `}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-500/10 ">
                <Code />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web development</h4>
                <p>
                  Creating responsive websites and web application with modern
                  frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className={`gradient-border p-6 ${isDarkMode ? "bg-slate-950" : "bg-slate-950/10"}  `}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-500/10 ">
                <User />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p>
                  Desining intuitive user interfaces and seamless user
                  expriences.
                </p>
              </div>
            </div>
          </div>
          <div className={`gradient-border p-6 ${isDarkMode ? "bg-slate-950" : "bg-slate-950/10"}  `}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-500/10 ">
                <Briefcase />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p>
                  Loading projects from conception to completion with agile
                  methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
