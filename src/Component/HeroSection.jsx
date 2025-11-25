import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className=" max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-purple-700 opacity-0 animate-fade-in-delay-1">
              Amirhossein
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Zare
            </span>
          </h1>
          <p className="text-lg md:text-xl mx-auto opacity-0 animate-fade-in-delay-2">
            I am a Frontend Developer eager to expand my skills in this field.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-2">
            <a className="bg-purple-700 py-1 px-4 rounded-3xl" href="#projects">
              View my Work
            </a>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-14  flex flex-col items-center justify-center animate-bounce ">
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className=" h-5 w-5 text-purple-500 " />
      </div>
    </section>
  );
};
