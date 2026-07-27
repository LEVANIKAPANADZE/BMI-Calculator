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
  },
  {
    label: "Normal",
    min: 18.5,
    max: 25,
    bar: "bg-green-400",
    text: "text-green-500",
  },
  {
    label: "Overweight",
    min: 25,
    max: 30,
    bar: "bg-yellow-400",
    text: "text-yellow-500",
  },
  { label: "Obese", min: 30, max: 42, bar: "bg-red-400", text: "text-red-500" },
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
  const position = ((clamped - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
  const category = hasBmi ? getCategory(bmi) : null;

  return (
    <div className="w-full px-4 md:px-8 xl:px-12 py-4">
      <div className="max-w-md md:max-w-3xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-6 md:px-8 md:py-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
              BMI Scale
            </h3>
            <span
              className={`text-sm md:text-base font-semibold ${
                category ? category.text : "text-gray-300"
              }`}
            >
              {category ? category.label : "No data yet"}
            </span>
          </div>

          <div
            className="relative w-full h-3 md:h-3.5 rounded-full overflow-hidden bg-gray-100"
            role="img"
            aria-label={
              hasBmi
                ? `BMI ${bmi}, ${category?.label}`
                : "BMI scale, no data yet"
            }
          >
            <div className="absolute inset-0 flex">
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
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-white border-2 border-gray-900 rounded-full shadow-md transition-all duration-300"
              style={{ left: `${position}%` }}
            />
          </div>

          <div className="flex justify-between text-[10px] md:text-xs text-gray-400 px-0.5">
            {[SCALE_MIN, ...CATEGORIES.map((c) => c.max)].map((val) => (
              <span key={val}>{val}</span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 border-t border-gray-100">
            {CATEGORIES.map((c) => (
              <div key={c.label} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${c.bar}`} />
                <span className="text-[11px] md:text-xs text-gray-500">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
