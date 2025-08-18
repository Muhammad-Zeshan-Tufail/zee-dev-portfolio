"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "Zeshan is an exceptional developer with an eye for detail. His work on our project was flawless!",
    image: "/clients/John.jpeg",
  },
  {
    name: "Sarah Khan",
    role: "Product Manager, InnovateX",
    feedback:
      "Highly professional and skilled in React and Next.js. Delivered everything on time.",
    image: "/clients/Sarah.jpg",
  },
  {
    name: "Mike Johnson",
    role: "CTO, DevSolutions",
    feedback:
      "Working with Zeshan was a great experience. He provided clean and scalable code.",
    image: "/clients/Mike.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevTestimonial();
      if (event.key === "ArrowRight") nextTestimonial();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Animation Variants
  const slideVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white">What Clients Say</h2>
        <p className="text-lg text-gray-300 mt-2">
          Hear from professionals I've worked with.
        </p>

        <div className="relative flex items-center justify-center mt-10">
          {/* Left Button */}
          <button
            className="absolute left-0 p-2 bg-[#1E293B] rounded-full shadow-lg hover:bg-[#334155] transition"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={direction === "left" ? "hiddenLeft" : "hiddenRight"}
            animate="visible"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3 lg:w-1/2 bg-[#1E293B] shadow-lg rounded-xl p-8 text-center border border-gray-600"
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#64748B]">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-4 text-xl font-medium text-gray-300">
              "{testimonials[currentIndex].feedback}"
            </p>
            <h4 className="mt-4 text-lg font-bold text-white">
              {testimonials[currentIndex].name}
            </h4>
            <span className="text-sm text-gray-400">
              {testimonials[currentIndex].role}
            </span>
          </motion.div>

          {/* Right Button */}
          <button
            className="absolute right-0 p-2 bg-[#1E293B] rounded-full shadow-lg hover:bg-[#334155] transition"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
