import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import AdBanner from "./components/AdBanner";

export default async function Home() {
  const allPosts = await getAllPosts();
  const heroPost = allPosts.find((post) => post.hero);
  const posts = allPosts.filter((post) => !post.hero);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* ヒーロー記事 */}
      {heroPost && (
        <Link href={`/posts/${heroPost.id}`}>
          <div className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl p-8 sm:p-10 mb-8 shadow-md">
            <p className="text-xs sm:text-sm text-blue-200 mb-2">
              {heroPost.date}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              {heroPost.title}
            </h2>
            <span className="text-sm text-blue-200">続きを読む →</span>
          </div>
        </Link>
      )}

      {/* ダミー広告 */}
      <div className="mb-8">
        <AdBanner />
      </div>

      {/* 記事一覧 */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">最新の記事</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
        プログラミングの学習記録
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700 h-full">
                <p className="text-xs sm:text-sm text-blue-500 mb-2">
                  {post.date}
                </p>
                <h2 className="text-lg sm:text-xl font-bold mb-3 hover:text-blue-500 transition">
                  {post.title}
                </h2>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
