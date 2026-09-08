import { useState } from 'react'
import { navLinks } from '@/data/content'

export function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="section-pad relative flex items-center justify-between py-2.5">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          className="font-serif text-[15px] font-semibold tracking-tight text-ink"
        >
          PRIYANSHI
        </a>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[3px] p-1 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block h-[1.5px] w-5 bg-ink" />
          <span className="block h-[1.5px] w-5 bg-ink" />
        </button>

        {open && (
          <nav
            className="absolute left-0 right-0 top-full flex flex-col border-b border-x border-line/80 bg-paper sm:hidden"
            aria-label="Primary mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="border-t border-line/10 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
