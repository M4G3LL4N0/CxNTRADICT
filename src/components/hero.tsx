import Link from "next/link"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(107,91,255,0.08),transparent_50%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 -z-10 bg-gradient-to-l from-white/5 via-transparent to-transparent" />
      <div className="pattern-dots absolute inset-[5%] -z-10 opacity-5 [mask-image:linear-gradient(to_top_right,white,transparent_70%)]" />
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-full max-w-3xl h-32 bg-[var(--color-accent)] opacity-10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-6 pt-32 pb-16 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/60">
            AI narrative intelligence
          </div>
          <h1 className="max-w-5xl text-5xl font-medium leading-[0.93] tracking-[-0.04em] text-white md:text-7xl">
            Cross-examine every narrative.
            <br />
            <span className="text-white/60">Not just the headline.</span>
          </h1>
          <div className="relative inline-block mt-6">
            <span className="relative z-10">Cxntradict</span>
            <div className="absolute left-0 bottom-1 w-full h-1.5 bg-[var(--color-accent)] opacity-60 -rotate-1" />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Cxntradict analyzes news stories and surfaces missing context, alternative explanations,
            structural incentives, and the questions nobody is asking.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/analyze"
            className="rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Try the demo
          </Link>
          <a
            href="#features"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/20"
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
