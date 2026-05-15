"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/cn"

interface NavItem {
  href: string
  label: string
  ariaLabel: string
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const navItems: NavItem[] = [
    { href: "/analyze", label: "Analyze", ariaLabel: "Analyze content with Cxntradict" },
    { href: "#features", label: "Features", ariaLabel: "Explore Cxntradict features" },
    { href: "#case-studies", label: "Case Studies", ariaLabel: "See Cxntradict case studies" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-black/75 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 group" aria-label="Home" onClick={() => setOpen(false)}>
          <div
            className={cn(
              "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-white",
              "group-hover:bg-white/[0.06] transition-colors"
            )}
          >
            <span className="relative" aria-hidden="true">
              <span>C</span>
              <span className="absolute left-0 text-[var(--color-accent)]">X</span>
            </span>
          </div>
          <div className="hidden min-w-0 flex-col sm:flex">
            <div className="text-sm font-semibold tracking-[0.18em] text-white uppercase truncate">Cxntradict</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">Cross out the narrative</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              aria-label={item.ariaLabel}
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/analyze"
            className="hidden rounded-xl border border-white/10 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-graphite)] px-4 py-2.5 text-sm font-semibold text-white sm:inline-flex"
            aria-label="Start new content analysis with Cxntradict"
            onClick={() => setOpen(false)}
          >
            Cxntradict This
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="cxntradict-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="cxntradict-mobile-nav" className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 md:hidden" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/analyze"
            className="mt-1 rounded-xl bg-[var(--color-accent)] px-3 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Cxntradict This
          </Link>
        </nav>
      )}
    </header>
  )
}
