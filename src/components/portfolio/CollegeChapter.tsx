import { motion } from 'framer-motion'
import { profile, collegeChapter } from '@/data/content'

function TapeStrip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-6 w-16 border border-white/40 bg-paper/65 shadow-sm ${className ?? ''}`}
    />
  )
}

function HighlightCard({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative min-h-[132px] border border-ink/15 px-4 py-5 shadow-[0_12px_22px_-16px_rgba(20,18,12,0.6)] ${className}`}>
      <TapeStrip className="-top-3 left-1/2 -ml-8 bg-lilac/55" />
      <p className="font-script text-[22px] leading-none text-ink">{title}</p>
      <p className="mt-3 text-[12px] leading-snug text-ink/65">{children}</p>
    </div>
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

export function CollegeChapterBlock() {
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

      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-12">
        <motion.section
          initial={fadeIn.hidden}
          whileInView={fadeIn.show(0)}
          viewport={{ once: true, amount: 0.3 }}
          className="min-w-0 lg:pr-3"
        >
          <p className="inline-flex rounded-full bg-lilac/35 px-4 py-0.5 text-[13px] font-semibold tracking-[0.14em] text-ink/65">
            {collegeChapter.years}
          </p>
          <p className="eyebrow mt-4 text-ink/60">{collegeChapter.kicker}</p>
          <h3 className="mt-3 max-w-[560px] font-serif text-[32px] leading-[1.02] tracking-tight text-ink sm:text-[43px] lg:text-[47px]">
            {collegeChapter.school}
          </h3>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/60 sm:text-[13px]">
            {collegeChapter.degree}
          </p>
          <p className="mt-4 flex items-center gap-2">
            <span className="font-serif text-[37px] leading-none text-lavender-deep sm:text-[43px]">{collegeChapter.stat}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55">{collegeChapter.statLabel}</span>
          </p>

          <motion.figure
            initial={{ opacity: 0, y: 18, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-9 ml-3 w-[88%] max-w-[440px] border-[10px] border-paper bg-paper pb-10 shadow-[0_20px_38px_-18px_rgba(20,18,12,0.55)] sm:ml-8"
          >
            <TapeStrip className="-top-5 left-1/2 -ml-8 bg-lilac/65" />
            <img src={profile.portrait} alt="Priyanshi Gupta" className="aspect-[4/5] w-full object-cover object-center" />
            <figcaption className="font-script absolute bottom-2 right-3 text-[18px] leading-none text-ink/65">
              grateful for this chapter ♡
            </figcaption>
          </motion.figure>
        </motion.section>

        <motion.section
          initial={fadeIn.hidden}
          whileInView={fadeIn.show(0.12)}
          viewport={{ once: true, amount: 0.25 }}
          className="min-w-0 lg:pl-3"
        >
          <div className="relative bg-paper/85 px-6 py-7 shadow-[0_18px_32px_-24px_rgba(20,18,12,0.55)] sm:px-8 sm:py-9">
            <TapeStrip className="-top-3 left-1/2 -ml-8 bg-lilac/55" />
            <p className="border-b border-lavender-deep/60 pb-2 font-script text-[31px] leading-none text-ink sm:text-[35px]">
              My college journey
            </p>
            <div className="mt-6 space-y-5 text-[14.5px] leading-[1.62] text-ink/75 sm:text-[15.5px]">
              <p>
                College taught me much more than computer engineering. I usually found myself taking the lead when it
                came to subject projects — figuring out what needed to be done, dividing the work, bringing ideas
                together, and making sure we actually finished what we started.
              </p>
              <p>
                Those projects taught me how much I enjoy the process around the work too — turning a loose idea into
                a plan, collaborating with people, and seeing it through to something finished.
              </p>
              <p>
                And somewhere in my first year, I also started solving mathematics problems on Photomath for a little
                extra earning. I ended up guiding 100+ students through mathematical problem-solving and concept
                clarification. What started as a small side thing quietly taught me how important it is to break down
                complicated things simply, one clear step at a time.
              </p>
            </div>
            <blockquote className="mt-6 border-t border-lavender-deep/35 pt-4 font-script text-[20px] leading-[1.15] text-ink/75 sm:text-[23px]">
              I came to college to become an engineer.
              <br />
              I left knowing I liked building much more than just software.
            </blockquote>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <HighlightCard title="PROJECTS" className="-rotate-1 bg-[#F4DCE1]/70">
              usually the one turning ideas into finished work
            </HighlightCard>
            <HighlightCard title="PHOTOMATH" className="-rotate-1 bg-[#EEE4F7]">
              <span className="font-serif text-[19px] leading-none text-lavender-deep">100+ students</span>
              <br />
              first-year side quest in making maths clearer
            </HighlightCard>
          </div>
        </motion.section>
      </div>
    </article>
  )
}
