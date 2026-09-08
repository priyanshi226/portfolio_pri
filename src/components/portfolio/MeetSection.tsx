import { motion } from 'framer-motion'
import { Code2, Database, Sparkles, Wrench } from 'lucide-react'
import { TickBurst, UnderlineDoodle } from './Doodles'

const toolGroups = [
  {
    title: 'AI / LLM',
    icon: Sparkles,
    className: 'bg-lavender/40',
    items: ['AI Agents', 'RAG', 'Embeddings', 'Semantic Search', 'FAISS', 'LangChain', 'Prompt Engineering', 'Function Calling', 'OpenAI APIs'],
  },
  {
    title: 'Backend',
    icon: Database,
    className: 'bg-[#E1EFE0]',
    items: ['Python', 'FastAPI', 'REST APIs', 'JWT Auth', 'Microservices', 'Firebase', 'Firestore', 'Redis', 'MongoDB', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    className: 'bg-blush/35',
    items: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Flutter'],
  },
  {
    title: 'Testing & Tools',
    icon: Wrench,
    className: 'bg-[#F7EFD6]',
    items: ['Postman', 'JIRA', 'TestRail', 'Git', 'Docker', 'CI/CD'],
  },
]

export function MeetSection() {
  return (
    <section id="about" className="relative bg-paper py-14 sm:py-20">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex w-fit items-center gap-3"
        >
          <TickBurst className="h-5 w-6 -scale-x-100 text-ink/25" />
          <span className="font-script rounded-full border border-ink/12 bg-paper px-5 py-1.5 text-[16px] leading-none text-ink/70 shadow-[0_2px_8px_rgba(20,18,12,0.06)]">
            hi there!
          </span>
          <TickBurst className="h-5 w-6 text-ink/25" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center font-serif text-[42px] tracking-tight text-ink sm:text-[58px]"
        >
          Meet <em className="font-normal italic">Priyanshi</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-3 max-w-md text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/55"
        >
          Software engineer, AI builder, and the person who never really stuck to one box.
        </motion.p>

        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — about */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:border-r lg:border-ink/10 lg:pr-16"
          >
            <span className="block h-[3px] w-16 rounded-full bg-lilac" aria-hidden="true" />

            <h3 className="mt-5 font-serif text-[27px] leading-tight text-ink sm:text-[34px]">
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
            </h3>

            <div className="mt-4 space-y-3.5 text-[16.5px] leading-relaxed text-ink/80">
              <p>I&apos;m a software engineer who likes working where engineering, AI and product overlap.</p>
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
            </div>

            {/* <div className="mt-5 border-l-2 border-ink/15 pl-4">
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
                    transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute -bottom-1 left-0 block w-full"
                  >
                    <UnderlineDoodle className="text-mustard" />
                  </motion.span>
                </span>
              </p>
            </div> */}
          </motion.div>

          {/* RIGHT — tools */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <h3 className="font-serif text-[24px] tracking-tight text-ink sm:text-[28px]">
                The tools I like to build with
              </h3>
              <span className="h-px flex-1 bg-lavender-deep/25" aria-hidden="true" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {toolGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                  className={`rounded-2xl border border-ink/10 p-4 shadow-[0_10px_24px_-16px_rgba(20,18,12,0.35)] ${group.className}`}
                >
                  <div className="flex items-center gap-2">
                    <group.icon size={17} strokeWidth={1.8} className="text-ink/70" aria-hidden="true" />
                    <p className="font-serif text-[16px] text-ink">{group.title}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink/10 bg-white/70 px-2.5 py-1 text-[11.5px] font-medium leading-none text-ink/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
