import { motion } from 'framer-motion'
import { pratinidhi } from '@/data/content'

const notes = [
  {
    title: 'AI agent workflows',
    points: ['Configurable agent workflows', 'Intent handling + function calling', 'State, lead stages & follow-ups'],
    className: '-rotate-[1.3deg] bg-[#e9edc9] text-[#29341b]',
  },
  {
    title: 'RAG + integrations',
    points: ['Embeddings + semantic search', 'Knowledge sources', 'Webhooks, async processing + RAG responses'],
    className: 'rotate-[0.7deg] bg-[#f3e4b6] text-[#3c3320]',
  },
  {
    title: 'Omnichannel engagement',
    points: ['WhatsApp, Telegram & Email', 'Instagram & Voice', 'Automated customer follow-ups'],
    className: '-rotate-[0.8deg] bg-[#dfd7f2] text-[#302c48]',
  },
  {
    title: 'Product + impact',
    points: ['Founder collaboration: needs → features', 'Customer problems + analytics', 'Workflows handling 317K+ leads'],
    className: 'rotate-[1.1deg] bg-[#f2d4d8] text-[#463039]',
  },
]

export function PratinidhiCase() {
  return (
    <section id="work" className="relative overflow-hidden bg-olive-dark text-paper">
      <div className="relative mx-auto flex min-h-[min(850px,100svh)] w-full max-w-[1320px] items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-14">
        <div className="grid w-full items-center gap-12 xl:grid-cols-[auto_auto] xl:justify-center xl:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7 }} className="max-w-md">
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/55"><span>Selected work</span><span className="h-px w-9 bg-paper/35" /><span>{pratinidhi.number}</span></div>
            <h2 className="mt-8 whitespace-nowrap font-serif text-[clamp(2.35rem,3.6vw,4.4rem)] leading-[0.9] tracking-[-0.055em] text-paper">Pratinidhi <em className="font-normal">AI</em></h2>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.23em] text-[#d6ddba] sm:text-[11px]">AI agent &amp; CRM workflow platform</p>
            <div className="mt-6 max-w-[25rem] space-y-5 text-[14px] leading-7 text-paper/74 sm:text-[15px]">
              <p>Built and shipped an AI-powered CRM and customer engagement automation platform using Python/Flask, React, TypeScript, Firebase and LLM APIs. The platform brings AI agent workflows, lead intelligence, RAG-powered responses and omnichannel conversations into one workspace.</p>
              <p>Worked closely with the founding team on end-to-end product delivery, translating business requirements into production-ready frontend and backend features, while also contributing to product decisions, customer-facing problem solving and integrations.</p>
            </div>
            <div className="mt-8 flex max-w-md flex-wrap gap-2">
              {['Python / Flask', 'React / TypeScript', 'Firebase', 'LLM APIs', 'RAG', 'Webhooks'].map((tech) => <span key={tech} className="rounded-full border border-paper/15 bg-paper/[0.055] px-3 py-1.5 text-[10px] font-medium text-paper/70 backdrop-blur-sm">{tech}</span>)}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: 0.1 }} className="min-w-0">
            <div className="relative mx-auto max-w-[720px] xl:mx-0">
              <div className="absolute inset-x-[10%] bottom-[3%] h-11 rounded-[100%] bg-black/45 blur-xl" />
              <img src={pratinidhi.screenshot} alt={pratinidhi.screenshotAlt} className="relative z-10 block w-full" loading="lazy" />
            </div>
            <div className="relative z-20 mx-auto mt-5 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:mx-0">
              {notes.map((note, index) => (
                <motion.article key={note.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }} className={`relative aspect-square px-4 py-4 shadow-[4px_8px_16px_rgba(0,0,0,0.22)] sm:px-4 sm:py-4 ${note.className} ${index % 2 === 1 ? 'sm:translate-y-2 lg:translate-y-1' : ''}`}>
                  <span aria-hidden="true" className="absolute -top-2 left-1/2 h-3 w-12 -translate-x-1/2 bg-paper/40" />
                  <h3 className="border-b border-ink/30 pb-1.5 font-script text-[18px] leading-[1.05]">{note.title}</h3>
                  <ul className="mt-3 space-y-2 text-[10px] leading-[1.35] text-ink/75">
                    {note.points.map((point) => <li key={point} className="flex gap-1.5"><span className="mt-[0.15em] text-[12px] leading-none">✓</span><span>{point}</span></li>)}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
