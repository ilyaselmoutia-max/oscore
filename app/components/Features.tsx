export default function Features() {
  return (
    <section className="grid gap-6 px-10 py-16 md:grid-cols-3">

      <div className="rounded-2xl bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-slate-700">
        <h2 className="text-2xl font-bold">⚽ Live Scores</h2>

        <p className="mt-3 text-gray-300">
          Follow today's football matches live with instant updates.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-slate-700">
        <h2 className="text-2xl font-bold">📊 Statistics</h2>

        <p className="mt-3 text-gray-300">
          Analyze team form, H2H records and player performance.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-800 p-6 shadow-lg transition hover:-translate-y-1 hover:bg-slate-700">
        <h2 className="text-2xl font-bold">🔥 Premium Picks</h2>

        <p className="mt-3 text-gray-300">
          Access premium predictions powered by advanced analysis.
        </p>
      </div>

    </section>
  );
}