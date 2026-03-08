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
          className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
