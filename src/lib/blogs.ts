import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export const getBlogPosts = () => {
  const files = fs.readdirSync(BLOGS_DIR);

  return files.map((filename) => {
    const filePath = path.join(BLOGS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: filename.replace(".md", ""),
    };
  });
};
