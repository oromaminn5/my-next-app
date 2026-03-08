export type Post = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "はじめての投稿",
    date: "2026年3月8日",
    content:
      "Dockerを使ってNext.jsの開発環境を構築しました。コンテナを使うことで、環境構築がとても楽になりました。",
  },
  {
    id: 2,
    title: "Tailwind CSSを使ってみた",
    date: "2026年3月7日",
    content:
      "Tailwind CSSでスタイリングがとても楽になりました。クラス名を書くだけでデザインが整うのが気に入っています。",
  },
];
