import type { Metadata } from "next"
import "./globals.css"

import type { RecentAnalysis } from "@/lib/types"

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
          {/* X motif framing */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute left-0 top-0 w-0.5 h-64 bg-[var(--color-accent)] rotate-[44deg] transform origin-top-left opacity-90" />
            <div className="absolute right-0 bottom-0 w-0.5 h-64 bg-[var(--color-accent)] -rotate-[44deg] transform origin-bottom-right opacity-90" />
            <div className="absolute inset-0 border-l border-r border-neutral-900/50" />
          </div>
          <div className="relative isolate pt-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
