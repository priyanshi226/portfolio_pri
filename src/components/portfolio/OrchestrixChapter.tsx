import { motion } from 'framer-motion'
import { asset } from '@/data/content'
import { StarDoodle } from './Doodles'

function TapeStrip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-6 w-14 border border-white/40 bg-white/75 shadow-sm ${className ?? ''}`}
    />
  )
}

type NoteTone = 'pink' | 'yellow' | 'lavender' | 'cream'

const noteTones: Record<NoteTone, string> = {
  pink: 'bg-[#F4DCE1]',
  yellow: 'bg-[#F7F0D6]',
  lavender: 'bg-[#EEE4F7]',
  cream: 'bg-paper',
}

function StickyNote({
  title,
  points,
  tone,
  rotate,
  delay,
}: {
  title: string
  points: string[]
  tone: NoteTone
  rotate: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative border border-ink/10 px-3.5 py-3 shadow-[0_10px_18px_-12px_rgba(20,18,12,0.55)] ${noteTones[tone]} ${rotate}`}
    >
      <TapeStrip className="-top-2.5 left-1/2 -ml-7 bg-white/80" />
      <p className="font-script text-[16px] leading-none text-ink underline decoration-ink/25 underline-offset-4">
        {title}
      </p>
      <ul className="mt-2 space-y-1">
        {points.map((point) => (
          <li key={point} className="text-[11.5px] leading-snug text-ink/65">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function OrchestrixChapterBlock() {
  return (
    <article className="relative pl-9 sm:pl-0">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="absolute left-3 top-1 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink bg-lavender sm:left-1/2"
        aria-hidden="true"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
        {/* LEFT (desktop) — heading, journey text and quote, together in one column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative lg:col-start-1"
        >
          <p className="inline-flex rounded-full bg-white/80 px-4 py-0.5 text-[13px] font-semibold tracking-[0.1em] text-ink/65">
            May 2025 — Present
          </p>
          <p className="eyebrow mt-3 text-ink/50">Current chapter</p>
          <h3 className="mt-1 font-serif text-[35px] leading-[1.02] tracking-tight text-ink sm:text-[46px]">
            ORCHESTRIX
            <br />
            TECHNOLOGIES
          </h3>
          <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/55">Software Engineer</p>

          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 0.55, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pointer-events-none absolute right-0 top-0 hidden text-lilac lg:block"
          >
            <StarDoodle className="h-5 w-5" />
          </motion.span>

          <div className="mt-6 space-y-4 text-[14.5px] leading-[1.65] text-ink/78 sm:text-[15.5px]">
            <p>
              I'm currently working at Orchestrix Technologies, building and improving product features, internal
              tools, and AI-powered systems across the stack.
            </p>

            <p>
              I work closely with the team to turn business requirements into production-ready solutions, from
              frontend experiences and backend APIs to debugging, integrations, and feature improvements.
            </p>

            <p>
              Working with Python, Flask/FastAPI, React, TypeScript, databases, and AI technologies, I've learned to
              take ownership of problems, collaborate closely, and turn ideas into software people can actually use.
            </p>

            <p>
              Along the way, I've also gained a stronger understanding of product thinking, balancing technical
              decisions with user needs, business goals, and the practical realities of shipping and improving
              software.
            </p>
          </div>

          {/* <p className="font-script mt-6 border-l-2 border-lavender-deep/50 pl-4 text-[22px] italic leading-[1.15] text-ink/70">
            "Same curious me,
            <br />
            just a little more confident now."
          </p> */}
        </motion.div>

        {/* RIGHT (desktop) — photo with doodle beside it, notes at the bottom */}
        <div className="relative lg:col-start-2">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 10, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute -right-[104px] top-6 z-10 hidden w-24 text-left text-lavender-deep lg:block"
              >
                <p className="font-script text-lg leading-[1.15]">
                  where ideas
                  <br />
                  turned into
                  <br />
                  real work <span className="text-blush">♡</span>
                </p>
                <svg viewBox="0 0 44 34" className="mr-auto mt-1.5 h-8 w-11" fill="none" aria-hidden="true">
                  <path
                    d="M40 6C26 4 12 8 6 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path d="M15 15L6 20L12 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, y: 18, rotate: -4 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[360px] border-[10px] border-paper bg-paper shadow-[0_20px_38px_-18px_rgba(20,18,12,0.55)] lg:mx-0 lg:max-w-none"
              >
                <TapeStrip className="-top-4 left-1/2 -ml-7 bg-white/80" />
                <img
                  src={asset('journey-orchestrix.png')}
                  alt="A software engineering workspace with notebook and phone"
                  className="aspect-[1179/875] w-full object-cover object-center"
                  loading="lazy"
                />
                <figcaption className="font-script pt-3 pb-1.5 text-right text-[15px] leading-snug text-ink/60">
                  grateful for the people, the problems <br className="hidden sm:block" /> and the learnings{' '}
                  <span className="text-blush">♡</span>
                </figcaption>
              </motion.figure>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              <StickyNote
                title="BUILT"
                tone="pink"
                rotate="-rotate-1"
                delay={0.25}
                points={['Product features', 'Internal tools', 'AI-powered systems']}
              />
              <StickyNote
                title="LEARNED"
                tone="yellow"
                rotate="rotate-1"
                delay={0.35}
                points={['Real-world development', 'Ownership & responsibility', 'How products actually ship']}
              />
              <StickyNote
                title="WORKED ON"
                tone="lavender"
                rotate="rotate-1"
                delay={0.45}
                points={['Frontend + backend', 'Feature ideation', 'Debugging & improvements']}
              />
              <StickyNote
                title="AMAZING TEAM ♡"
                tone="cream"
                rotate="-rotate-1"
                delay={0.55}
                points={['Supportive, kind and', 'incredibly talented']}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
