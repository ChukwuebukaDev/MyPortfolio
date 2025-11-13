import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const year = new Date().getFullYear();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-gray-300 py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Name */}
        <div className="text-2xl font-semibold text-white">Aniugo</div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm">
          {["Projects", "Experience", "About Me", "Pricing"].map((link, i) => (
            <li
              key={i}
              className="hover:text-red-400 cursor-pointer transition-colors duration-300"
            >
              <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/aniugo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/aniugo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:ebuzuaniugo@gmail.com"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {year} Aniugo Chukwuebuka — All rights reserved.
      </div>

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
