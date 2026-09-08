import { motion } from 'framer-motion'
import { ArrowUpRight, Bug, Calculator, GraduationCap, Heart, Presentation, Users, type LucideIcon } from 'lucide-react'
import { beyondResume } from '@/data/content'
import { HeartDoodle, StarDoodle } from './Doodles'

const icons: Record<string, LucideIcon> = {
  graduationCap: GraduationCap,
  calculator: Calculator,
  users: Users,
  presentation: Presentation,
  heart: Heart,
  bug: Bug,
}

type Tone = 'pink' | 'yellow' | 'lavender' | 'blush' | 'cream' | 'sage'

const toneStyles: Record<Tone, { bg: string; icon: string }> = {
  pink: { bg: 'bg-[#F4DCE1]/70', icon: 'bg-white/50 text-[#8a4f60]' },
  yellow: { bg: 'bg-[#F7F0D6]', icon: 'bg-white/50 text-[#8a6d2c]' },
  lavender: { bg: 'bg-[#EEE4F7]', icon: 'bg-white/50 text-lavender-deep' },
  blush: { bg: 'bg-blush/45', icon: 'bg-white/50 text-[#8a4f5e]' },
  cream: { bg: 'bg-paper-warm', icon: 'bg-lavender/30 text-lavender-deep' },
  sage: { bg: 'bg-[#e9edc9]/70', icon: 'bg-white/50 text-[#4f5a2c]' },
}

function PaperclipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M15 6.5 8.5 13a3 3 0 0 0 4.24 4.24l6.02-6.02a5 5 0 1 0-7.07-7.07L5.5 10.34a7 7 0 1 0 9.9 9.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TapeStrip({ className }: { className?: string }) {
  return <span aria-hidden="true" className={`pointer-events-none absolute h-5 w-14 border border-white/40 bg-white/75 shadow-sm ${className ?? ''}`} />
}

export function DoesntFit() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.55, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute left-10 top-10 hidden text-lavender-deep/60 sm:block"
      >
        <StarDoodle className="h-5 w-5" />
      </motion.span>

      <div className="section-pad relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-[17px] leading-none text-lavender-deep/80 sm:text-[19px]">{beyondResume.eyebrow}</p>
          <h2 className="mt-4 font-serif text-[36px] leading-[1.05] tracking-tight text-ink sm:text-[50px]">
            {beyondResume.heading}
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              whileInView={{ opacity: 0.75, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="ml-2 inline-block align-top text-blush"
            >
              <HeartDoodle className="inline-block h-4 w-5" />
            </motion.span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.65] text-ink/70 sm:text-[16px]">{beyondResume.intro}</p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-[1080px] grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6">
          {beyondResume.cards.map((card, index) => {
            const Icon = icons[card.icon]
            const tone = toneStyles[card.tone as Tone]
            const useTape = index % 2 === 0
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-2xl border border-ink/10 px-6 py-6 shadow-[0_16px_30px_-20px_rgba(20,18,12,0.5)] ${tone.bg} ${card.rotate} ${card.span}`}
              >
                {useTape ? (
                  <TapeStrip className="-top-2.5 left-1/2 -ml-7" />
                ) : (
                  <PaperclipIcon className="absolute -top-3 right-5 h-7 w-7 -rotate-12 text-ink/30" />
                )}

                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${tone.icon}`}>
                  <Icon size={18} strokeWidth={1.7} />
                </span>

                <h3 className="mt-4 border-b border-ink/15 pb-2 font-serif text-[19px] leading-tight text-ink">{card.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.55] text-ink/70">{card.body}</p>

                <p className="font-script mt-4 flex items-center gap-2 text-[14px] leading-none text-lavender-deep/80">
                  {card.note}
                  <span className="h-px flex-1 max-w-8 bg-lavender-deep/35" aria-hidden="true" />
                </p>

                {card.proofHref && (
                  <a
                    href={card.proofHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-3 inline-flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink/50 transition-colors hover:text-ink/80"
                  >
                    {card.proofLabel ?? 'view certificate'}
                    <ArrowUpRight size={12} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
