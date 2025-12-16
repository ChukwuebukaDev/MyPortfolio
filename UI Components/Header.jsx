import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const links = ["Projects", "Experience", "About Me", "Pricing"];

  // Smooth scroll behavior
  const handleLinkClick = (id) => {
    setShowNav(false);
    const section = document.getElementById(
      id.replace(/\s+/g, "-").toLowerCase()
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect active section on scroll

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "";

      links.forEach((link) => {
        const section = document.getElementById(
          link.replace(/\s+/g, "-").toLowerCase()
        );
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          current = link;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md text-white shadow-lg">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">Aniugo</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg">
          {links.map((link, i) => (
            <li
              key={i}
              className={`cursor-pointer transition-colors ${
                activeSection === link
                  ? "text-red-400 font-semibold"
                  : "hover:text-red-400"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {showNav ? (
            <X
              size={32}
              className="cursor-pointer"
              onClick={() => setShowNav(false)}
            />
          ) : (
            <Menu
              size={32}
              className="cursor-pointer"
              onClick={() => setShowNav(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <ul
        className={`flex flex-col items-center bg-gray-700 text-lg md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          showNav
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <li
            key={i}
            className={`w-full text-center py-3 cursor-pointer transition-colors ${
              activeSection === link
                ? "bg-gray-600 text-red-400"
                : "hover:bg-gray-600"
            }`}
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </li>
        ))}
      </ul>
    </header>
  );
}
