import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 sm:gap-32 mobile-py">
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
        <CtaBand />
        <Footer />
      </section>
    </main>
  )
}
