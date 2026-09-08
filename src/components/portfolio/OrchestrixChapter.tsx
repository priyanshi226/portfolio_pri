import { motion } from 'framer-motion'
import { asset } from '@/data/content'

function TapeStrip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-6 w-14 border border-white/40 bg-paper/65 shadow-sm ${className ?? ''}`}
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
      <TapeStrip className="-top-2.5 left-1/2 -ml-7 bg-lilac/50" />
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
        {/* RIGHT (desktop) — date + heading, placed first for mobile order */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="lg:col-start-2 lg:row-start-1"
        >
          <p className="inline-flex rounded-full bg-lilac/35 px-4 py-0.5 text-[13px] font-semibold tracking-[0.1em] text-ink/65">
            May 2025 — Present
          </p>
          <p className="eyebrow mt-3 text-ink/50">Current chapter</p>
          <h3 className="mt-1 font-serif text-[35px] leading-[1.02] tracking-tight text-ink sm:text-[46px]">
            ORCHESTRIX
            <br />
            TECHNOLOGIES
          </h3>
          <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/55">Software Engineer</p>
        </motion.div>

        {/* LEFT (desktop) — photo + sticky notes, spans both rows */}
        <div className="relative lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <motion.div
            initial={{ opacity: 0, y: -8, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 hidden pl-2 sm:block"
          >
            <p className="font-script text-lg leading-[1.15] text-lavender-deep">
              where ideas
              <br />
              turned into
              <br />
              real work <span className="text-blush">♡</span>
            </p>
            <svg viewBox="0 0 60 50" className="mt-1 h-9 w-11 text-lavender-deep/70" fill="none" aria-hidden="true">
              <path
                d="M8 4C6 16 10 26 24 32C34 36 44 34 52 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M40 26L52 28L46 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <motion.figure
              initial={{ opacity: 0, y: 18, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[360px] shrink-0 border-[10px] border-paper bg-paper pb-9 shadow-[0_20px_38px_-18px_rgba(20,18,12,0.55)] lg:mx-0 lg:w-[60%]"
            >
              <TapeStrip className="-top-4 left-1/2 -ml-7 bg-lilac/65" />
              <img
                src={asset('orchestrix-workspace.png')}
                alt="A software engineering workspace"
                className="aspect-[4/5] w-full object-cover object-center"
                loading="lazy"
              />
              <figcaption className="font-script absolute bottom-2 right-3 text-[15px] leading-none text-ink/60">
                grateful for the people, the problems <br className="hidden sm:block" /> and the learnings{' '}
                <span className="text-blush">♡</span>
              </figcaption>
            </motion.figure>

            <div className="grid grid-cols-2 gap-3 lg:flex lg:w-[38%] lg:flex-col lg:gap-4">
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

        {/* RIGHT (desktop) — journey text + quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-start-2 lg:row-start-2"
        >
          <div className="space-y-4 text-[14.5px] leading-[1.65] text-ink/78 sm:text-[15.5px]">
            <p>
              I'm currently working at Orchestrix Technologies, where I get to build, learn, and solve real problems
              every day.
            </p>
            <p>
              It's been an amazing experience so far — I've worked on building product features, internal tools, and
              AI-powered systems, while getting a much deeper understanding of how a product actually goes from an
              idea to something people use.
            </p>
            <p>
              Most importantly, I've been surrounded by incredibly supportive and talented people who push me to
              learn, take ownership, and keep growing.
            </p>
          </div>

          <p className="font-script mt-6 border-l-2 border-lavender-deep/50 pl-4 text-[22px] italic leading-[1.15] text-ink/70">
            "Same curious me,
            <br />
            just a little more confident now."
          </p>
        </motion.div>
      </div>
    </article>
  )
}
