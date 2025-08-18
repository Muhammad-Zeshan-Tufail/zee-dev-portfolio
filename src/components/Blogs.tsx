"use client";

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blogs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust for when the animation should start
  });

  return (
    <section id="blogs" className="py-12 bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>

        {/* Blog Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
