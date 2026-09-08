import { motion } from 'framer-motion'
import { pratinidhi } from '@/data/content'
import { ArrowDoodle } from './Doodles'

function FlowRow({ items, tone }: { items: string[]; tone: 'chip' | 'node' }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: i * 0.09 }}
          className={
            tone === 'node'
              ? 'border-2 border-ink bg-lavender px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-ink'
              : 'border border-ink/30 bg-paper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/75'
          }
        >
          {item}
        </motion.span>
      ))}
    </div>
  )
}

const dotOffsets = Array.from({ length: 14 }, (_, i) => {
  const angle = i * 137.5 * (Math.PI / 180)
  const radius = 30 + (i % 5) * 18
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius * 0.6 }
})

function Connector() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
      style={{ transformOrigin: 'top' }}
      className="mx-auto h-6 w-[2px] border-l-2 border-dashed border-ink/30 sm:h-8"
      aria-hidden="true"
    />
  )
}

export function PratinidhiCase() {
  return (
    <section className="relative bg-olive-dark py-16 text-paper sm:py-20">
      <div className="section-pad">
        <div className="mx-auto max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-[64px] leading-none text-paper/15 sm:text-[90px]"
          >
            {pratinidhi.number}
          </motion.p>
          <h2 className="-mt-8 font-serif text-[32px] tracking-tight sm:-mt-12 sm:text-[42px]">{pratinidhi.name}</h2>
          <p className="eyebrow mt-1 text-blush/80">{pratinidhi.subtitle}</p>
          <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-paper/50">{pratinidhi.role}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-paper/45">Problem</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-paper/80">{pratinidhi.problem}</p>
            </div>
            <div>
              <p className="eyebrow text-paper/45">What I built</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-paper/80">{pratinidhi.built}</p>
            </div>
          </div>
        </div>

        {/* architecture */}
        <div className="mx-auto mt-14 max-w-lg sm:mt-16">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/40">
            how a conversation becomes a lead
          </p>
          <div className="mt-4">
            <FlowRow items={pratinidhi.channels} tone="chip" />
            <Connector />
            <div className="flex justify-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                className="border-2 border-blush bg-blush/15 px-6 py-2.5 font-serif text-[16px] tracking-wide text-blush"
              >
                AI AGENT
              </motion.span>
            </div>
            <Connector />
            <FlowRow items={pratinidhi.agentSteps} tone="chip" />
            <Connector />
            <FlowRow items={pratinidhi.ragSteps} tone="chip" />
            <Connector />
            <div className="flex justify-center">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                className="border-2 border-ink bg-paper px-5 py-2 text-[12px] font-bold uppercase tracking-wide text-ink"
              >
                {pratinidhi.outcome}
              </motion.span>
            </div>
          </div>
        </div>

        {/* metrics */}
        <div className="mx-auto mt-16 grid max-w-lg gap-8 text-center sm:mt-20 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
              {dotOffsets.map((offset, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.9, x: offset.x, y: offset.y }}
                  whileInView={{ opacity: 0, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.03 }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-blush"
                />
              ))}
            </div>
            <p className="relative font-serif text-[46px] leading-none text-paper sm:text-[56px]">{pratinidhi.metric}</p>
            <p className="mt-1 text-[12px] leading-snug text-paper/60">{pratinidhi.metricLabel}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-serif text-[46px] leading-none text-paper sm:text-[56px]">{pratinidhi.channelCount}</p>
            <p className="mt-1 text-[12px] leading-snug text-paper/60">{pratinidhi.channelLabel}</p>
          </motion.div>
        </div>

        {/* screenshot + tech */}
        <div className="mx-auto mt-16 max-w-lg sm:mt-20">
          <motion.div
            initial={{ opacity: 0, rotate: 3, y: 20 }}
            whileInView={{ opacity: 1, rotate: -1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="polaroid mx-auto w-full max-w-sm border-paper/20"
          >
            <img src={pratinidhi.screenshot} alt={pratinidhi.screenshotAlt} className="w-full object-cover" loading="lazy" />
          </motion.div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {pratinidhi.tech.map((t) => (
              <span key={t} className="font-mono border border-paper/25 px-2.5 py-1 text-[10.5px] text-paper/65">
                {t}
              </span>
            ))}
          </div>

          <p className="font-script mt-6 flex items-center justify-center gap-2 text-center text-lg text-paper/60">
            <ArrowDoodle className="h-6 w-10 rotate-180 text-paper/40" />
            scale/context of the campaign workflows, not a personal sales number
          </p>
        </div>
      </div>
    </section>
  )
}
