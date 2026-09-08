import { motion } from 'framer-motion'
import { Atom, Braces, Cloud, Database, Server, Sparkles } from 'lucide-react'
import { profile } from '@/data/content'
import { ScallopFrame, UnderlineDoodle } from './Doodles'

const techMarks = [
  { label: 'Python', icon: Braces, className: 'left-14 top-0 -rotate-3 bg-[#f5e4b5]' },
  { label: 'React', icon: Atom, className: 'left-[39%] -top-3 rotate-2 bg-[#c9edf0]' },
  { label: 'FastAPI', icon: Server, className: 'right-3 top-1 -rotate-2 bg-[#ccebdc]' },
  { label: 'Firebase', icon: Sparkles, className: 'left-0 top-[35%] rotate-2 bg-[#fde2c7]' },
  { label: 'Redis', icon: Database, className: '-left-2 top-[56%] -rotate-3 bg-[#f1d2d8]' },
  { label: 'AWS', icon: Cloud, className: 'left-1 top-[77%] rotate-2 bg-[#e1dcf4]' },
]

export function MeetSection() {
  return (
    <section id="about" className="relative bg-paper py-14 sm:py-20">
      <div className="section-pad">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif text-[42px] tracking-tight text-ink sm:text-[58px]"
        >
          MEET PRIYANSHI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-3 max-w-md text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/55"
        >
          Software engineer, AI builder, and the person who never really stuck to one box.
        </motion.p>

        <div className="mt-8 grid gap-10 sm:mt-10 sm:grid-cols-[1fr_1.15fr] sm:items-start sm:gap-8">
          {/* LEFT — scrapbook photograph */}
          <div className="relative mx-auto w-[244px] pl-7 pt-10 sm:mx-0 sm:w-full sm:max-w-[370px] sm:pl-11 sm:pt-12">
            {/* A small, top-and-left-only stack of technologies. */}
            {techMarks.map(({ label, icon: Icon, className }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85, y: 6 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.35, delay: 0.4 + index * 0.07 }}
                className={`absolute z-10 flex h-9 w-9 items-center justify-center border border-white/60 shadow-[2px_4px_9px_rgba(20,18,12,0.13)] sm:h-10 sm:w-10 ${className}`}
                aria-label={label}
                title={label}
              >
                <Icon size={18} strokeWidth={1.7} className="text-ink/75 sm:h-5 sm:w-5" aria-hidden="true" />
              </motion.div>
            ))}

            {/* frame + photo, single tilted unit */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, rotate: 6, scale: 0.94 }}
                whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 text-lavender"
              >
                <ScallopFrame />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40, rotate: 8 }}
                whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative m-4 border border-ink/10 shadow-[0_18px_36px_-16px_rgba(20,18,12,0.4)]"
              >
                <img
                  src={profile.portrait}
                  alt="Priyanshi smiling"
                  className="h-[285px] w-full object-cover sm:h-[326px]"
                  loading="lazy"
                />
              </motion.div>
            </div>

          </div>

          {/* RIGHT — editorial text */}
          <div className="relative">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-[27px] leading-tight text-ink sm:text-[34px]"
            >
              I started with problems.
              <br />
              Then I started{' '}
              <span
                className="font-script relative inline-block px-1 italic text-ink"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg, transparent 0%, transparent 4%, rgba(216,169,59,0.4) 4%, rgba(216,169,59,0.4) 96%, transparent 96%)',
                }}
              >
                building
              </span>{' '}
              things.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 space-y-3.5 text-[16.5px] leading-relaxed text-ink/80"
            >
              <p>
                I&apos;m a software engineer who likes working where engineering, AI and product overlap.
              </p>
              <p>
                With Python, Flask/FastAPI, React and TypeScript, I build across the stack — from frontend
                experiences and backend APIs to AI-powered systems, RAG workflows and the infrastructure that
                keeps them running. I enjoy taking an idea into something people can actually use.
              </p>
              <p>
                Beyond the code, I like understanding the problem first: thinking through product decisions,
                working with founders and teams, explaining technical ideas, and figuring out what truly needs to
                be built.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 border-l-2 border-ink/15 pl-4"
            >
              <p className="font-serif text-[21px] italic leading-snug text-ink sm:text-[25px]">
                I didn't want to only write code.
                <br />
                I wanted to{' '}
                <span className="relative inline-block">
                  understand the whole thing.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute -bottom-1 left-0 block w-full"
                  >
                    <UnderlineDoodle className="text-mustard" />
                  </motion.span>
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
