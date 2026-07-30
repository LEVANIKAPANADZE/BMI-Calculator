"use client";

import { useEffect, useState } from "react";

export default function tipCard() {
  const [tips, setTips] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    async function fetchTips() {
      try {
        const response = await fetch("/api/tips");

        if (!response.ok) {
          throw new Error("Could not load tips");
        }

        const data = await response.json();
        setTips(data);
      } catch (error) {
        console.error(error);
        setTips([]);
      }
    }
    fetchTips();
  }, []);

  useEffect(() => {
    if (tips.length === 0) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % tips.length);
        setVisible(true);
      }, 400);
    }, 7000);
    return () => clearInterval(interval);
  }, [tips]);

  const tip = tips[current];

  return (
    <div className="w-full px-4 md:px-8 xl:px-12 py-4">
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`
            bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm
            px-5 py-4 md:px-6 md:py-5 transition-all duration-300 ease-in-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
          `}
        >
          {tip ? (
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {tip.category}
                  </span>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    ·
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {tip.impact}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-base leading-none">{tip.icon}</span>
                  <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                    {tip.title}
                  </p>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {tip.description}
                </p>
              </div>

              <div className="flex md:flex-col items-center gap-1.5 flex-shrink-0">
                {tips.slice(0, 6).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setVisible(false);
                      setTimeout(() => {
                        setCurrent(i);
                        setVisible(true);
                      }, 400);
                    }}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === current % 6
                        ? "bg-gray-800 dark:bg-gray-100 w-4 h-1.5 md:w-1.5 md:h-4"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 w-1.5 h-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="h-16 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
