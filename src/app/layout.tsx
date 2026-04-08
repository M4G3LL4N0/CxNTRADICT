import type { Metadata } from "next"
import "./globals.css"

export type RecentAnalysis = {
  id: string
  headline: string
  preview: string
  timestamp: number
  data: {
    keyAssumptions: string[]
    potentialBiases: string[]
    counterpoints: string[]
  }
}

export const metadata: Metadata = {
  title: "Cxntradict",
  description: "Cross out the headline. Interrogate the narrative."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-black text-white antialiased font-sans selection:bg-[var(--color-accent)] selection:bg-opacity-30 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Premium X motif framing */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-72 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-secondary)] rotate-[44deg] transform origin-top-left opacity-90" />
            <div className="absolute right-0 bottom-0 w-1 h-72 bg-gradient-to-t from-[var(--color-accent)] to-[var(--color-secondary)] -rotate-[44deg] transform origin-bottom-right opacity-90" />
            <div className="absolute inset-0 bg-[var(--premium-glow)]" />
            <div className="absolute inset-0 border-l border-r border-white/5 backdrop-blur-sm" />
          </div>
          
          {/* Premium badge */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-white/80">PREMIUM</span>
            </div>
          </div>
          <div className="relative isolate pt-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
