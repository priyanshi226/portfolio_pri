import { motion } from 'framer-motion'
import { educado } from '@/data/content'

export function EducadoCase() {
  return (
    <section className="relative bg-paper py-16 sm:py-20">
      <div className="section-pad">
        <div className="mx-auto max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-[64px] leading-none text-ink/10 sm:text-[90px]"
          >
            {educado.number}
          </motion.p>
          <h2 className="-mt-8 font-serif text-[32px] tracking-tight text-ink sm:-mt-12 sm:text-[42px]">
            {educado.name}
          </h2>
          <p className="eyebrow mt-1 text-lavender-deep">{educado.subtitle}</p>
          <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-ink/50">{educado.role}</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-ink/40">Problem</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink/75">{educado.problem}</p>
            </div>
            <div>
              <p className="eyebrow text-ink/40">What I built</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink/75">{educado.built}</p>
            </div>
          </div>
        </div>

        {/* book */}
        <div className="mx-auto mt-14 max-w-md sm:mt-16" style={{ perspective: 1200 }}>
          <div className="relative border border-ink/15 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(20,18,12,0.35)] sm:p-7">
            <motion.div
              initial={{ rotateY: 0, opacity: 1 }}
              whileInView={{ rotateY: -110, opacity: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
              className="pointer-events-none absolute inset-0 z-10 border-r border-ink/10 bg-lavender"
            />
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
              how a question becomes an answer
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              {educado.bookFlow.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.12 }}
                  className="flex flex-col items-center"
                >
                  <span className="border border-ink/25 bg-paper px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/75">
                    {step}
                  </span>
                  {i < educado.bookFlow.length - 1 && <span className="my-1 h-3 w-[1.5px] bg-ink/20" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* metric */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-xs text-center sm:mt-16"
        >
          <p className="font-serif text-[46px] leading-none text-ink sm:text-[56px]">{educado.metric}</p>
          <p className="mt-1 text-[12px] leading-snug text-ink/60">{educado.metricLabel}</p>
        </motion.div>

        {/* flows */}
        <div className="mx-auto mt-14 grid max-w-lg gap-4 sm:mt-16 sm:grid-cols-2">
          {educado.flows.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-ink/15 bg-lavender/20 p-4"
            >
              <p className="font-script text-xl text-lavender-deep">{f.title}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/70">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-2">
          {educado.categories.map((c) => (
            <span key={c} className="border border-ink/20 bg-paper px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-ink/60">
              {c}
            </span>
          ))}
        </div>

        {/* screenshot + tech */}
        <div className="mx-auto mt-14 max-w-lg sm:mt-16">
          <motion.div
            initial={{ opacity: 0, rotate: -3, y: 20 }}
            whileInView={{ opacity: 1, rotate: 2, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="polaroid mx-auto w-[220px]"
          >
            <img src={educado.screenshot} alt={educado.screenshotAlt} className="h-[380px] w-full object-cover" loading="lazy" />
          </motion.div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {educado.tech.map((t) => (
              <span key={t} className="font-mono border border-ink/20 px-2.5 py-1 text-[10.5px] text-ink/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
