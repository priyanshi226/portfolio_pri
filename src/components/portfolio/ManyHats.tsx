import { motion } from 'framer-motion'
import { hats } from '@/data/content'

const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1']

export function ManyHats() {
  return (
    <section className="relative bg-paper py-16 sm:py-20">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="eyebrow text-ink/50">not job titles — just the truth</p>
          <h2 className="mt-2 font-serif text-[34px] tracking-tight text-ink sm:text-[46px]">
            PRIYANSHI'S MANY HATS
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {hats.map((hat, i) => (
            <motion.div
              key={hat.label}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${rotations[i % rotations.length]} border border-ink/20 bg-lavender/30 p-3.5 shadow-sm sm:p-5`}
            >
              <p className="font-script text-xl leading-none text-lavender-deep sm:text-2xl">{hat.label}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink/75">{hat.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
