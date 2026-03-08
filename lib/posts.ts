import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
  hero?: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      return {
        id,
        title: data.title,
        date: data.date,
        hero: data.hero ?? false,
        content: processedContent.toString(),
      };
    }),
  );
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return undefined;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  return {
    id,
    title: data.title,
    date: data.date,
    hero: data.hero ?? false,
    content: processedContent.toString(),
  };
}
