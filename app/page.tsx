import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/posts/${post.id}`} className="hover:text-blue-500">
                {post.title}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
