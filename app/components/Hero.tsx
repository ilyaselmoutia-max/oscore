 export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 text-center">

      <span className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
        ⚽ Trusted Football Predictions
      </span>

      <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
        Win Smarter With
        <span className="text-blue-500"> OScore</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
        Daily football predictions, live scores, advanced statistics,
        AI-powered analysis, and premium betting insights in one platform.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
          🚀 Get Started
        </button>

        <button className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">
          📊 View Predictions
        </button>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-10 text-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-500">10K+</h2>
          <p className="text-gray-400">Predictions</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-500">92%</h2>
          <p className="text-gray-400">Accuracy</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-blue-500">24/7</h2>
          <p className="text-gray-400">Live Matches</p>
        </div>
      </div>
    </section>
  );
}