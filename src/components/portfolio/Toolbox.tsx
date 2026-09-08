import { motion } from 'framer-motion'
import { toolbox, certifications, otherWork } from '@/data/content'

const groups = [
  { title: 'AI / LLM', items: toolbox.ai },
  { title: 'Backend', items: toolbox.backend },
  { title: 'Frontend', items: toolbox.frontend },
  { title: 'Testing & Tools', items: toolbox.testing },
]

export function Toolbox() {
  return (
    <section className="relative bg-mist py-16 sm:py-20">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-[28px] tracking-tight text-ink sm:text-[36px]">
            The tools I like to play with
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:mt-12 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="eyebrow text-ink/45">{g.title}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span key={item} className="font-mono border border-ink/20 bg-paper px-2 py-1 text-[10.5px] text-ink/65">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-ink/15 pt-10 sm:mt-16">
          <p className="eyebrow text-center text-ink/45">Certifications &amp; other work</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.name} className="rotate-[-1deg] border border-ink/15 bg-paper px-3 py-2.5 text-center">
                <p className="text-[12.5px] font-semibold text-ink/85">{c.name}</p>
                <p className="mt-0.5 text-[11px] text-ink/55">{c.org} · {c.year}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-md space-y-1.5 text-center text-[12.5px] text-ink/65">
            <p>{otherWork.aiSessions}</p>
            <p>{otherWork.volunteer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
