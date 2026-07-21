export default function Hero() {
  return (
    <section className="flex h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-extrabold text-white">
        Football Predictions
      </h1>

      <p className="mt-6 max-w-2xl text-xl text-gray-300">
        Get accurate football predictions, live scores, statistics
        and premium analysis in one place.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg hover:bg-blue-700 transition">
          Get Started
        </button>

        <button className="rounded-xl border border-slate-600 px-8 py-4 text-lg hover:bg-slate-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}