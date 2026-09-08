import { motion } from 'framer-motion'
import { schoolChapter } from '@/data/content'
import { CheckMark, MedalDoodle, SchoolBuildingIllustration, TrophyDoodle } from './Doodles'

function TapeStrip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-6 w-16 border border-white/40 bg-paper/60 shadow-sm ${className ?? ''}`}
    />
  )
}

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function SchoolChapterBlock() {
  return (
    <div className="relative pl-10 sm:pl-0">
      {/* timeline node */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        className="absolute left-3 top-1 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-ink bg-lavender sm:left-1/2"
      />

      <div className="grid gap-14 sm:grid-cols-2 sm:gap-10 lg:gap-16">
        {/* LEFT — school story */}
        <div className="sm:pr-4">
          <motion.p
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0)}
            viewport={{ once: true, amount: 0.4 }}
            className="font-script text-2xl text-ink/70"
          >
            {schoolChapter.years}
          </motion.p>

          <motion.h3
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.08)}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-1 font-serif text-[34px] leading-[1.05] tracking-tight text-ink sm:text-[42px]"
          >
            {schoolChapter.heading}
          </motion.h3>

          <motion.p
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.16)}
            viewport={{ once: true, amount: 0.4 }}
            className="font-script mt-1 text-xl text-lavender-deep"
          >
            {schoolChapter.tagline} <span className="text-blush">♡</span>
          </motion.p>

          <motion.div
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.28)}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 max-w-[46ch] space-y-3.5 text-[15.5px] leading-relaxed text-ink/80"
          >
            <p>
              I grew up in a small town, where most of my early education happened. It was a quiet, close-knit
              place that gave me a strong sense of curiosity and independence. I studied at{' '}
              <span className="font-semibold text-ink underline decoration-lavender-deep/50 underline-offset-2">
                {schoolChapter.schoolName}
              </span>
              , where I was constantly surrounded by supportive teachers, a few crazy friends, and countless
              opportunities to explore, ask questions and discover what I loved.
            </p>
            <p>{schoolChapter.paragraphs[1]}</p>
          </motion.div>

          <motion.div
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.42)}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-5 max-w-[42ch] border-l-2 border-lavender-deep/50 pl-4"
          >
            <p className="font-script text-xl italic leading-snug text-ink/75">"{schoolChapter.quote}"</p>
          </motion.div>
        </div>

        {/* RIGHT — scrapbook cluster */}
        <div className="relative mx-auto w-full max-w-[300px] pt-2 sm:mx-0 sm:max-w-none sm:pl-6">
          {/* "where it all began" — desktop-only floating annotation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -left-2 top-6 hidden text-right sm:block"
          >
            <p className="font-script text-lg leading-[1.15] text-ink/55">
              where
              <br />
              it all
              <br />
              began <span className="text-blush">♡</span>
            </p>
          </motion.div>

          {/* caption above the photo */}
          <motion.p
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.2)}
            viewport={{ once: true, amount: 0.4 }}
            className="font-script mx-auto w-fit rotate-1 text-lg text-ink/70 sm:ml-auto sm:mr-10"
          >
            ↘ {schoolChapter.schoolName} <span className="text-blush">♡</span>
          </motion.p>

          {/* photo, taped */}
          <motion.div
            initial={{ opacity: 0, y: -14, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-2 w-full max-w-[260px] border-4 border-paper bg-paper shadow-[0_18px_36px_-16px_rgba(20,18,12,0.45)] sm:ml-auto sm:mr-10"
          >
            <TapeStrip className="-top-3 left-1/2 -ml-8 -rotate-3" />
            <div className="aspect-[4/3] w-full overflow-hidden bg-lavender/30">
              <SchoolBuildingIllustration />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-4 -left-4 flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 border-mustard bg-paper text-center shadow-sm"
            >
              <p className="font-serif text-[13px] leading-none text-mustard">{schoolChapter.stat}</p>
              <p className="mt-0.5 text-[7px] uppercase tracking-wide text-ink/50">{schoolChapter.statLabel}</p>
            </motion.div>
          </motion.div>

          {/* things I loved sticky note */}
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto mt-8 w-[230px] bg-[#F5E9B8] p-4 shadow-[0_14px_26px_-14px_rgba(20,18,12,0.5)] sm:ml-auto sm:mr-0 sm:-mt-16"
          >
            <TapeStrip className="-top-3 left-6 rotate-6" />
            <p className="font-script text-lg text-ink/80">Things I loved:</p>
            <ul className="mt-2 space-y-1.5">
              {schoolChapter.thingsILoved.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-ink/75">
                  <CheckMark className="w-3.5 h-3.5 shrink-0 text-ink/55" />
                  <span className="font-script italic">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* olympiad note */}
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto -mt-3 w-[250px] bg-blush/30 p-4 shadow-[0_14px_26px_-14px_rgba(20,18,12,0.5)] sm:mr-14 sm:-mt-8"
          >
            <TapeStrip className="-top-3 right-6 -rotate-6" />
            <div className="flex items-center gap-2">
              <MedalDoodle className="text-mustard" />
              <p className="font-serif text-lg text-ink">{schoolChapter.olympiad.heading}</p>
            </div>
            <ul className="mt-2 space-y-1.5">
              {schoolChapter.olympiad.points.map((point) => (
                <li key={point} className="flex gap-1.5 text-[13px] leading-snug text-ink/75">
                  <span className="text-ink/40">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* little wins + trophy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-4 flex items-center justify-center gap-2 sm:mr-8 sm:justify-end"
          >
            <TrophyDoodle className="w-6 h-6 text-mustard" />
            <p className="font-script text-sm leading-tight text-ink/55">
              little wins, bigger motivation <span className="text-blush">♡</span>
            </p>
          </motion.div>

          {/* collecting achievements note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="font-script mt-1 text-center text-sm text-ink/45 sm:mr-8 sm:text-right"
          >
            {schoolChapter.collectingNote}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
