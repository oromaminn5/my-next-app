import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">最新の記事</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        プログラミングの学習記録
      </p>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700">
                <p className="text-sm text-blue-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-2 hover:text-blue-500 transition">
                  {post.title}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  続きを読む →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
