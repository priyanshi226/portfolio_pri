import { motion } from 'framer-motion'
import { asset, qaChapter } from '@/data/content'
import { ArrowDoodle, StarDoodle } from './Doodles'

function TapeStrip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-6 w-16 border border-white/40 bg-paper/65 shadow-sm ${className ?? ''}`}
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

function InternshipCertificate() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[480px] border-[14px] border-paper bg-paper p-3 shadow-[0_24px_48px_-20px_rgba(20,18,12,0.5)]"
    >
      <div className="aspect-[3/4] overflow-hidden bg-white">
        <img src={asset('journey-saksoft-certificate.png')} alt="Saksoft 360Logica Internship Certificate" className="h-full w-full object-cover" style={{ objectPosition: 'center 25%' }} loading="lazy" />
      </div>
      <figcaption className="font-script mt-3 text-center text-[18px] leading-none text-ink/65">
        turning how things break into how to build them better ♡
      </figcaption>
    </motion.figure>
  )
}

export function InternshipChapterBlock() {
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

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-1 relative mx-auto w-full max-w-[540px] lg:order-2 lg:ml-auto lg:mr-0">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-2 flex items-end gap-1 text-lavender-deep lg:absolute lg:-left-2 lg:top-2 lg:-translate-x-full"
          >
            <p className="font-script max-w-[124px] text-right text-[18px] leading-[1.05] text-ink/65">
              a small but important chapter! ♡
            </p>
            <ArrowDoodle className="h-7 w-12 rotate-[10deg]" />
          </motion.div>
          <InternshipCertificate />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="font-script mt-4 text-right text-[18px] leading-none text-ink/60"
          >
            real experience, real learnings <span className="text-lavender-deep">✦</span>
          </motion.p>
        </div>

        <motion.div
          initial={fadeIn.hidden}
          whileInView={fadeIn.show(0.18)}
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 lg:order-1 lg:pb-2"
        >
          <p className="font-script text-[26px] leading-none text-ink/70 sm:text-[30px]">{qaChapter.years}</p>
          <p className="eyebrow mt-2 text-ink/60">{qaChapter.kicker}</p>
          <h3 className="mt-3 font-serif text-[31px] leading-[1.02] tracking-tight text-ink sm:text-[40px]">
            {qaChapter.company}
          </h3>
          <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/60 sm:text-[13px]">
            {qaChapter.role}
          </p>
          <p className="mt-6 max-w-[590px] text-[16px] leading-relaxed text-ink/80 sm:text-[17px]">
            {qaChapter.body}
          </p>

          <ul className="mt-6 space-y-3">
            {qaChapter.points.map((point) => (
              <li key={point} className="flex gap-3 text-[14px] leading-snug text-ink/75 sm:text-[15px]">
                <StarDoodle className="mt-0.5 h-4 w-4 shrink-0 text-lavender-deep" />
                {point}
              </li>
            ))}
          </ul>

          <p className="font-script mt-7 max-w-[420px] border-t border-lavender-deep/35 pt-4 text-[22px] leading-[1.08] text-ink/65">
            turns out breaking things can teach you how to build them better.
          </p>
        </motion.div>
      </div>
    </article>
  )
}
