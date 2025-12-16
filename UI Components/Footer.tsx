import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About Me", href: "#about-me" },
  { label: "Pricing", href: "#pricing" },
];

export default function Footer(): JSX.Element {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const year: number = new Date().getFullYear();

  // Scroll position detection
  useEffect(() => {
    const handleScroll = (): void => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string): void => {
    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-gray-300 py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-2xl font-semibold text-white">Aniugo</div>

        {/* Navigation */}
        <ul className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-red-400 cursor-pointer transition-colors duration-300"
            >
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="focus:outline-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/ChukwuebukaDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/chukwuebuka-aniugo-6008a533a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:ebuzuaniugo@yahoo.com"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {year} Aniugo Chukwuebuka — All rights reserved.
      </div>

      {/* Scroll-to-top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all hover:-translate-y-1"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
