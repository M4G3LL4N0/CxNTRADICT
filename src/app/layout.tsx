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
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-secondary)] rotate-[44deg] transform origin-top-left opacity-80 animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute right-0 bottom-0 w-1 h-full bg-gradient-to-t from-[var(--color-accent)] to-[var(--color-secondary)] -rotate-[44deg] transform origin-bottom-right opacity-80 animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-[var(--premium-glow)]" />
            <div className="absolute inset-0 border-l-[1px] border-r-[1px] border-white/20 backdrop-blur-md" />
          </div>
          
          {/* Premium badge */}
          <div className="fixed bottom-6 right-6 z-50 group/premium">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-white/5 to-black/30 border border-white/15 backdrop-blur-md transition-all durationIncorporating the premium refinements into globals.css:

src/app/globals.css
```css
<<<<<<< SEARCH
  --premium-edge: linear-gradient(90deg, transparent 0%, rgba(255,107,107,0.15) 50%, transparent 100%);
          <div className="relative isolate pt-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
