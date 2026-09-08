import { useState } from 'react'
import { navLinks } from '@/data/content'
import { UnderlineDoodle } from './Doodles'

export function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 shadow-[0_2px_10px_rgba(20,18,12,0.04)] backdrop-blur">
      <div className="section-pad relative flex items-center justify-between py-4 sm:py-5">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          className="group flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lilac transition-transform group-hover:scale-125" aria-hidden="true" />
          <span className="font-serif text-[19px] font-semibold tracking-tight text-ink sm:text-[21px]">
            PRIYANSHI
          </span>
        </a>

        <nav className="hidden items-center gap-9 sm:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              className="group relative text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
              <UnderlineDoodle className="absolute -bottom-1.5 left-0 h-2 w-full origin-left scale-x-0 text-lilac transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[4px] p-1.5 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block h-[1.5px] w-6 bg-ink" />
          <span className="block h-[1.5px] w-6 bg-ink" />
        </button>

        {open && (
          <nav
            className="absolute left-0 right-0 top-full flex flex-col border-b border-x border-line/80 bg-paper shadow-[0_10px_20px_rgba(20,18,12,0.06)] sm:hidden"
            aria-label="Primary mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="border-t border-line/10 px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink/80"
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
