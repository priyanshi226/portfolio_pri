import { motion } from 'framer-motion'
import {
  journeyIntro,
} from '@/data/content'
import { SchoolChapterBlock } from './SchoolChapter'
import { CollegeChapterBlock } from './CollegeChapter'
import { OrchestrixChapterBlock } from './OrchestrixChapter'
import { DotCluster, StarDoodle } from './Doodles'

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

export function JourneyTimeline() {
  return (
    <section id="journey" className="relative overflow-hidden bg-lavender py-14 sm:py-[72px]">
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute left-8 top-10 hidden text-ink/25 sm:block"
      >
        <DotCluster className="h-4 w-7" />
      </motion.span>
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="pointer-events-none absolute right-10 top-12 hidden text-lavender-deep/60 sm:block"
      >
        <StarDoodle className="h-5 w-5" />
      </motion.span>

      <div className="section-pad relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >
          <h2 className="font-serif text-[42px] leading-none tracking-tight text-ink sm:text-[56px]">MY JOURNEY</h2>
          <p className="font-script -mt-1 text-[27px] text-lavender-deep sm:text-[32px]">(so far)</p>
          <p className="eyebrow mx-auto mt-3 max-w-sm leading-relaxed text-ink/55 sm:max-w-none">{journeyIntro}</p>
        </motion.div>

        <div className="relative mt-12 space-y-12 sm:mt-16 sm:space-y-14">
          <TimelineLine />

          <SchoolChapterBlock />

          <CollegeChapterBlock />

          <OrchestrixChapterBlock />
        </div>
      </div>
    </section>
  )
}
