"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    height: "",
    weight: "",
  });
  const [bmi, setBmi] = useState<number | null>();

  function calculate() {
    const heightInMeters = Number(form.height) / 100;
    const weight = Number(form.weight);

    const BMI = weight / (heightInMeters * heightInMeters);

    setBmi(Number(BMI.toFixed(1)));
  }

  console.log(bmi);

  return (
    <div>
      <h2>Claculate your BMI</h2>

      <div>
        <h4>Height:</h4>
        <input
          type="number"
          placeholder="Enter your height..."
          value={form.height}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              height: e.target.value,
            }))
          }
        />

        <h4>Weight</h4>
        <input
          type="number"
          placeholder="Enter your Weight..."
          value={form.weight}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              weight: e.target.value,
            }))
          }
        />
      </div>

      <button onClick={() => calculate()}>Calculate</button>
    </div>
  );
}
