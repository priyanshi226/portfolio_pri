import { motion } from 'framer-motion'
import { schoolChapter } from '@/data/content'
import { ArrowDoodle, CheckMark, MedalDoodle, SchoolBuildingIllustration } from './Doodles'

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
    <article className="relative pl-9 sm:pl-0">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        className="absolute left-3 top-1 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink bg-lavender sm:left-1/2"
        aria-hidden="true"
      />

      <div className="grid items-start gap-10 sm:grid-cols-2 sm:gap-14 lg:gap-20">
        <div className="sm:pr-5">
          <motion.p
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0)}
            viewport={{ once: true, amount: 0.4 }}
            className="inline-flex rounded-full bg-lilac/35 px-4 py-0.5 text-[13px] font-semibold tracking-[0.14em] text-ink/65"
          >
            {schoolChapter.years}
          </motion.p>

          <motion.h3
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.08)}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-4 font-serif text-[38px] leading-[0.98] tracking-tight text-ink sm:text-[48px] lg:text-[54px]"
          >
            {schoolChapter.heading}
          </motion.h3>

          <motion.p
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.16)}
            viewport={{ once: true, amount: 0.4 }}
            className="font-script mt-2 text-[24px] leading-none text-lavender-deep sm:text-[27px]"
          >
            {schoolChapter.tagline} <span className="text-blush">♡</span>
          </motion.p>

          <motion.div
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.28)}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 max-w-[48ch] space-y-4 text-[15px] leading-[1.72] text-ink/80 sm:text-[15.5px]"
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

          <motion.blockquote
            initial={fadeIn.hidden}
            whileInView={fadeIn.show(0.42)}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6 max-w-[38ch] border-l-2 border-lavender-deep/55 pl-4 font-serif text-[19px] italic leading-snug text-ink/80 sm:text-[22px]"
          >
            “{schoolChapter.quote}”
          </motion.blockquote>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] pb-1 pt-1 sm:mx-0 sm:max-w-none sm:pl-2">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mb-1 flex items-end justify-end gap-1 pr-1 text-ink/65 sm:pr-3"
          >
            <ArrowDoodle className="h-6 w-11 -rotate-[18deg] text-lavender-deep" />
            <p className="font-script text-[20px] leading-none">{schoolChapter.schoolName}</p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: -14, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-0 mr-auto w-[78%] max-w-[342px] border-4 border-paper bg-paper p-1 shadow-[0_18px_36px_-16px_rgba(20,18,12,0.45)] sm:ml-5"
          >
            <TapeStrip className="-top-4 left-1/2 -ml-8 -rotate-3 bg-lilac/65" />
            <div className="aspect-[4/3] overflow-hidden bg-lavender/30">
              <SchoolBuildingIllustration />
            </div>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 16, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 ml-auto -mt-10 w-[208px] bg-[#F5E9B8] p-4 shadow-[0_14px_26px_-14px_rgba(20,18,12,0.5)] sm:-mt-36 sm:mr-0"
          >
            <TapeStrip className="-top-3 left-7 rotate-6" />
            <p className="border-b border-mustard/80 pb-1 font-script text-[20px] leading-none text-ink/85">Things I loved:</p>
            <ul className="mt-2.5 space-y-1.5">
              {schoolChapter.thingsILoved.map((item) => (
                <li key={item} className="flex items-center gap-2 text-ink/75">
                  <CheckMark className="h-4 w-4 shrink-0 text-ink/65" />
                  <span className="font-script text-[17px] leading-none">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-8 w-[92%] max-w-[350px] bg-paper/80 p-5 shadow-[0_14px_26px_-14px_rgba(20,18,12,0.45)] sm:ml-5"
          >
            <TapeStrip className="-top-3 right-9 -rotate-6 bg-lilac/65" />
            <div className="flex items-center gap-2">
              <MedalDoodle className="h-11 w-8 text-mustard" />
              <p className="border-b border-lavender-deep/65 pb-1 font-script text-[24px] leading-none text-ink">{schoolChapter.olympiad.heading}</p>
            </div>
            <ul className="mt-3 space-y-2">
              {schoolChapter.olympiad.points.map((point) => (
                <li key={point} className="flex gap-2 text-[14px] leading-snug text-ink/75">
                  <span className="text-mustard">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="font-script ml-auto mt-3 max-w-[185px] text-right text-[17px] leading-[1.05] text-ink/60"
          >
            little wins, bigger motivation <span className="text-blush">♡</span>
          </motion.p>
        </div>
      </div>
    </article>
  )
}
