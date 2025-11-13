import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 – Present",
      description:
        "Developed responsive web applications with React, Leaflet, and Tailwind CSS. Focused on UX, animation, and map-based interfaces.",
    },
    {
      title: "Web Developer Intern",
      company: "Tech Studio",
      period: "2022 – 2023",
      description:
        "Built and maintained client websites, optimized performance, and improved UI accessibility with modern JavaScript frameworks.",
    },
    {
      title: "Software Engineering Student",
      company: "University Projects",
      period: "2020 – 2022",
      description:
        "Collaborated on team projects using Git, React, and Node.js. Designed clean UIs and handled client-side logic and state management.",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20 px-6"
    >
      <h1 className="text-5xl font-bold mb-6 text-center">Experience</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl text-center">
        A look at my professional journey, from hands-on development to
        delivering real-world web solutions.
      </p>

      <div ref={containerRef} className="relative max-w-4xl w-full">
        {/* Gray base timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700 rounded-lg"></div>

        {/* Animated red progress line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 top-0 w-1 bg-red-500 origin-top rounded-lg"
        />

        {/* Experience cards */}
        <div className="space-y-12 pl-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-500/30 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Red marker */}
              <div className="absolute left-[-2.1rem] top-6 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-900"></div>

              <h2 className="text-2xl font-semibold text-red-400">
                {exp.title}
              </h2>
              <h3 className="text-gray-300 text-lg">
                {exp.company} • {exp.period}
              </h3>
              <p className="text-gray-400 mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
