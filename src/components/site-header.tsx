import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white">
            C
            <span className="absolute text-red-500/90">X</span>
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
