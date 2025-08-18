"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Zee Blogs",
    description:
      "A modern blogging platform with rich text editing and user authentication.",
    image: "/project/project1.webp",
    link: "https://job-app.com",
  },
  {
    title: "Job Assignment App",
    description:
      "An optimized job allocation system with a seamless dashboard for businesses.",
    image: "/project/project2.webp",
    link: "https://job-app.com",
  },
  {
    title: "Real-time Chat App",
    description:
      "A real-time chat platform using Firebase with user authentication and media sharing.",
    image: "/project/project3.webp",
    link: "https://chat-app.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-secondary">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-accent mb-6"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
