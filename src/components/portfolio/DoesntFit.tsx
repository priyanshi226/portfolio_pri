import { motion } from 'framer-motion'
import { doesntFit, soIEndedUp } from '@/data/content'

export function DoesntFit() {
  return (
    <section className="relative bg-paper py-16 sm:py-20">
      <div className="section-pad text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md font-serif text-[28px] leading-tight tracking-tight text-ink sm:text-[38px]"
        >
          The stuff that doesn't fit on my resume
        </motion.h2>

        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-2 sm:mt-12">
          {doesntFit.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`font-serif text-[16px] tracking-tight text-ink/85 sm:text-[19px] ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-script mt-10 text-2xl text-lavender-deep sm:mt-12"
        >
          so I ended up doing this:
        </motion.p>

        <div className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-2">
          {soIEndedUp.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-ink/25 bg-lavender/25 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/75"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
