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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <FeatureGrid />
      </section>

      <CtaBand />
      <Footer />
    </main>
  )
}
