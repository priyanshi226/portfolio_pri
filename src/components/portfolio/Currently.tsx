import { motion } from 'framer-motion'
import { currently } from '@/data/content'
import { RoadDoodle, StarDoodle } from './Doodles'

export function Currently() {
  return (
    <section className="relative overflow-hidden bg-paper py-16 sm:py-24">
      <div className="section-pad relative text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-[80px] leading-none text-ink/[0.08] sm:text-[120px]"
        >
          {currently.year}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="-mt-8 sm:-mt-14"
        >
          <p className="eyebrow text-ink/50">{currently.heading}</p>
          <h2 className="mt-2 font-serif text-[28px] tracking-tight text-ink sm:text-[36px]">{currently.role}</h2>
          <p className="font-script mt-1 text-xl text-lavender-deep sm:text-2xl">{currently.focus}</p>
          <p className="mx-auto mt-4 max-w-sm text-[14px] leading-relaxed text-ink/75">{currently.body}</p>
        </motion.div>

        <div className="relative mx-auto mt-12 h-16 w-[2px] sm:mt-16">
          <RoadDoodle className="text-ink/30" />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -left-3 top-full mt-1"
          >
            <StarDoodle className="text-mustard" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
