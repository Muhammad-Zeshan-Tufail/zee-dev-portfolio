"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "Next PAK Agile Solutions",
    role: "Senior Frontend Developer",
    duration: "May 2023 – Present",
    description:
      "Leading the frontend team in building scalable and high-performance web applications using React.js and Next.js. Integrated Redux Toolkit for state management and optimized UI components for enhanced user experience.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2022 – 2025",
    description:
      "Developed multiple client projects, focusing on pixel-perfect UI, API integration, and performance optimizations. Specialized in modern web technologies such as React.js, Next.js, and Node.js.",
  },
  {
    company: "Coders Globe",
    role: "Frontend Developer",
    duration: "Nov 2021 – April 2023",
    description:
      "Worked closely with UI/UX designers to bring designs to life. Built reusable React components and improved website performance through optimization techniques.",
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center">
          Experience
        </h2>
        <p className="text-lg text-gray-300 text-center mt-2">
          Work history and achievements
        </p>

        <div className="mt-10 space-y-8">
          {experiences.map((exp, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2, // Adjusts how much of the element needs to be in view to trigger the animation
            });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-[#1E293B] border border-gray-600 shadow-lg rounded-xl p-6"
              >
                <div className="absolute -left-6 -top-6 bg-[#334155] text-white rounded-full p-3">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <span className="text-sm text-gray-400">{exp.company}</span>
                <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
