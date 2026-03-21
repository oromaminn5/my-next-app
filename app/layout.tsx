import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "./components/DarkModeToggle";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "競馬ブログ",
  description: "競馬の予想と結果を記録するブログ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <header className="bg-green-800 dark:bg-green-900 shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="font-bold text-lg sm:text-xl tracking-tight text-white hover:text-green-200 transition flex items-center gap-2"
            >
              <span className="material-icons">sports</span>
              競馬ブログ
            </Link>
            <DarkModeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
