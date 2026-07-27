"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    height: "",
    weight: "",
  });

  const [bmi, setBmi] = useState<number | null>();
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
    <div className="w-full px-4 md:px-8 xl:px-12 py-6 md:py-10">
      <div className="max-w-md md:max-w-3xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col md:flex-row md:divide-x md:divide-gray-200 overflow-hidden">
          <div className="flex-1 px-6 py-6 md:px-8 md:py-8 flex flex-col gap-5">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-900 tracking-tight">
              Calculate your BMI
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Height (cm)
                </h4>
                <input
                  type="number"
                  placeholder="Enter your height..."
                  value={form.height}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, height: e.target.value }))
                  }
                  className="w-full h-11 md:h-14 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm md:text-base text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Weight (kg)
                </h4>
                <input
                  type="number"
                  placeholder="Enter your Weight..."
                  value={form.weight}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, weight: e.target.value }))
                  }
                  className="w-full h-11 md:h-14 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm md:text-base text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100 transition-all"
                />
              </div>
            </div>

            <div className="flex gap-2 md:gap-3">
              <button
                onClick={() => calculate()}
                className="flex-1 h-11 md:h-14 bg-gray-900 hover:bg-gray-700 active:scale-[0.98] text-white text-sm md:text-base font-medium rounded-xl transition-all cursor-pointer"
              >
                Calculate
              </button>
              <button
                onClick={clear}
                className="h-11 md:h-14 px-5 md:px-7 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] text-gray-600 text-sm md:text-base font-medium rounded-xl transition-all cursor-pointer"
              >
                Clear
              </button>
            </div>

            {error && (
              <p className="text-xs md:text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {error}
              </p>
            )}
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6 py-8 md:px-8 md:py-8 bg-gray-50 md:bg-transparent">
            <h3 className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
              Your BMI
            </h3>
            {bmi !== null && bmi !== undefined ? (
              <span className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight">
                {bmi}
              </span>
            ) : (
              <span className="text-6xl md:text-8xl font-bold text-gray-200 tracking-tight">
                --
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
