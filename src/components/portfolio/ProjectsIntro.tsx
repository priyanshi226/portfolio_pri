import { motion } from 'framer-motion'
import { pratinidhi, educado } from '@/data/content'

export function ProjectsIntro() {
  return (
    <section id="work" className="relative bg-paper pt-16 sm:pt-20">
      <div className="section-pad text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-lg font-serif text-[28px] leading-tight tracking-tight text-ink sm:text-[38px]"
        >
          Okay, but what did I actually build?
        </motion.h2>

        <div className="mx-auto mt-8 flex max-w-sm justify-center gap-10 text-left sm:mt-10">
          <div>
            <p className="font-serif text-[34px] leading-none text-lavender-deep">{pratinidhi.number}</p>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-ink/70">{pratinidhi.name}</p>
          </div>
          <div>
            <p className="font-serif text-[34px] leading-none text-lavender-deep">{educado.number}</p>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-ink/70">{educado.name}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
