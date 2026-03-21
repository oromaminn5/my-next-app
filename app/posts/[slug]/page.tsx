export const revalidate = 86400;

import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-500">記事が見つかりませんでした。</p>
        <Link href="/" className="text-green-600 hover:underline mt-4 block">
          ← トップに戻る
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        href="/"
        className="text-green-600 hover:underline mb-6 sm:mb-8 block text-sm"
      >
        ← トップに戻る
      </Link>
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 lg:p-10">
        <p className="text-xs sm:text-sm text-green-600 mb-2">{post.date}</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          {post.title}
        </h1>
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs px-3 py-1 rounded-full hover:bg-green-200 transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
        <div
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
