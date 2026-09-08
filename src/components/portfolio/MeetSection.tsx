import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import { DotCluster, LoopScribble, ScallopFrame, StarDoodle, TickBurst, UnderlineDoodle } from './Doodles'

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
          <span className="relative inline-block">
            MEET PRIYANSHI
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -right-6 top-0 hidden text-lavender-deep sm:block"
            >
              <StarDoodle className="w-4 h-4" />
            </motion.span>
          </span>
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
          <div className="relative mx-auto w-[260px] pl-7 pt-4 sm:mx-0 sm:w-full sm:max-w-[420px] sm:pl-11 sm:pt-8">
            {/* hand-drawn arrow, upper-left */}
            <motion.svg
              viewBox="0 0 70 70"
              className="absolute left-0 -top-3 h-16 w-16 text-ink/60 sm:-top-5"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M3 6C0 16 8 20 5 28C2 36 12 34 10 42C8 50 22 48 42 56"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: 0.55, ease: 'easeInOut' }}
              />
              <motion.path
                d="M28 52L42 56L36 42"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: 1.35 }}
              />
            </motion.svg>

            {/* tiny dot cluster, near the arrow */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute left-14 top-0 hidden text-ink/40 sm:block"
            >
              <DotCluster className="w-5 h-3" />
            </motion.span>

            {/* vertical annotation, in the left gutter */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ writingMode: 'vertical-rl' }}
              className="font-script pointer-events-none absolute bottom-4 left-0 hidden rotate-180 text-lg text-ink/45 sm:block"
            >
              i'm so happy you're here!
            </motion.p>

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
                  className="h-[326px] w-full object-cover sm:h-[374px]"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* handwritten annotation near top-right of photo */}
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="font-script absolute right-0 top-6 rotate-4 text-xl text-ink/65 sm:-right-5 sm:top-8"
            >
              i'm so happy you're here!
            </motion.p>

            {/* small second note, lower-left of the photo */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="font-script absolute left-16 -bottom-12 -rotate-3 text-base text-lavender-deep/80 sm:left-20 sm:-bottom-10 sm:text-lg"
            >
              (this one's a favourite)
            </motion.p>

            {/* tiny loop scribble, lower edge of the photo */}
            <motion.span
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              whileInView={{ opacity: 0.75, scale: 1, rotate: 6 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute right-3 -bottom-3 text-mustard sm:right-6"
            >
              <LoopScribble />
            </motion.span>

            {/* decorative tick bursts */}
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.15 }}
              className="absolute -right-3 bottom-32 hidden -rotate-6 text-lavender-deep sm:block"
            >
              <TickBurst />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute left-16 -top-5 hidden rotate-12 text-lavender-deep sm:block"
            >
              <TickBurst className="w-6 h-5" />
            </motion.span>

            {/* tiny star, upper area of the frame */}
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 0.75, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 1.55 }}
              className="absolute right-10 top-2 hidden text-mustard sm:block"
            >
              <StarDoodle className="w-3.5 h-3.5" />
            </motion.span>
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
              <p>I started out as a student who liked solving problems.</p>
              <p>
                Somewhere along the way, I discovered that I liked building things, explaining things, coming up
                with ideas, working with people and figuring out how things work just as much as I liked writing
                code.
              </p>
              <p>So I stopped trying to fit myself into one box.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative mt-5 border-l-2 border-ink/15 pl-4"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute -left-3 -top-3 text-lavender-deep"
              >
                <StarDoodle className="w-3.5 h-3.5" />
              </motion.span>
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

            <div className="mt-6 flex items-center gap-3">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 1.15 }}
                className="font-script -rotate-1 text-2xl text-ink/60 sm:text-[26px]"
              >
                apparently one job title wasn't enough →
              </motion.p>
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="hidden text-lavender-deep sm:block"
              >
                <LoopScribble className="w-5 h-4" />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
