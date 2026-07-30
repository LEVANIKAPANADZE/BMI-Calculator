type BmiScaleProps = {
  bmi: number | null;
};

const CATEGORIES = [
  {
    label: "Underweight",
    min: 12,
    max: 18.5,
    bar: "bg-blue-400",
    text: "text-blue-500",
    border: "border-blue-400",
  },
  {
    label: "Normal",
    min: 18.5,
    max: 25,
    bar: "bg-green-400",
    text: "text-green-500",
    border: "border-green-400",
  },
  {
    label: "Overweight",
    min: 25,
    max: 30,
    bar: "bg-yellow-400",
    text: "text-yellow-500",
    border: "border-yellow-400",
  },
  {
    label: "Obese",
    min: 30,
    max: 42,
    bar: "bg-red-400",
    text: "text-red-500",
    border: "border-red-400",
  },
];

const SCALE_MIN = CATEGORIES[0].min;
const SCALE_MAX = CATEGORIES[CATEGORIES.length - 1].max;

function getCategory(bmi: number) {
  return (
    CATEGORIES.find((c) => bmi < c.max) ?? CATEGORIES[CATEGORIES.length - 1]
  );
}

export default function Page({ bmi }: BmiScaleProps) {
  const hasBmi = bmi !== null;

  const clamped = hasBmi
    ? Math.min(Math.max(bmi, SCALE_MIN), SCALE_MAX)
    : SCALE_MIN;

  const percent = ((clamped - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;

  const category = hasBmi ? getCategory(bmi) : null;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm px-6 py-6 md:px-6 md:py-7 h-full flex flex-col md:items-center gap-5">
      <div className="flex items-center justify-between w-full md:flex-col md:gap-1.5">
        <span className="text-xs md:text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
          BMI Scale
        </span>

        <span
          className={`text-sm md:text-base font-bold text-center ${
            category ? category.text : "text-gray-300 dark:text-gray-600"
          }`}
        >
          {category ? category.label : "No data yet"}
        </span>
      </div>

      <div className="flex flex-col gap-2 w-full md:hidden">
        <div className="relative w-full h-4">
          <div className="absolute inset-0 flex rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-inner">
            {CATEGORIES.map((c) => (
              <div
                key={c.label}
                className={`h-full ${c.bar}`}
                style={{
                  width: `${((c.max - c.min) / (SCALE_MAX - SCALE_MIN)) * 100}%`,
                }}
              />
            ))}
          </div>

          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white dark:bg-gray-900 border-2 border-gray-800 dark:border-gray-200 rounded-full shadow-md transition-all duration-300 z-10"
            style={{ left: `${percent}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] font-medium text-gray-400 dark:text-gray-500 px-0.5">
          <span>{SCALE_MIN}</span>
          <span>18.5</span>
          <span>25</span>
          <span>30</span>
          <span>{SCALE_MAX}</span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 gap-4 items-stretch">
        <div className="flex flex-col justify-between text-xs font-semibold text-gray-400 dark:text-gray-500 py-1">
          <span>{SCALE_MAX}</span>
          <span>30</span>
          <span>25</span>
          <span>18.5</span>
          <span>{SCALE_MIN}</span>
        </div>

        <div
          className="relative w-8 rounded-full bg-gray-100 dark:bg-gray-800 shadow-inner"
          role="img"
          aria-label={
            hasBmi ? `BMI ${bmi}, ${category?.label}` : "BMI scale, no data yet"
          }
        >
          <div className="absolute inset-0 flex flex-col-reverse rounded-full overflow-hidden">
            {CATEGORIES.map((c) => (
              <div
                key={c.label}
                className={`w-full ${c.bar}`}
                style={{
                  height: `${((c.max - c.min) / (SCALE_MAX - SCALE_MIN)) * 100}%`,
                }}
              />
            ))}
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 w-10 xl:w-12 h-1.5 bg-gray-800 dark:bg-gray-100 rounded-full shadow-lg transition-all duration-300 z-10"
            style={{ bottom: `${percent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-wrap md:flex-col-reverse items-center md:items-start gap-x-4 gap-y-1.5 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-gray-800 w-full">
        {CATEGORIES.map((c) => (
          <div key={c.label} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${c.bar}`} />

            <span className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
