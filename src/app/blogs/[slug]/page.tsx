import { blogPosts } from "@/data/blogs";
import Image from "next/image";

type BlogDetailsProps = {
  params: {
    slug: string;
  };
};

export default function BlogDetails({ params: { slug } }: BlogDetailsProps) {
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p className="text-center text-xl">Blog post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-5">
      <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
      <p className="text-gray-500 mb-4">
        {blogPost.date} | By {blogPost.author}
      </p>
      <Image
        src={blogPost.image}
        alt={blogPost.title}
        width={800}
        height={400}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-400 leading-relaxed">
        {blogPost.description}
      </p>
      <div className="mt-6 text-gray-300 text-lg leading-7">
        {blogPost.content.split("\n").map((paragraph, index) =>
          paragraph.startsWith("#") ? (
            <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
              {paragraph.replace("#", "").trim()}
            </h2>
          ) : paragraph.startsWith("##") ? (
            <h3 key={index} className="text-xl font-semibold mt-5 mb-2">
              {paragraph.replace("##", "").trim()}
            </h3>
          ) : (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          )
        )}
      </div>
    </div>
  );
}
