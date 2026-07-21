 "use client";

import { useEffect, useState } from "react";

export default function MatchesPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      const res = await fetch("/api/matches");
      const data = await res.json();

      console.log(data);

      setMatches(data.matches || data.response || []);
      setLoading(false);
    }

    loadMatches();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        ⚽ Live Matches
      </h1>

      <div className="space-y-5">
        {matches.map((match: any, index: number) => {
          const home =
            match.homeTeam?.name ||
            match.teams?.home?.name;

          const away =
            match.awayTeam?.name ||
            match.teams?.away?.name;

          const league =
            match.competition?.name ||
            match.league?.name;

          const status =
            match.status ||
            match.fixture?.status?.short;

          return (
            <div
              key={match.id || index}
              className="bg-slate-800 rounded-xl p-5"
            >
              <h2 className="text-2xl font-bold">
                {home} vs {away}
              </h2>

              <p className="text-gray-400 mt-2">
                {league}
              </p>

              <p className="text-green-400 mt-2">
                {status}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}