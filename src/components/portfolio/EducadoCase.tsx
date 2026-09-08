import { motion } from 'framer-motion'
import { BarChart3, BookOpen, CreditCard, Layers3 } from 'lucide-react'
import { educado } from '@/data/content'

const features = [
  { icon: BookOpen, title: 'AI Tutor with RAG', body: 'LLM-powered tutor using RAG, document chunking, FAISS, LangChain and OpenAI.' },
  { icon: BarChart3, title: 'Assessments & Analytics', body: 'Redis-backed learner sessions, progress tracking, recommendations and analytics.' },
  { icon: CreditCard, title: 'Payments & Subscriptions', body: 'Razorpay workflows for monthly/yearly plans in INR and USD.' },
  { icon: Layers3, title: 'Scalable Backend', body: '60+ REST API endpoints using Python, FastAPI, Firebase, Redis and AWS.' },
]

const notes = [
  { text: 'AI tutoring for\nreal progress', className: 'left-0 top-0 -rotate-[6deg] bg-[#e6def7]' },
  { text: 'NISM + SAT\nmade simpler', className: 'right-0 top-0 rotate-[5deg] bg-[#f6dfaa]' },
  { text: 'From concepts\nto confidence', className: 'left-0 bottom-0 rotate-[4deg] bg-[#f4cfd2]' },
]

function PhoneFrame({ front, sizeClass }: { front?: boolean; sizeClass: string }) {
  return (
    <div
      className={`relative aspect-[738/1600] overflow-hidden rounded-[1.5rem] border-[4px] border-[#1e1d1b] bg-white shadow-[0_18px_30px_-14px_rgba(28,24,17,0.5)] sm:rounded-[1.9rem] sm:border-[5px] lg:rounded-[2.1rem] ${sizeClass} ${
        front ? '' : 'opacity-95'
      }`}
    >
      {front && (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1.5 z-10 h-[13px] w-[58px] -translate-x-1/2 rounded-full bg-[#1e1d1b] sm:h-[16px] sm:w-[70px]"
        />
      )}
      <img
        src={educado.screenshot}
        alt="Educado AI app screen"
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
    </div>
  )
}

export function EducadoCase() {
  return (
    <section className="relative overflow-hidden bg-paper text-ink paper-noise">
      <div className="section-pad flex min-h-[min(820px,100svh)] items-center py-16 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(360px,0.9fr)_minmax(400px,1fr)] lg:gap-16 xl:gap-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-[340px]">
            <p className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/45"><span>Selected work</span><span className="h-px w-9 bg-ink/25" /><span>{educado.number}</span></p>

            <div className="relative mx-auto h-[380px] w-[230px] sm:h-[460px] sm:w-[280px] lg:h-[520px] lg:w-[320px]">
              {notes.map((note, i) => (
                <motion.span
                  key={note.text}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className={`absolute z-30 flex aspect-square w-[78px] items-center justify-center px-2 text-center font-script text-[13px] leading-[1.05] text-ink/80 shadow-[2px_5px_12px_rgba(28,24,17,0.14)] sm:w-[92px] sm:text-[15px] ${note.className}`}
                >
                  {note.text.split('\n').map((line) => <span key={line}>{line}<br /></span>)}
                </motion.span>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16, rotate: -14 }}
                whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8 lg:left-10 lg:top-10"
              >
                <PhoneFrame sizeClass="w-[120px] sm:w-[149px] lg:w-[171px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16, rotate: 12 }}
                whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="absolute bottom-0 right-0 z-20"
              >
                <PhoneFrame front sizeClass="w-[150px] sm:w-[186px] lg:w-[214px]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.12 }} className="w-full">
            <h2 className="font-serif text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.88] tracking-[-0.055em] text-ink">Educado <em className="font-normal">AI</em></h2>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#7867a4] sm:text-[11px]">AI tutor × learning × backend</p>
            <p className="mt-4 max-w-prose text-[14px] leading-7 text-ink/70 sm:text-[15px]">Led backend development for an AI learning platform, building the systems behind AI tutoring, assessments, payments, learner progress and analytics.</p>
            <div className="mt-7 divide-y divide-ink/10 border-y border-ink/10">
              {features.map(({ icon: Icon, title, body }, index) => <motion.div key={title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.45, delay: 0.14 + index * 0.08 }} className="grid grid-cols-[30px_1fr] gap-4 py-3.5 sm:grid-cols-[34px_1fr] sm:gap-5"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eee7d7] text-ink/70"><Icon size={14} strokeWidth={1.7} /></span><div><h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-ink/80">{title}</h3><p className="mt-0.5 text-[12px] leading-5 text-ink/58">{body}</p></div></motion.div>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'Firebase', 'Redis', 'AWS', 'RAG', 'FAISS', 'LangChain', 'OpenAI'].map((tech) => <span key={tech} className="rounded-full border border-ink/15 bg-white/45 px-3 py-1.5 text-[10px] font-medium text-ink/60">{tech}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
