"use client"

import { useState, useEffect } from "react"
import type { AnalysisResponse } from "@/lib/types"
import { AnalysisResult } from "@/components/analysis-result"

type RecentAnalysis = {
  id: string
  headline: string
  preview: string
  timestamp: number
  data: AnalysisResponse
}

export function AnalyzeForm() {
  const [activeTab, setActiveTab] = useState<'full' | 'headline'>('full')
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [recentAnalyses, setRecentAnalyses] = useState<RecentAnalysis[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('cx-recent-analyses')
    if (saved) {
      setRecentAnalyses(JSON.parse(saved))
    }
  }, [])

  const saveAnalysis = (data: AnalysisResponse) => {
    const newAnalysis = {
      id: Date.now().toString(),
      headline: data.headline,
      preview: data.dominantNarrative.slice(0, 100) + '...',
      timestamp: Date.now(),
      data
    }
    const updated = [newAnalysis, ...recentAnalyses].slice(0, 5)
    setRecentAnalyses(updated)
    localStorage.setItem('cx-recent-analyses', JSON.stringify(updated))
  }

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
      saveAnalysis(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const loadRecent = (analysis: RecentAnalysis) => {
    setResult(analysis.data)
    setText(
      analysis.data.dominantNarrative + 
      '\n\nContext: ' + 
      analysis.data.missingContext.slice(0, 2).join('\n- ')
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <form
        onSubmit={submit}
        className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-6"
      >
        <div className="mb-5">
          <div className="text-xs font-medium uppercase tracking-[0.24em] text-white/40">Input</div>
          <h2 className="mt-2 text-xl font-medium tracking-[-0.02em] text-white">
            Deconstruct media narratives
          </h2>
        </div>

        <div className="mb-4 flex border-b border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab('full')}
            className={`pb-3 pr-4 text-sm font-medium transition ${activeTab === 'full' ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
          >
            Full Article
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('headline')}
            className={`pb-3 px-4 text-sm font-medium transition ${activeTab === 'headline' ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
          >
            Headline Only
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={activeTab === 'full' 
            ? "Paste media narrative, financial report, or public statement for structured deconstruction..."
            : "Paste headline only for rapid analysis of dominant framing..."}
          className="min-h-[320px] w-full rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm leading-[1.75] text-white/90 outline-none ring-0 placeholder:text-white/25 hover:border-white/20 focus:border-white/30 focus:bg-black/30 transition-colors"
        />

        {recentAnalyses.length > 0 && (
          <div className="mt-4 border-t border-white/5 pt-4">
            <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              Recent Analyses
            </div>
            <div className="space-y-2">
              {recentAnalyses.map((analysis) => (
                <button
                  key={analysis.id}
                  onClick={() => loadRecent(analysis)}
                  className="block w-full truncate rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <div className="font-medium">{analysis.headline}</div>
                  <div className="text-xs text-white/50">{analysis.preview}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={loading || text.trim().length < 20}
            className="rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-[var(--color-accent)]" />
                <span>Deconstructing narrative...</span>
              </div>
            ) : (
              <>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 7L17 17M7 17L17 7" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Cxntradict</span>
              </>
            )}
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
