import { getPostById } from "@/lib/posts";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-500">記事が見つかりませんでした。</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 block">
          ← トップに戻る
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-6 sm:mb-8 block text-sm"
      >
        ← トップに戻る
      </Link>
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8 lg:p-10">
        <p className="text-xs sm:text-sm text-blue-500 mb-2">{post.date}</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          {post.title}
        </h1>
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
        <div
          className="prose prose-gray dark:prose-invert max-w-none
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
            prose-p:text-sm sm:prose-p:text-base"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
