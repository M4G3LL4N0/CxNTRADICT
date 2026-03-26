import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_60%_30%,rgba(239,68,68,0.12),transparent_20%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/60">
            AI narrative intelligence
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
            Cross out the headline.
            <br />
            <span className="text-white/55">Interrogate the narrative.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Cxntradict analyzes news stories and surfaces missing context, alternative explanations,
            structural incentives, and the questions nobody is asking.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/analyze"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Try the demo
          </Link>
          <a
            href="#features"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See the system
          </a>
        </div>

        <div className="grid gap-4 pt-8 md:grid-cols-3">
          {[
            ["Dominant Narrative", "What the public is being told."],
            ["Alternative Theories", "What else could explain the event."],
            ["Power & Incentives", "Who benefits from the framing."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 text-sm font-medium text-white">{title}</div>
              <div className="text-sm leading-6 text-white/55">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
