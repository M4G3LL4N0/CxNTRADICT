import { SiteHeader } from "@/components/site-header"
import { AnalyzeForm } from "@/components/analyze-form"
import { Footer } from "@/components/footer"

export default function AnalyzePage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-white/40">
            Live product demo
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Cxntradict This
          </h1>
          <p className="mt-4 text-base leading-7 text-white/60">
            Paste a news narrative and get structured adversarial analysis in seconds.
          </p>
        </div>

        <AnalyzeForm />
      </section>
      <Footer />
    </main>
  )
}
