export type BMI = number | null;

export type CalculatorProps = {
  bmi: BMI;
  setBmi: (bmi: BMI) => void;
};

export type BmiScaleProps = {
  bmi: BMI;
};
