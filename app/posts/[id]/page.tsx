import { posts } from "@/lib/posts";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/" className="text-blue-500 hover:underline mb-8 block">
        ← トップに戻る
      </Link>
      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </main>
  );
}
