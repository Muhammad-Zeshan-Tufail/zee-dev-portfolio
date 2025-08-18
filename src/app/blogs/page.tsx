import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-5">
      <h1 className="text-5xl font-bold mb-6 text-center">Latest Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="border border-gray-300 p-5 rounded-lg shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
            <Link
              href={`/blogs/${post.slug}`}
              className="mt-3 inline-block text-blue-500 hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
