import Link from "next/link"

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-black p-8 md:p-12 backdrop-blur-sm">
        <div className="max-w-3xl">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">
            Launch fast
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Turn passive news consumption into adversarial analysis.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
            Start with a single page. Paste a story. Get a structured counter-analysis in seconds.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/analyze"
            className="rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Open analyzer
          </Link>
        </div>
      </div>
    </section>
  )
}
