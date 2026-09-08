import { motion } from 'framer-motion'
import { goToNotes, curiosity } from '@/data/content'
import { UnderlineDoodle } from './Doodles'

const positions = [
  'sm:left-0 sm:top-[2%] -rotate-3',
  'sm:right-0 sm:top-[3%] rotate-2',
  'sm:left-[4%] sm:top-[24%] rotate-1',
  'sm:right-[2%] sm:top-[22%] -rotate-2',
  'sm:left-[2%] sm:top-[76%] rotate-2',
  'sm:right-0 sm:top-[74%] -rotate-1',
  'sm:left-[38%] sm:top-0 rotate-3',
]

export function GoToPerson() {
  return (
    <section className="relative bg-mist py-16 sm:py-24">
      <div className="section-pad relative mx-auto max-w-2xl">
        <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-3 sm:min-h-[600px] sm:gap-0">
          {goToNotes.map((note, i) => (
            <motion.div
              key={note}
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`w-fit max-w-[220px] border border-ink/20 bg-paper px-3.5 py-2.5 text-[13px] leading-snug text-ink/80 shadow-sm sm:absolute ${positions[i % positions.length]}`}
            >
              "{note}"
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative z-10 mt-4 max-w-xs border-2 border-ink bg-blush/70 px-6 py-5 text-center sm:mt-0"
          >
            <p className="font-script text-2xl leading-tight text-ink sm:text-3xl">
              apparently, I became the go-to person.
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-wide text-ink/60">
              not because I knew everything — because I was willing to figure things out.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-pad mx-auto mt-16 max-w-lg text-center sm:mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block font-serif text-[22px] leading-snug tracking-tight text-ink sm:text-[28px]"
        >
          {curiosity.heading}
          <UnderlineDoodle className="absolute -bottom-1 left-0 text-lavender-deep" />
        </motion.h3>
        <p className="mt-4 text-[14px] leading-relaxed text-ink/75">{curiosity.body}</p>
      </div>
    </section>
  )
}
