export const revalidate = 86400; // 1日（秒）
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import AdBanner from "./components/AdBanner";
import TagList from "./components/TagList";
import Pagination from "./components/Pagination";

const POSTS_PER_PAGE = 4;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const allPosts = await getAllPosts();
  const heroPost = allPosts.find((post) => post.hero);
  const normalPosts = allPosts.filter((post) => !post.hero);

  const totalPages = Math.ceil(normalPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = normalPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* ヒーロー記事（1ページ目のみ表示） */}
      {currentPage === 1 && heroPost && (
        <div className="bg-green-700 dark:bg-green-800 text-white rounded-xl p-8 sm:p-10 mb-8 shadow-md">
          <p className="text-xs sm:text-sm text-green-200 mb-2">
            {heroPost.date}
          </p>
          <Link href={`/posts/${heroPost.slug}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 hover:underline">
              {heroPost.title}
            </h2>
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            {heroPost.tags?.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1 rounded-full transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
          <Link
            href={`/posts/${heroPost.slug}`}
            className="text-sm text-green-200 hover:underline"
          >
            続きを読む →
          </Link>
        </div>
      )}

      {/* ダミー広告 */}
      <div className="mb-8">
        <AdBanner />
      </div>

      {/* 記事一覧 */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">最新の記事</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
        競馬の予想と結果を記録しています
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {posts.map((post) => (
          <li key={post.id}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700 h-full">
              <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 mb-2">
                {post.date}
              </p>
              <h2 className="text-lg sm:text-xl font-bold mb-3">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-green-600 transition"
                >
                  {post.title}
                </Link>
              </h2>
              <TagList tags={post.tags ?? []} />
            </div>
          </li>
        ))}
      </ul>

      {/* ページネーション */}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
