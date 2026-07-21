export default function Matches() {
  return (
    <section className="px-10 py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">
        Today's Matches
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5 transition hover:bg-slate-700">
          <span>🇪🇸 Barcelona</span>

          <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
            LIVE
          </span>

          <span className="font-bold">2 - 1</span>

          <span>Real Madrid 🇪🇸</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5 transition hover:bg-slate-700">
          <span>🏴 Liverpool</span>

          <span className="text-gray-400">18:30</span>

          <span>vs</span>

          <span>Manchester City 🏴</span>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5 transition hover:bg-slate-700">
          <span>🇫🇷 PSG</span>

          <span className="text-gray-400">21:00</span>

          <span>vs</span>

          <span>Marseille 🇫🇷</span>
        </div>

      </div>
    </section>
  );
}