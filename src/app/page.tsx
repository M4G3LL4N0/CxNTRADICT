import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <FeatureGrid />
      <CtaBand />
      <Footer />
    </main>
  )
}
