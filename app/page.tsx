export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul className="space-y-6">
        <li className="border rounded-lg p-6 hover:shadow-md transition">
          <p className="text-sm text-gray-500 mb-1">2026年3月8日</p>
          <h2 className="text-xl font-semibold mb-2">はじめての投稿</h2>
          <p className="text-gray-600">
            Dockerを使ってNext.jsの開発環境を構築しました。
          </p>
        </li>
        <li className="border rounded-lg p-6 hover:shadow-md transition">
          <p className="text-sm text-gray-500 mb-1">2026年3月7日</p>
          <h2 className="text-xl font-semibold mb-2">
            Tailwind CSSを使ってみた
          </h2>
          <p className="text-gray-600">
            Tailwind CSSでスタイリングがとても楽になりました。
          </p>
        </li>
      </ul>
    </main>
  );
}
