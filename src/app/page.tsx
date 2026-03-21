import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="flex flex-col gap-32 mobile-py">
      <div className="relative">
        {/* X motif */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/4 w-0.5 h-32 bg-[var(--color-accent)] rotate-45 transform origin-top-left" />
          <div className="absolute right-0 top-1/4 w-0.5 h-32 bg-[var(--color-accent)] -rotate-45 transform origin-top-right" />
        </div>
        <SiteHeader />
      </div>
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
    </main>
  )
}
