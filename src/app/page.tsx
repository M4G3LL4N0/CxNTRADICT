import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 sm:gap-32 mobile-py premium-content">
      <div className="relative pb-8 border-b border-neutral-900/50">
        <SiteHeader />
      </div>
      
      <section className="relative isolate">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-full max-w-3xl h-32 bg-[var(--color-accent)] opacity-10 blur-3xl" />
        <Hero />
        <div className="relative">
          {/* X motif */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 bottom-1/4 w-0.5 h-32 bg-[var(--color-accent)] rotate-45 transform origin-bottom-left" />
            <div className="absolute right-0 bottom-1/4 w-0.5 h-32 bg-[var(--color-accent)] -rotate-45 transform origin-bottom-right" />
          </div>
          <FeatureGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute left-0 top-0 w-1 bg-[var(--color-accent)] h-full" />
            <div className="absolute right-0 top-0 w-1 bg-[var(--color-secondary)] h-full" />
          </div>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-white/40">
              Methodology
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
              Intelligence-grade narrative analysis
            </h2>
            <div className="mt-12">
              <div className="relative">
                {/* Process visualization */}
                <div className="absolute inset-0 h-1 w-full bg-white/10 top-1/2 transform -translate-y-1/2" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {[
                    {
                      title: "Ingest",
                      description: "Upload documents, paste text, or link articles",
                      icon: "📥",
                      color: "text-[var(--color-accent)]"
                    },
                    {
                      title: "Analyze",
                      description: "AI identifies assumptions, biases, and omissions",
                      icon: "🔍",
                      color: "text-[var(--color-secondary)]"
                    },
                    {
                      title: "Visualize",
                      description: "Interactive graphs show narrative structure",
                      icon: "📊",
                      color: "text-[var(--color-accent)]"
                    },
                    {
                      title: "Act",
                      description: "Export insights or generate counter-narratives",
                      icon: "🚀",
                      color: "text-[var(--color-secondary)]"
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative bg-black p-6 rounded-lg border border-white/10">
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl ${step.color}`}>
                        {step.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
              Narrative Analysis Process
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
                {[
                  {
                    title: "Input",
                    description: "Provide any media narrative, financial report, or public statement",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    )
                  },
                  {
                    title: "Deconstruct",
                    description: "AI surfaces hidden assumptions, omissions, and incentives",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    )
                  },
                  {
                    title: "Explore",
                    description: "Examine alternative hypotheses and research paths",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 rounded-lg bg-[var(--color-accent)] opacity-0 blur transition group-hover:opacity-20" aria-hidden="true" />
                    <div className="relative h-full rounded-lg border border-white/10 p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black text-[var(--color-accent)]">
                        {item.icon}
                      </div>
                      <h3 id={`case-study-${index}-title`} className="mt-4 text-lg font-medium text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-white/40">
              Case Studies
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
              Real-world narrative analysis in action
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <section id="features" aria-labelledby="features-heading" className="group relative col-span-2">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] opacity-0 blur transition group-hover:opacity-10" />
                  <div className="relative h-full rounded-lg border border-white/10 p-6 gradient-border">
                    <h3 id="features-heading" className="text-xl font-medium text-white">Key Insights</h3>
                    <p className="mt-2 text-sm text-white/60">How we extract signal from narrative noise</p>
                    
                    <div className="mt-6 grid gap-4">
                      {[
                        {
                          metric: "Assumptions",
                          value: "4.2",
                          description: "hidden assumptions per article analyzed"
                        },
                        {
                          metric: "Evidence Gap",
                          value: "62%",
                          description: "of claims lack direct evidence"
                        },
                        {
                          metric: "Omissions",
                          value: "3.8",
                          description: "key context omissions per piece"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full border border-white/10 bg-black flex items-center justify-center text-[var(--color-accent)]">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm text-white/40">{item.metric}</p>
                            <p className="font-medium text-lg text-white">{item.value}</p>
                            <p className="text-xs text-white/50">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                {[
                  {
                    title: "Tech IPO Prospectus",
                    description: "Identified 3 key narrative gaps in a $10B tech IPO",
                    icon: "💻",
                    impact: "+15% investor confidence"
                  },
                  {
                    title: "Political Campaign",
                    description: "Analyzed 50+ speeches to optimize messaging",
                    icon: "🗳️",
                    impact: "+12% voter engagement"
                  },
                  {
                    title: "Corporate Merger",
                    description: "Detected cultural misalignment in merger documents",
                    icon: "🤝",
                    impact: "Saved $200M in integration costs"
                  }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 rounded-lg bg-[var(--color-accent)] opacity-0 blur transition group-hover:opacity-20" />
                    <div className="case-study-card relative h-full rounded-lg border border-white/10 p-6 transition-all duration-300 hover:border-[var(--color-accent)]/20" aria-labelledby={`case-study-${index}-title`}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black text-2xl">
                        {item.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                      <div className="mt-4 text-xs font-medium text-[var(--color-accent)]">
                        Impact: {item.impact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
            <div className="mx-auto max-w-5xl">
              <div className="mb-4 text-xs uppercase tracking-[0.24em] text-white/40">
                Recent Analyses
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                See how others are interrogating narratives
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    id: "1",
                    headline: "Tech CEO claims AI will solve climate change",
                    preview: "Analysis found 4 key assumptions about technological determinism",
                    timestamp: Date.now() - 86400000,
                    data: {
                      keyAssumptions: [
                        "Technology progresses linearly",
                        "Market incentives will drive adoption",
                        "No political/social barriers exist",
                        "Energy requirements are solvable"
                      ],
                      potentialBiases: ["Techno-optimism", "Founder worldview"],
                      counterpoints: ["Jevons paradox", "Rebound effects"]
                    }
                  },
                  {
                    id: "2",
                    headline: "Central bank declares inflation 'transitory'",
                    preview: "Identified 3 narrative techniques used to downplay risks",
                    timestamp: Date.now() - 172800000,
                    data: {
                      keyAssumptions: [
                        "Supply chains will normalize",
                        "Wage-price spiral won't occur",
                        "Energy prices will stabilize"
                      ],
                      potentialBiases: ["Institutional credibility", "Status quo bias"],
                      counterpoints: ["Monetary policy lag", "Sticky inflation"]
                    }
                  }
                ].map((analysis) => (
                  <div key={analysis.id} className="group relative rounded-lg border border-white/10 p-6 hover:border-white/20 transition-colors">
                    <div className="absolute -inset-1 rounded-lg bg-[var(--color-accent)] opacity-0 blur transition group-hover:opacity-10" />
                    <h3 className="text-xl font-medium text-white">{analysis.headline}</h3>
                    <p className="mt-2 text-sm text-white/60">{analysis.preview}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {analysis.data.keyAssumptions.slice(0, 2).map((item, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-white/40">
                      Analyzed {new Date(analysis.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      <CtaBand />
      <Footer />
    </main>
  )
}
