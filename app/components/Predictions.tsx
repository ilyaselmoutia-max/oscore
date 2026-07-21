 export default function Predictions() {
  return (
    <section className="px-10 py-16">
      <h2 className="mb-8 text-4xl font-bold">
        Today's Predictions
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5">
          <span>Barcelona vs Real Madrid</span>
          <span className="rounded bg-green-600 px-3 py-1">
            BTTS ✅
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5">
          <span>Liverpool vs Arsenal</span>
          <span className="rounded bg-blue-600 px-3 py-1">
            Over 2.5
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5">
          <span>PSG vs Marseille</span>
          <span className="rounded bg-yellow-500 px-3 py-1 text-black">
            Home Win
          </span>
        </div>
      </div>
    </section>
  );
}