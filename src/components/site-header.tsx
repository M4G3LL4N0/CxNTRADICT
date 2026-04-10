"use client"

import Link from "next/link"
import { cn } from "@/lib/cn"

interface NavItem {
  href: string
  label: string
  ariaLabel: string
}

export function SiteHeader() {
  const navItems: NavItem[] = [
    {
      href: "/analyze",
      label: "Analyze",
      ariaLabel: "Analyze content with Cxntradict"
    },
    {
      href: "#features",
      label: "Features",
      ariaLabel: "Explore Cxntradict features"
    },
    {
      href: "#case-studies",
      label: "Case Studies",
      ariaLabel: "See Cxntradict case studies"
    }
  ]
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
            <div
              className={cn(
                "relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-white",
                "group-hover:bg-white/[0.06] transition-colors"
              )}
            >
              <div className="relative" aria-hidden="true">
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label={item.ariaLabel}
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}
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
