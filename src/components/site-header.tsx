import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-white group-hover:bg-white/[0.06] transition-colors">
            <span>C</span>
            <span className="absolute text-[var(--color-accent)]">X</span>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
              Cxntradict
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
              Cross out the narrative
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-white/70 transition hover:text-white">
            Home
          </Link>
          <Link href="/analyze" className="text-sm text-white/70 transition hover:text-white">
            Analyze
          </Link>
        </nav>

        <Link
          href="/analyze"
          className="rounded-xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Cxntradict This
        </Link>
      </div>
    </header>
  )
}
