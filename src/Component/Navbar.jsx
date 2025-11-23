import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { href } from "react-router-dom";

const navbarItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handelScrolled = () => {
      setIsScrolled(window.scroll > 10);
    };
    window.addEventListener("scroll", handelScrolled);
    return () => window.removeEventListener("scroll", handelScrolled);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? " bg-background/80 backdrop-blur-md shadow-xs}"
          : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a className=" text-xl font-bold  flex items-center" href="#hero">
          <span className="relative z-10">
            Amirhossein
            <span className="text-purple-500">Zare</span>
          </span>
        </a>

        {/*Descktop nav*/}
        <div className="hidden md:flex space-x-8">
          {navbarItems.map((item, key) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground/80 hover:text-purple-500 cursor-pointer transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/*Mobile nav*/}
        <button className="md:hidden p-2 z-50" onClick={()=> setIsMenuOpen((prev)=> !prev)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>

        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden
            ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navbarItems.map((item, key) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-purple-500  transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
