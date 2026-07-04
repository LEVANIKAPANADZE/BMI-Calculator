"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [light, setLight] = useState(true);

  return (
    <header className="flex items-center justify-between px-4 md:px-8 xl:px-12 h-14 md:h-16 bg-white border-b border-gray-200">
      <h1 className="text-base md:text-lg font-semibold tracking-tight text-gray-900">
        BMI Calculator
      </h1>

      <button
        onClick={() => setLight(!light)}
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-transparent hover:bg-gray-100 transition-colors cursor-pointer"
      >
        {light ? (
          <Image src="/contrast.png" alt="Sun" width={24} height={24} />
        ) : (
          <Image src="/crescent-moon.png" alt="Moon" width={24} height={24} />
        )}
      </button>
    </header>
  );
}
