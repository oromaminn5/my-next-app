import Link from "next/link";

type Props = {
  tags: string[];
};

export default function TagList({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs px-3 py-1 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
