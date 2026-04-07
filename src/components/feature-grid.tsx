export function FeatureGrid() {
  const features = [
    {
      title: "Narrative Deconstruction",
      body: "Separate the dominant story from the assumptions embedded inside it."
    },
    {
      title: "Missing Context Detection",
      body: "Highlight absent timelines, omitted history, and inconvenient facts."
    },
    {
      title: "Alternative Theory Engine",
      body: "Generate plausible competing explanations without claiming certainty."
    },
    {
      title: "Incentive Mapping",
      body: "Reveal which institutions, actors, or systems benefit from the framing."
    },
    {
      title: "Research Questions",
      body: "Turn passive reading into active investigation."
    },
    {
      title: "Analyst-Grade UI",
      body: "Designed to feel like a premium intelligence terminal, not a blog."
    }
  ]

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-2xl">
        <div className="mb-3 text-xs uppercase tracking-[0.24em] text-white/40">
          Product system
        </div>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
          A new interface for contested reality
        </h2>
        <p className="mt-4 text-base leading-7 text-white/60">
          Built for people who do not want the first explanation. Built for people who want the
          structure behind the story.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 backdrop-blur-sm hover:border-white/20 transition-all"
          >
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
