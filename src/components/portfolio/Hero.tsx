import { motion } from 'framer-motion'
import { profile, heroCopy } from '@/data/content'
import {
  BigSquiggle,
  DocumentMark,
  EnvelopeMark,
  LinkedInMark,
  PinDoodle,
  PlusDoodle,
  SparkleCluster,
  StarDoodle,
} from './Doodles'

const linkedinDisplay = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-olive text-paper">
      <div className="section-pad relative grid gap-12 pb-14 pt-10 sm:grid-cols-[1fr_0.95fr] sm:items-center sm:gap-6 sm:pb-16 sm:pt-12">
        {/* decorative marks, top-left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          animate={{ opacity: 0.85, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute left-2 top-0 text-paper/70 sm:left-4"
        >
          <SparkleCluster className="w-28 h-16" />
        </motion.div>

        {/* LEFT — Hello + intro + CTA */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[92px] italic leading-none tracking-tight text-paper sm:text-[132px]"
          >
            Hello!
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="-mt-2 w-[260px] text-blush sm:w-[380px]"
          >
            <BigSquiggle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="relative mt-7 max-w-[420px] text-[17px] leading-relaxed text-paper/85 sm:max-w-[560px] sm:text-[19px]"
          >
            <span className="font-semibold text-paper">{heroCopy.introLead}</span> {heroCopy.introBefore}
            <em className="font-serif italic text-blush">{heroCopy.introItalicOne}</em>
            {heroCopy.introMid}
            <em className="font-serif italic text-blush">{heroCopy.introItalicTwo}</em>
            {heroCopy.introAfter}

            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute -right-8 -top-1 hidden text-lavender sm:block"
            >
              <PlusDoodle className="w-5 h-5" />
            </motion.span>
          </motion.p>

          <div className="relative mt-5 flex items-end gap-3 sm:mt-6">
            <motion.svg
              viewBox="0 0 90 90"
              className="mb-2 h-20 w-20 shrink-0 text-blush/80 sm:h-28 sm:w-28"
              fill="none"
              aria-hidden="true"
            >
              <motion.path
                d="M10 8C8 30 14 52 32 66C44 75 58 76 70 70"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 1, ease: 'easeInOut' }}
              />
              <motion.path
                d="M56 66L70 70L64 55"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.85 }}
              />
            </motion.svg>

            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              whileHover={{ y: -2 }}
              className="group mb-1 inline-flex items-center gap-3 rounded-full border border-paper/20 bg-paper px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-olive-dark shadow-[0_14px_28px_-12px_rgba(0,0,0,0.4)] transition-colors hover:bg-blush/90"
            >
              <EnvelopeMark className="w-5 h-4" />
              Let's Talk
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>

            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="mb-3 hidden text-lavender sm:block"
            >
              <StarDoodle className="w-7 h-7" />
            </motion.span>
          </div>
        </div>

        {/* RIGHT — photo card */}
        <div className="relative z-10 mx-auto w-full max-w-[420px] sm:mx-0 sm:ml-auto">
          <motion.span
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.85, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="absolute -left-4 -top-4 z-20 text-lavender sm:-left-6 sm:-top-5"
          >
            <PlusDoodle className="w-6 h-6" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="absolute -right-5 bottom-28 z-20 text-lavender sm:-right-7"
          >
            <StarDoodle className="w-8 h-8" />
          </motion.span>

          <motion.div
            initial={{ opacity: 0, x: 60, rotate: -6 }}
            animate={{ opacity: 1, x: 0, rotate: -1.5 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0 }}
            className="overflow-hidden rounded-[32px] border border-paper/10 bg-paper shadow-[0_36px_70px_-20px_rgba(0,0,0,0.5)]"
          >
            <div className="p-3.5 sm:p-4">
              <img
                src={profile.portrait}
                alt="Priyanshi"
                className="h-[340px] w-full rounded-[22px] object-cover object-top sm:h-[400px]"
                loading="eager"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7"
            >
              <p className="font-serif text-[22px] text-ink">
                Priyanshi <span className="ml-1 text-[14px] font-sans font-normal text-ink/45">· Software Engineer</span>
              </p>

              <div className="mt-3.5 space-y-2.5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="flex items-center gap-2.5 text-[15px] text-ink/70"
                >
                  <PinDoodle className="w-4 h-4 text-ink/50" />
                  {profile.location}
                </motion.div>

                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.45 }}
                  className="group flex items-center gap-2.5 text-[15px] text-ink/70 transition-colors hover:text-lavender-deep"
                >
                  <LinkedInMark className="w-4 h-4 text-ink/50 group-hover:text-lavender-deep" />
                  <span className="transition-transform group-hover:translate-x-0.5">{linkedinDisplay}</span>
                </motion.a>

                <motion.a
                  href={profile.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="group flex items-center gap-2.5 text-[15px] text-ink/70 transition-colors hover:text-lavender-deep"
                >
                  <DocumentMark className="w-4 h-4 text-ink/50 group-hover:text-lavender-deep" />
                  <span className="transition-transform group-hover:translate-x-0.5">View My Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
