 export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-10 py-10">

      <h1 className="text-5xl font-bold mb-8">
        ⚽ Today's Matches
      </h1>

      <div className="space-y-6">

        <div className="rounded-2xl bg-slate-800 p-6 hover:bg-slate-700 transition">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Barcelona
              </h2>
              <p className="text-gray-400">
                La Liga
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                20:00
              </p>

              <p className="text-sm text-red-500">
                LIVE
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-bold">
                Real Madrid
              </h2>
              <p className="text-gray-400">
                La Liga
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800 p-6 hover:bg-slate-700 transition">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Liverpool
              </h2>
              <p className="text-gray-400">
                Premier League
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                18:30
              </p>

              <p className="text-sm text-yellow-400">
                Upcoming
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-bold">
                Arsenal
              </h2>
              <p className="text-gray-400">
                Premier League
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800 p-6 hover:bg-slate-700 transition">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                PSG
              </h2>
              <p className="text-gray-400">
                Ligue 1
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                21:00
              </p>

              <p className="text-sm text-green-400">
                Today
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-2xl font-bold">
                Marseille
              </h2>
              <p className="text-gray-400">
                Ligue 1
              </p>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}