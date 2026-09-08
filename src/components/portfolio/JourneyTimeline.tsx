import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  journeyIntro,
  collegeChapter,
  photomathChapter,
  qaChapter,
} from '@/data/content'
import { BugDoodle, MathDoodle, ScribbleDivider, StarDoodle } from './Doodles'
import { SchoolChapterBlock } from './SchoolChapter'

function TimelineLine() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
      style={{ transformOrigin: 'top' }}
      className="absolute left-3 top-2 bottom-2 w-[2px] border-l-2 border-dashed border-ink/30 sm:left-1/2 sm:-translate-x-1/2"
      aria-hidden="true"
    />
  )
}

function Node({ children }: { children?: React.ReactNode }) {
  return (
    <span className="absolute left-3 top-1 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-ink bg-lavender sm:left-1/2">
      {children}
    </span>
  )
}

function Chapter({
  side,
  years,
  children,
}: {
  side: 'left' | 'right'
  years: string
  children: React.ReactNode
}) {
  return (
    <div className="relative pl-10 sm:pl-0">
      <Node />
      <div
        className={
          side === 'left'
            ? 'sm:mr-[calc(50%+28px)] sm:text-right'
            : 'sm:ml-[calc(50%+28px)]'
        }
      >
        <p className={`font-script -mb-1 text-2xl text-ink/70 ${side === 'left' ? 'sm:text-right' : ''}`}>
          {years}
        </p>
        {children}
      </div>
    </div>
  )
}

export function JourneyTimeline() {
  const [bugFound, setBugFound] = useState<Record<number, boolean>>({})

  return (
    <section id="journey" className="relative bg-lavender py-16 sm:py-20">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-[36px] tracking-tight text-ink sm:text-[50px]">MY JOURNEY</h2>
          <p className="font-script -mt-2 text-2xl text-lavender-deep sm:text-3xl">(so far)</p>
          <p className="eyebrow mx-auto mt-3 max-w-xs text-ink/50 sm:max-w-none">{journeyIntro}</p>
        </motion.div>

        <div className="relative mt-16 space-y-16 sm:mt-24 sm:space-y-20">
          <TimelineLine />

          <SchoolChapterBlock />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center py-1 text-ink/30"
            aria-hidden="true"
          >
            <svg viewBox="0 0 16 28" className="h-6 w-3.5" fill="none">
              <path d="M8 1V24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1 4" />
              <path d="M3 20L8 26L13 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </motion.div>

          {/* COLLEGE */}
          <Chapter side="right" years={collegeChapter.years}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow text-ink/50">{collegeChapter.kicker}</p>
              <h3 className="font-serif text-[20px] leading-tight text-ink sm:text-[24px]">{collegeChapter.school}</h3>
              <p className="mt-1 text-[13px] font-semibold uppercase tracking-wide text-ink/60">{collegeChapter.degree}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-serif text-[30px] text-lavender-deep">{collegeChapter.stat}</span>
                <span className="text-[11px] uppercase tracking-wide text-ink/50">{collegeChapter.statLabel}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {collegeChapter.milestones.map((m) => (
                  <div key={m.year} className="rotate-[-1deg] rounded-sm border border-ink/20 bg-paper/70 px-2.5 py-1.5">
                    <p className="font-script text-base leading-none text-lavender-deep">{m.year}</p>
                    <p className="text-[10px] uppercase tracking-wide text-ink/60">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Chapter>

          {/* PHOTOMATH insert — notebook page */}
          <Chapter side="left" years="">
            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              whileInView={{ opacity: 1, rotate: -1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative inline-block border border-ink/20 bg-[repeating-linear-gradient(#00000000_0px,#00000000_27px,rgba(0,0,0,0.08)_28px)] bg-paper px-5 py-4 shadow-sm sm:ml-auto"
            >
              <MathDoodle className="absolute -top-5 right-2 text-lavender-deep/70 sm:right-6" />
              <p className="eyebrow text-ink/50">{photomathChapter.kicker}</p>
              <h3 className="font-serif text-[19px] text-ink sm:text-[22px]">{photomathChapter.title}</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-ink/75">{photomathChapter.body}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-serif text-[26px] text-lavender-deep">{photomathChapter.stat}</span>
                <span className="text-[11px] uppercase tracking-wide text-ink/50">{photomathChapter.statLabel}</span>
              </div>
              <p className="font-script mt-2 rotate-1 text-lg text-ink/60">{photomathChapter.note}</p>
            </motion.div>
          </Chapter>

          {/* QA / SAKSOFT — with bugs */}
          <Chapter side="right" years={qaChapter.years}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <p className="eyebrow text-ink/50">{qaChapter.kicker}</p>
              <h3 className="font-serif text-[20px] leading-tight text-ink sm:text-[24px]">{qaChapter.company}</h3>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-ink/60">{qaChapter.role}</p>
              <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink/75">{qaChapter.body}</p>
              <ul className="mt-3 space-y-1.5">
                {qaChapter.points.map((p) => (
                  <li key={p} className="flex gap-2 text-[13px] text-ink/70">
                    <StarDoodle className="mt-0.5 h-3 w-3 shrink-0 text-lavender-deep" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-4">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setBugFound((s) => ({ ...s, [i]: true }))}
                    className="group relative flex flex-col items-center"
                    aria-label="Find the bug"
                  >
                    <motion.span
                      animate={
                        bugFound[i]
                          ? { opacity: 0, x: 24, transition: { duration: 0.4 } }
                          : { x: [0, 6, -3, 5, 0], transition: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' } }
                      }
                      className="text-ink/70 group-hover:text-lavender-deep"
                    >
                      <BugDoodle />
                    </motion.span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-ink/50">
                      {bugFound[i] ? 'bug found ✓' : 'found one!'}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </Chapter>
        </div>
      </div>

      <div className="section-pad mt-16">
        <ScribbleDivider className="text-ink/20" />
      </div>
    </section>
  )
}
