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
      <Calculator bmi={bmi} setBmi={setBmi} />
      <BmiScale bmi={bmi} />
    </div>
  );
}
