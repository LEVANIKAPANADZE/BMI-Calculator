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
    setForm({
      height: "",
      weight: "",
    });
    setBmi(null);
    setError(null);
  }

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
      <button onClick={clear}>Clear</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {bmi !== null && (
        <div>
          <h3>Your BMI</h3>
          <span>{bmi}</span>
        </div>
      )}
    </div>
  );
}
