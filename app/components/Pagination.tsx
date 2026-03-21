import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* 前のページ */}
      {currentPage > 1 ? (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-600 transition"
        >
          <span className="material-icons text-sm">chevron_left</span>
          前へ
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed">
          <span className="material-icons text-sm">chevron_left</span>
          前へ
        </span>
      )}

      {/* ページ番号 */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          className={`px-4 py-2 rounded-lg transition ${
            page === currentPage
              ? "bg-green-800 text-white font-bold"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 border border-gray-200 dark:border-gray-700"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* 次のページ */}
      {currentPage < totalPages ? (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-600 transition"
        >
          次へ
          <span className="material-icons text-sm">chevron_right</span>
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed">
          次へ
          <span className="material-icons text-sm">chevron_right</span>
        </span>
      )}
    </div>
  );
}
