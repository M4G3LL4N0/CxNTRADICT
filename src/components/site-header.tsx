"use client"

import Link from "next/link.js"
import { cn } from "@/lib/cn"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
            <div
              className={cn(
                "relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-white",
                "group-hover:bg-white/[0.06] transition-colors"
              )}
            >
              <div className="relative">
                <span>C</span>
                <span className="absolute left-0 text-[var(--color-accent)]">X</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
                Cxntradict
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                Cross out the narrative
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            <Link
              href="/analyze"
              prefetch={false}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Analyze content with Cxntradict"
            >
              Analyze
            </Link>
            <Link
              href="#features"
              prefetch={false}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="Explore Cxntradict features"
            >
              Features
            </Link>
            <Link
              href="#case-studies"
              prefetch={false}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="See Cxntradict case studies"
            >
              Case Studies
            </Link>
          </nav>
        </div>

        <Link
          href="/analyze"
          className="rounded-xl border border-white/15 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Start new content analysis with Cxntradict"
        >
          Cxntradict This
        </Link>
      </div>
    </header>
  )
}
