"use client";

import { useState } from "react";
import TipCard from "./components/tipCard/page";
import Calculator from "./components/calculator/page";
import BmiScale from "./components/bmiScale/page";

export default function Home() {
  const [bmi, setBmi] = useState<number | null>(null);

  return (
    <div>
      <TipCard />

      <div className="w-full px-4 md:px-8 xl:px-12 py-6 md:py-10">
        <div className="max-w-md md:max-w-5xl mx-auto flex flex-col md:flex-row gap-4 md:items-stretch">
          <div className="flex-1">
            <Calculator bmi={bmi} setBmi={setBmi} />
          </div>
          <div className="md:w-64">
            <BmiScale bmi={bmi} />
          </div>
        </div>
      </div>
    </div>
  );
}
