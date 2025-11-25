import {
  ArrowRight,
  ExternalLink,
  ExternalLinkIcon,
  Github,
} from "lucide-react";

export const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Hyper-movies",
      description:
        "Hyper Movies is responsive platform for discovering and reviewing the latest movies.",
      image:
        "https://github.com/amirhossein442/Hyper-Movies/raw/main/public/images/Capture.PNG",
      tags: ["React", "Tailwind ", "TMDB"],
      demoUrl: "https://hyper-movies.vercel.app/",
      githupUrl: "https://github.com/amirhossein442/Hyper-Movies",
    },
    {
      id: 2,
      title: "Restaurant App",
      description: "Restaurant Website – Modern, responsive food web app",
      image:
        "https://github.com/amirhossein442/restaurant-website/raw/main/public/images/Capture.PNG",
      tags: ["React", "Tailwind", "Themealdb"],
      demoUrl: "https://restaurant-website-seven-phi.vercel.app/",
      githupUrl:
        "https://github.com/amirhossein442/restaurant-website/tree/main",
    },
    {
      id: 3,
      title: "HouseSale Web",
      description: "Responsive website using grid and flex",
      image:
        "https://github.com/amirhossein442/HouseSale-Website/blob/main/public/img/Capture.PNG?raw=true",
      tags: ["React", "CSS", "#"],
      demoUrl: "https://house-sale-website.vercel.app/",
      githupUrl: "https://github.com/amirhossein442/HouseSale-Website",
    },
  ];
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
          Featured<span className="text-purple-700">Projects</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="rounded-lg bg-slate-950/30 overflow-hidden"
            >
              <div className="h-48  overflow-hidden group">
                <img
                  src={project.image}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-6 py-4 flex flex-wrap gap-4 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-sm font-medium rounded-full bg-purple-600/10">
                    {tag}
                  </span>
                ))}
                <h3 className="text-xl font-semibold mb-2 ">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="flex  items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="hover:text-purple-700 transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a
                      href={project.githupUrl}
                      target="_blank"
                      className="hover:text-purple-700 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center ">
            <a
              className="flex w-fit items-center mx-auto gap-2 hover:bg-purple-700 py-2 px-4 rounded-full transition-colors duration-300"
              href="https://github.com/amirhossein442"
              target="_blank"
            >
              Check My Githup <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
