export default function Footer() {
  return (
    <footer className="px-4 md:px-8 xl:px-12 pb-6 md:pb-8 mt-auto">
      <div className="border-t border-gray-200 pt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-base font-semibold tracking-tight text-gray-900">
            BMI Calculator
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Calculate your Body Mass Index and receive simple health insights to
            help you better understand your overall wellness.
          </p>
        </div>

        <small className="text-xs text-gray-400 md:text-right">
          © 2026 Levani Kapanadze. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
