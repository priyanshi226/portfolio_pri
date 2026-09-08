import { motion } from 'framer-motion'
import { qaChapter } from '@/data/content'
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
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[530px] border-[12px] border-[#F6F0DF] bg-paper p-2 shadow-[0_22px_42px_-20px_rgba(20,18,12,0.55)]"
    >
      <TapeStrip className="-top-5 left-1/2 -ml-8 bg-lilac/65" />
      <div className="relative min-h-[390px] overflow-hidden border border-ink/10 bg-[#FCF9F1] px-5 py-7 sm:min-h-[430px] sm:px-8 sm:py-9">
        <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full border-[18px] border-lilac/10" aria-hidden="true" />
        <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full border-[20px] border-mustard/10" aria-hidden="true" />

        <div className="relative flex items-center justify-between text-[11px] font-bold tracking-wide sm:text-[13px]">
          <span className="flex items-center gap-1.5 text-[#295c82]">
            <span className="h-4 w-4 rounded-full border-[3px] border-[#d79b3c]" />
            SAKSOFT
          </span>
          <span className="text-ink/70">360<span className="text-[#3c91a3]">LOGICA</span></span>
        </div>

        <div className="relative mt-9 text-center">
          <p className="text-[16px] font-semibold tracking-[0.12em] text-ink/80 sm:text-[19px]">INTERNSHIP CERTIFICATE</p>
          <p className="mt-4 text-[11px] text-ink/55 sm:text-[12px]">This is to certify that</p>
          <p className="font-script mt-1 text-[29px] leading-none text-ink sm:text-[34px]">Priyanshi Gupta</p>
          <div className="mx-auto mt-2 h-px w-3/4 bg-ink/15" />
          <p className="mx-auto mt-4 max-w-[330px] text-[11px] leading-relaxed text-ink/70 sm:text-[12px]">
            has successfully completed an internship at 360logica / Saksoft as a Quality Assurance Intern from June
            2024 to August 2024.
          </p>
          <p className="mx-auto mt-4 max-w-[350px] text-[10px] leading-relaxed text-ink/55 sm:text-[11px]">
            During this period, she demonstrated a strong willingness to learn, a proactive approach, and valuable
            contributions to the team.
          </p>
        </div>

        <div className="relative mt-7 flex items-end justify-between text-center text-[9px] text-ink/55 sm:text-[10px]">
          <div className="w-20 border-t border-ink/35 pt-1">August 2024<br />Date</div>
          <div className="w-24 border-t border-ink/35 pt-1">
            <span className="font-script text-[17px] leading-none text-ink/65">Saksoft</span><br />
            Authorized Signatory
          </div>
        </div>
      </div>
    </motion.div>
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
