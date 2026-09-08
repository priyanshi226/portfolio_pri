import { motion } from 'framer-motion'
import { orchestrix } from '@/data/content'
import { CurlyArrowDoodle } from './Doodles'

export function OrchestrixStory() {
  return (
    <section className="relative bg-olive py-16 text-paper sm:py-24">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="eyebrow text-paper/50">{orchestrix.years} · {orchestrix.role}</p>
          <h2 className="mx-auto mt-3 max-w-xl font-serif text-[30px] leading-tight tracking-tight sm:text-[42px]">
            {orchestrix.intro}
          </h2>
          <p className="font-script mx-auto mt-2 max-w-lg text-xl italic text-blush sm:text-2xl">
            {orchestrix.introSub.toLowerCase()}
          </p>
          <p className="mx-auto mt-5 max-w-lg text-[14px] leading-relaxed text-paper/80">{orchestrix.origin}</p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative border border-paper/25 bg-olive-dark/60 p-6 sm:p-9"
          >
            <CurlyArrowDoodle className="absolute -top-6 right-6 text-blush/70" />
            <h3 className="font-serif text-[22px] leading-snug sm:text-[26px]">{orchestrix.storyHeading}</h3>
            <p className="font-script mt-1 text-lg italic text-lavender sm:text-xl">
              {orchestrix.storySub.toLowerCase()}
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-paper/80">{orchestrix.storyBody}</p>
            <p className="mt-5 font-serif text-[22px] uppercase tracking-tight text-blush sm:text-[26px]">
              {orchestrix.storyEmphasis}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
