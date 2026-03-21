export const revalidate = 86400; // 1日（秒）
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

type Props = {
  params: Promise<{ tag: string }>;
};

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => post.tags?.includes(decodedTag));

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-6 block text-sm"
      >
        ← トップに戻る
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">#{decodedTag}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
        {posts.length}件の記事
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {posts.map((post) => (
          <li key={post.id}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700 h-full">
              <p className="text-xs sm:text-sm text-blue-500 mb-2">
                {post.date}
              </p>
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                <Link
                  href={`/posts/${post.id}`}
                  className="hover:text-blue-500 transition"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((t) => (
                  <Link
                    key={t}
                    href={`/tags/${t}`}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition"
                  >
                    #{t}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
