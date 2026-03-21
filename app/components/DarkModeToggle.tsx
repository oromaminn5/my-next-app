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
      className="flex items-center gap-1 px-3 py-2 rounded-lg border border-green-600 hover:bg-green-700 text-white transition"
    >
      <span className="material-icons text-sm">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
      <span className="text-sm">{isDark ? "ライト" : "ダーク"}</span>
    </button>
  );
}
