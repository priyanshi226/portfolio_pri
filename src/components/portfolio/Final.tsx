import { motion } from 'framer-motion'
import { finalSection, profile } from '@/data/content'
import { RoadDoodle, SparkleCluster } from './Doodles'

export function Final() {
  return (
    <section id="contact" className="relative overflow-hidden bg-olive py-16 text-paper sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center text-paper/20" aria-hidden="true">
        <RoadDoodle className="h-24" />
      </div>

      <div className="section-pad relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-[36px] tracking-tight sm:text-[52px]">{finalSection.heading}</h2>
          <p className="mx-auto mt-4 max-w-xs text-[14px] leading-relaxed text-paper/75">{finalSection.body}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-script mt-8 text-3xl italic text-blush sm:text-4xl"
        >
          {finalSection.cta}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline border-paper/50 text-paper hover:bg-paper/10">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline border-paper/50 text-paper hover:bg-paper/10">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="btn-outline border-paper/70 bg-paper/95 text-ink hover:bg-paper">
            Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-14 w-fit text-paper/60"
        >
          <SparkleCluster />
        </motion.div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-paper/40">
          Priyanshi, so far. — the road continues.
        </p>
      </div>
    </section>
  )
}
