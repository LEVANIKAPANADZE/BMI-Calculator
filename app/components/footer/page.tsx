export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 px-4 md:px-8 xl:px-12 py-6 md:py-8 border-t border-gray-200 bg-white">
      <h2 className="text-base font-semibold tracking-tight text-gray-900">
        BMI Calculator
      </h2>

      <p className="text-sm text-gray-500 max-w-sm">
        Calculate your Body Mass Index and receive simple health insights to
        help you better understand your overall wellness.
      </p>

      <small className="text-xs text-gray-400">
        © 2026 Levani Kapanadze. All rights reserved.
      </small>
    </footer>
  );
}
