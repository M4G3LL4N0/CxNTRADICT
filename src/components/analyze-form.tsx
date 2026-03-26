"use client"

import { useState } from "react"
import type { AnalysisResponse } from "@/lib/types"
import { AnalysisResult } from "@/components/analysis-result"

export function AnalyzeForm() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      })

      if (!res.ok) {
        throw new Error("Failed to analyze article")
      }

      const data = (await res.json()) as AnalysisResponse
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <form
        onSubmit={submit}
        className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-6"
      >
        <div className="mb-4">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Input</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
            Paste a headline, article excerpt, or story summary
          </h2>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the mainstream story here. Example: A major outlet reports that a government action was necessary, inevitable, and widely supported..."
          className="min-h-[320px] w-full rounded-3xl border border-white/10 bg-black/40 px-5 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/25"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={loading || text.trim().length < 20}
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Cxntradict This"}
          </button>

          <button
            type="button"
            onClick={() =>
              setText(
                "Major media outlets are reporting that new emergency economic measures are necessary to stabilize markets and restore confidence after a period of volatility."
              )
            }
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Load sample
          </button>
        </div>

        {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}
      </form>

      <AnalysisResult result={result} loading={loading} />
    </div>
  )
}
