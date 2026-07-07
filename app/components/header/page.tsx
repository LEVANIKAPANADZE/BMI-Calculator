"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [light, setLight] = useState(true);

  return (
    <div className="px-4 md:px-8 xl:px-12 pt-4 md:pt-6">
      <header className="flex items-center justify-between px-4 md:px-6 h-14 bg-white border border-gray-200 rounded-2xl shadow-sm max-w-screen-xl mx-auto">
        <Image src="/bmi_logo.jpeg" alt="website logo" width={24} height={24} />
        <h1 className="text-base font-semibold tracking-tight text-gray-900">
          BMI Calculator
        </h1>

        <button
          onClick={() => setLight(!light)}
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-transparent hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {light ? (
            <Image src="/contrast.png" alt="Sun" width={24} height={24} />
          ) : (
            <Image src="/crescent-moon.png" alt="Moon" width={24} height={24} />
          )}
        </button>
      </header>
    </div>
  );
}
