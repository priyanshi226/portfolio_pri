import { useEffect, useState } from 'react'
import { navLinks } from '@/data/content'
import { UnderlineDoodle } from './Doodles'

type SectionId = 'home' | 'about' | 'work' | 'journey' | 'contact'

const themes: Record<
  SectionId,
  {
    bg: string
    border: string
    text: string
    textMuted: string
    hoverText: string
    accentText: string
    accentBg: string
    barBg: string
  }
> = {
  // Creamish header everywhere, except the About section (which is
  // itself creamish) — that one flips to the olive green instead, so the
  // bar never sits on a same-toned section. The accent (dot + underline)
  // still borrows each section's own established color for identity.
  home: {
    // section bg: olive (green)
    bg: 'bg-paper/95',
    border: 'border-line/80',
    text: 'text-ink',
    textMuted: 'text-ink/60',
    hoverText: 'hover:text-ink',
    accentText: 'text-olive',
    accentBg: 'bg-olive',
    barBg: 'bg-ink',
  },
  about: {
    // section bg: paper (creamish)
    bg: 'bg-olive/95',
    border: 'border-paper/15',
    text: 'text-paper',
    textMuted: 'text-paper/60',
    hoverText: 'hover:text-paper',
    accentText: 'text-lilac',
    accentBg: 'bg-lilac',
    barBg: 'bg-paper',
  },
  work: {
    // section bg: blush (pink)
    bg: 'bg-paper/95',
    border: 'border-line/80',
    text: 'text-ink',
    textMuted: 'text-ink/60',
    hoverText: 'hover:text-ink',
    accentText: 'text-lavender-deep',
    accentBg: 'bg-lavender-deep',
    barBg: 'bg-ink',
  },
  journey: {
    // section bg: lavender (purple)
    bg: 'bg-paper/95',
    border: 'border-line/80',
    text: 'text-ink',
    textMuted: 'text-ink/60',
    hoverText: 'hover:text-ink',
    accentText: 'text-lavender-deep',
    accentBg: 'bg-lavender-deep',
    barBg: 'bg-ink',
  },
  contact: {
    // section bg: olive (green)
    bg: 'bg-paper/95',
    border: 'border-line/80',
    text: 'text-ink',
    textMuted: 'text-ink/60',
    hoverText: 'hover:text-ink',
    accentText: 'text-blush',
    accentBg: 'bg-blush',
    barBg: 'bg-ink',
  },
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<SectionId>('home')
  const theme = themes[active]

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b ${theme.border} ${theme.bg} shadow-[0_2px_10px_rgba(20,18,12,0.04)] backdrop-blur transition-colors duration-500`}
    >
      <div className="section-pad relative flex items-center justify-between py-4 sm:py-5">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          className="group flex items-center gap-2"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${theme.accentBg} transition-all duration-500 group-hover:scale-125`}
            aria-hidden="true"
          />
          <span className={`font-serif text-[19px] font-semibold tracking-tight ${theme.text} transition-colors duration-500 sm:text-[21px]`}>
            PRIYANSHI
          </span>
        </a>

        <nav className="hidden items-center gap-9 sm:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = link.href === `#${active}`
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className={`group relative text-[12.5px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 ${theme.hoverText} ${isActive ? theme.text : theme.textMuted}`}
              >
                {link.label}
                <UnderlineDoodle
                  className={`absolute -bottom-1.5 left-0 h-2 w-full origin-left scale-x-0 ${theme.accentText} transition-transform duration-300 group-hover:scale-x-100 ${isActive ? 'scale-x-100' : ''}`}
                />
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[4px] p-1.5 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-[1.5px] w-6 ${theme.barBg} transition-colors duration-500`} />
          <span className={`block h-[1.5px] w-6 ${theme.barBg} transition-colors duration-500`} />
        </button>

        {open && (
          <nav
            className={`absolute left-0 right-0 top-full flex flex-col border-b border-x ${theme.border} ${theme.bg} shadow-[0_10px_20px_rgba(20,18,12,0.06)] backdrop-blur sm:hidden`}
            aria-label="Primary mobile"
          >
            {navLinks.map((link) => {
              const isActive = link.href === `#${active}`
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className={`border-t border-line/10 px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 ${isActive ? theme.text : theme.textMuted}`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
