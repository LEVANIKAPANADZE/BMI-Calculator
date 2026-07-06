"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [tips, setTips] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    async function fetchTips() {
      const response = await fetch("/api/data");
      const data = await response.json();
      setTips(data);
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
    }, 5000);
    return () => clearInterval(interval);
  }, [tips]);

  const tip = tips[current];

  return (
    <div className="w-full px-4 md:px-8 xl:px-12 py-4">
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`
            bg-white border border-gray-200 rounded-2xl shadow-sm
            px-5 py-5 flex flex-col gap-3
            transition-all duration-300 ease-in-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
          `}
        >
          {tip ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl text-xl">
                  {tip.icon}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {tip.category}
                    </span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{tip.impact}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900"></p>
                </div>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                {tip.description}
              </p>

              <div className="flex items-center gap-1.5">
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
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current % 6
                        ? "bg-gray-800 w-4"
                        : "bg-gray-200 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="h-16 w-full bg-gray-100 rounded-xl animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
