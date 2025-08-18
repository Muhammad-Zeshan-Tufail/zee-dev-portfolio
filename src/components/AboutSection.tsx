"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background text-secondary">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image
            src="/profile.jpg"
            alt="Muhammad Zeshan Tufail"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a <strong>Frontend Developer</strong> with expertise in{" "}
            <strong>React.js, Next.js, and UI/UX design</strong>. I love
            crafting beautiful and performant web applications, focusing on
            clean code and seamless user experiences.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I have experience working with{" "}
            <strong>Tailwind CSS, ShadCN, Redux Toolkit, and Firebase</strong>{" "}
            to build scalable web solutions. When I'm not coding, I enjoy
            learning about new technologies and improving my design skills.
          </p>

          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="btn-primary inline-block mt-6"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
