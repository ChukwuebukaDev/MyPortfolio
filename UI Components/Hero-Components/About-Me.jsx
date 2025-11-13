import { motion } from "framer-motion";
import { Code2, MapPin, Laptop } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-20 px-6"
    >
      <h1 className="text-5xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl text-center">
        I’m a passionate frontend developer who loves building clean,
        interactive, and map-driven web apps. My focus is on crafting modern UIs
        with React, Leaflet, and smart motion design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-2"
        >
          <div className="flex items-center gap-4 mb-4">
            <Laptop className="text-red-400" size={32} />
            <h2 className="text-2xl font-semibold">Frontend Focused</h2>
          </div>
          <p className="text-gray-300">
            I specialize in frontend development with React and Tailwind,
            building fast and responsive interfaces that feel effortless to use.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-2"
        >
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="text-red-400" size={32} />
            <h2 className="text-2xl font-semibold">Map-Based Projects</h2>
          </div>
          <p className="text-gray-300">
            I’ve built geospatial tools using React Leaflet and
            OpenRouteService, visualizing routes, distances, and location data
            with precision.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-2"
        >
          <div className="flex items-center gap-4 mb-4">
            <Code2 className="text-red-400" size={32} />
            <h2 className="text-2xl font-semibold">Creative Problem Solver</h2>
          </div>
          <p className="text-gray-300">
            I enjoy experimenting with motion, layout logic, and APIs to make
            every interface both functional and visually engaging.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
