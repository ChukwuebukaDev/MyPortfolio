import { motion } from "framer-motion";

const projects = [
  {
    title: "AniugoFind",
    description:
      "A React Leaflet web app that helps users find locations, draw routes, and calculate road distances using OpenRouteService.",
    tech: ["React", "Leaflet", "ORS", "Turf.js"],
    link: "https://chukwuebukadev.github.io/aniugoFind/",
  },
  {
    title: "Portfolio Site",
    description:
      "My personal developer portfolio built with React and Tailwind CSS, showcasing my projects and experience.",
    tech: ["React", "Tailwind", "Lucide-React"],
    link: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing real-time data streams with charts and maps.",
    tech: ["React", "Recharts", "Framer Motion"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-20 px-6"
    >
      <h1 className="text-5xl font-bold mb-6 text-center">Projects</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl text-center">
        A selection of my recent work — showcasing problem-solving, UI
        engineering, and creative web development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-red-500/30 hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-red-400">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, t) => (
                <span
                  key={t}
                  className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
