import type { Metadata } from "next"
import "./globals.css"

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          {/* Diagonal accent lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 w-0.5 h-64 bg-[var(--color-accent)] rotate-45 transform origin-top-left" />
            <div className="absolute right-0 bottom-0 w-0.5 h-64 bg-[var(--color-accent)] -rotate-45 transform origin-bottom-right" />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
