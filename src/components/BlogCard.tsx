import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string; // URL-friendly identifier
}

const BlogCard = ({ title, description, image, date, slug }: BlogProps) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition">
      {/* Blog Image */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="rounded-lg object-cover"
      />
      {/* Blog Content */}
      <div className="mt-4">
        <p className="text-gray-400 text-sm">{date}</p>
        <h2 className="text-xl font-bold mt-1">{title}</h2>
        <p className="text-gray-300 mt-2 line-clamp-3">{description}</p>

        {/* Read More Button */}
        <Link href={`/blogs/${slug}`}>
          <span className="text-accent font-semibold mt-3 inline-block hover:underline">
            Read More →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
