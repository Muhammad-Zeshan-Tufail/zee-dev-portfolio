"use client"; // If using Next.js App Router

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Triggers when 20% of the section is in view
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  const contacts = [
    {
      icon: <FaEnvelope className="text-secondary-500 text-3xl mx-auto" />,
      title: "Email",
      info: "zraja5226@gmail.com",
    },
    {
      icon: <FaPhone className="text-secondary-500 text-3xl mx-auto" />,
      title: "Phone",
      info: "+923125565631",
    },
    {
      icon: <FaMapMarkerAlt className="text-secondary-500 text-3xl mx-auto" />,
      title: "Location",
      info: "Rawalpindi, Pakistan",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-secondary-100 dark:bg-secondary-900">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-secondary-900 dark:text-secondary-100"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-secondary-700 dark:text-secondary-300 mt-2"
        >
          Feel free to reach out for collaborations or just a friendly chat.
        </motion.p>

        <div
          ref={ref}
          className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8"
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary-800 shadow-lg rounded-2xl p-6 text-center border border-secondary-300 dark:border-secondary-700 w-80"
            >
              {contact.icon}
              <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mt-4">
                {contact.title}
              </h4>
              <p className="text-secondary-600 dark:text-secondary-400">
                {contact.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
