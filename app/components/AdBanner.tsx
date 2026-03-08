export default function AdBanner() {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-700 border border-dashed border-gray-300 dark:border-gray-500 rounded-xl p-6 text-center">
      <p className="text-xs text-gray-400 mb-2">広告</p>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <p className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-1">
          🎉 サンプル広告
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          ここに広告が表示されます
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition">
          詳しくはこちら
        </button>
      </div>
    </div>
  );
}
