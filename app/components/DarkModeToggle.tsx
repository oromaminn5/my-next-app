"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-white transition"
    >
      {isDark ? "☀️ ライト" : "🌙 ダーク"}
    </button>
  );
}
