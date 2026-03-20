import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24 mobile-py">
      <div className="relative">
        <span className="absolute -left-8 top-1/4 w-0.5 h-32 bg-[var(--color-accent)] rotate-45 hidden md:block" />
        <SiteHeader />
      </div>
      <Hero />
      <div className="relative">
        <FeatureGrid />
        <span className="absolute -right-8 bottom-1/4 w-0.5 h-32 bg-[var(--color-accent)] -rotate-45 hidden md:block" />
      </div>
      <CtaBand />
      <Footer />
    </main>
  )
}
