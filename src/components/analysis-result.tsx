import type { AnalysisResponse } from "@/lib/types"

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="text-sm leading-6 text-white/65">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AnalysisResult({
  result,
  loading
}: {
  result: AnalysisResponse | null
  loading: boolean
}) {
  if (loading) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-5 w-48 rounded bg-white/10" />
          <div className="h-24 rounded-3xl bg-white/10" />
          <div className="h-24 rounded-3xl bg-white/10" />
          <div className="h-24 rounded-3xl bg-white/10" />
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-white/40">Output</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
          Structured counter-analysis appears here
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/55">
          You’ll get the dominant narrative, missing context, alternative theories, incentive
          mapping, assumptions, potential biases, counterpoints, and the key questions worth
          investigating next.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-white/40">Headline</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
          {result.headline}
        </h2>
      </div>

      <div className="relative rounded-xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm">
        <div className="absolute left-0 top-0 h-full w-1 bg-[var(--color-accent)] rounded-l-xl" />
        <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 21H21L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)]" />
            <path d="M12 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Dominant Narrative
        </h3>
        <p className="mt-3 text-sm leading-[1.8] text-white/80">{result.dominantNarrative}</p>
      </div>

      <Section title="Structural Context" items={result.missingContext} />
      <Section title="Competing Theories" items={result.alternativeTheories} />
      <Section title="Power Analysis" items={result.incentives} />
      <Section title="Key Assumptions" items={result.keyAssumptions} />
      <Section title="Potential Biases" items={result.potentialBiases} />
      <Section title="Counterpoints" items={result.counterpoints} />
      <div className="relative">
        <Section title="Critical Questions" items={result.unansweredQuestions} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Confidence Note
        </h3>
        <p className="mt-4 text-sm leading-7 text-white/60">{result.confidenceNote}</p>
      </div>
    </div>
  )
}
