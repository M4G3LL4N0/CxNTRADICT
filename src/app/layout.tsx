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
      <body className="min-h-screen bg-black text-white antialiased font-sans selection:bg-[var(--color-accent)] selection:bg-opacity-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
