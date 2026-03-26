import { SiteHeader } from "@/components/site-header"
import { AnalyzeForm } from "@/components/analyze-form"
import { Footer } from "@/components/footer"

export default function AnalyzePage() {
  return (
    <main className="isolate">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-white/40">
            Narrative Intelligence Workspace
          </div>
          <h1 className="text-4xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="relative">
              Cross-examine
              <div className="absolute left-0 bottom-1 w-[85%] h-1 bg-[var(--color-accent)] -rotate-1 opacity-60" />
            </span> any narrative
          </h1>
          <p className="mt-4 text-base leading-7 text-white/65">
            Extract structural insights from any news story, financial report, or public statement.
          </p>
        </div>

        <AnalyzeForm />
      </section>
      <Footer />
    </main>
  )
}
