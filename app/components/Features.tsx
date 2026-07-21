 export default function Features() {
  const features = [
    {
      title: "Live Matches",
      description: "Follow football matches in real time with live updates.",
      icon: "⚽",
    },
    {
      title: "Expert Predictions",
      description: "Daily predictions based on statistics and AI analysis.",
      icon: "📊",
    },
    {
      title: "Premium Tips",
      description: "Unlock exclusive betting tips and high confidence picks.",
      icon: "👑",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Why Choose OScore?
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need for football predictions in one platform.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-slate-800 p-8 transition hover:-translate-y-2 hover:bg-slate-700"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}