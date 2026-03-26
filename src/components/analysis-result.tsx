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
          mapping, and the key questions worth investigating next.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-white/40">Headline</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
          {result.headline}
        </h2>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Dominant Narrative
        </h3>
        <p className="mt-4 text-sm leading-7 text-white/65">{result.dominantNarrative}</p>
      </div>

      <Section title="Missing Context" items={result.missingContext} />
      <Section title="Alternative Theories" items={result.alternativeTheories} />
      <Section title="Incentives" items={result.incentives} />
      <Section title="Unanswered Questions" items={result.unansweredQuestions} />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          Confidence Note
        </h3>
        <p className="mt-4 text-sm leading-7 text-white/60">{result.confidenceNote}</p>
      </div>
    </div>
  )
}
