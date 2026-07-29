"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="px-4 md:px-8 xl:px-12 pt-4 md:pt-6">
      <header className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2.5">
          <Image
            src="/bmi_logo.jpeg"
            alt="BMI Calculator logo"
            width={28}
            height={28}
            className="rounded-md"
          />

          <h1 className="text-base md:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            BMI Calculator
          </h1>
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all cursor-pointer"
        >
          {theme === "dark" ? (
            <Image src="/crescent-moon.png" alt="Moon" width={22} height={22} />
          ) : (
            <Image src="/contrast.png" alt="Sun" width={22} height={22} />
          )}
        </button>
      </header>
    </div>
  );
}
