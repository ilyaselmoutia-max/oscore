 import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-700 px-10 py-6">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-4xl">⚽</span>

        <div>
          <h1 className="text-2xl font-bold text-white">
            OScore
          </h1>

          <p className="text-xs text-gray-400">
            Live Football Platform
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex gap-8">

        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>

        <Link href="/matches" className="hover:text-blue-400 transition">
          Matches
        </Link>

        <Link href="/predictions" className="hover:text-blue-400 transition">
          Predictions
        </Link>

        <Link href="/premium" className="hover:text-blue-400 transition">
          Premium
        </Link>

      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        <Link
          href="/login"
          className="rounded-lg border border-slate-600 px-4 py-2 hover:bg-slate-800 transition"
        >
          Login
        </Link>

        <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700 transition">
          Join Premium
        </button>

      </div>

    </nav>
  );
}