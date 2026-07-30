"use client";

import { useState } from "react";
import type { CalculatorProps } from "@/types/bmi";

export default function Calculator({ bmi, setBmi }: CalculatorProps) {
  const [form, setForm] = useState({
    height: "",
    weight: "",
  });

  const [error, setError] = useState<string | null>(null);

  function calculate() {
    const height = Number(form.height);
    const weight = Number(form.weight);

    if (!height || !weight || height <= 0 || weight <= 0) {
      setError("Please enter valid height and weight!");
      setBmi(null);
      return;
    }

    setError(null);

    const heightInMeters = height / 100;
    const BMI = weight / (heightInMeters * heightInMeters);

    setBmi(Number(BMI.toFixed(1)));
  }

  function clear() {
    setForm({ height: "", weight: "" });
    setBmi(null);
    setError(null);
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm h-full flex flex-col md:flex-row md:divide-x md:divide-gray-200 dark:md:divide-gray-800 overflow-hidden">
      <div className="flex-1 px-6 py-6 md:px-8 md:py-8 flex flex-col gap-5">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
          Calculate your BMI
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Height (cm)
            </h4>
            <input
              type="number"
              placeholder="Enter your height..."
              value={form.height}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, height: e.target.value }))
              }
              className="w-full h-11 md:h-14 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm md:text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Weight (kg)
            </h4>
            <input
              type="number"
              placeholder="Enter your Weight..."
              value={form.weight}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, weight: e.target.value }))
              }
              className="w-full h-11 md:h-14 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm md:text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800 transition-all"
            />
          </div>
        </div>

        <div className="flex gap-2 md:gap-3">
          <button
            onClick={() => calculate()}
            className="flex-1 h-11 md:h-14 bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 active:scale-[0.98] text-white dark:text-gray-900 text-sm md:text-base font-medium rounded-xl transition-all cursor-pointer"
          >
            Calculate
          </button>
          <button
            onClick={clear}
            className="h-11 md:h-14 px-5 md:px-7 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-[0.98] text-gray-600 dark:text-gray-300 text-sm md:text-base font-medium rounded-xl transition-all cursor-pointer"
          >
            Clear
          </button>
        </div>

        {error && (
          <p className="text-xs md:text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950 border border-red-100 dark:border-red-900 rounded-xl px-4 py-3">
            {error}
          </p>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6 py-8 md:px-8 md:py-8 bg-gray-50 dark:bg-gray-800/50 md:bg-transparent">
        <h3 className="text-xs md:text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
          Your BMI
        </h3>
        {bmi !== null ? (
          <span className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tight">
            {bmi}
          </span>
        ) : (
          <span className="text-6xl md:text-8xl font-bold text-gray-200 dark:text-gray-700 tracking-tight">
            --
          </span>
        )}
      </div>
    </div>
  );
}
