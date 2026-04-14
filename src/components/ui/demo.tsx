import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Globe, Mail, SquareUser } from 'lucide-react'

import { CinematicHero } from '@/components/ui/cinematic-landing-hero'
import { MinimalistHero } from '@/components/ui/minimalist-hero'

const ExperienceSection = () => (
  <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16 md:px-10">
    <div className="w-full">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
        Experience
      </p>
      <h2 className="mb-10 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
        What I Have Built So Far
      </h2>

      <div className="grid gap-5 md:grid-cols-2 md:grid-rows-2">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm md:row-span-2 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400/90">
            Full-Time
          </p>
          <h3 className="mt-3 text-2xl font-bold text-foreground">
            Software Engineer
          </h3>
          <p className="mt-2 text-sm font-medium text-foreground/70">
            2024 - Present
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Leading UI architecture and product delivery across reusable frontend
            systems, API integration, and performance-focused web engineering.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-foreground/75">
            <li>Built scalable React interfaces for core business workflows.</li>
            <li>Improved load speed and responsiveness on high-traffic pages.</li>
            <li>
              Collaborated with design and backend teams to ship production
              features end-to-end.
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_52px_-28px_rgba(0,0,0,0.75)] backdrop-blur-sm md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400/90">
            Internship 1
          </p>
          <h3 className="mt-2 text-xl font-bold text-foreground">
            Frontend Developer Intern
          </h3>
          <p className="mt-2 text-sm text-foreground/70">Summer 2023</p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            Delivered responsive modules, component libraries, and interactive
            UI flows for internal dashboards.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_52px_-28px_rgba(0,0,0,0.75)] backdrop-blur-sm md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400/90">
            Internship 2
          </p>
          <h3 className="mt-2 text-xl font-bold text-foreground">
            Software Engineer Intern
          </h3>
          <p className="mt-2 text-sm text-foreground/70">Winter 2022</p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            Worked on API integration, bug fixing, and QA automation support to
            improve release quality.
          </p>
        </article>
      </div>
    </div>
  </div>
)

const MinimalistHeroDemo = () => {
  const heroSectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  })

  const heroFade = useTransform(heroProgress, [0, 0.62, 0.9], [1, 1, 0])
  const imageFade = useTransform(heroProgress, [0, 0.55, 0.85], [1, 0.5, 0])
  const textFade = useTransform(heroProgress, [0, 0.48, 0.78], [1, 0.35, 0])
  const leftShift = useTransform(heroProgress, [0, 0.85], ['0%', '-42%'])
  const rightShift = useTransform(heroProgress, [0, 0.78], ['0%', '44%'])

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ]

  const socialLinks = [
    { icon: Globe, href: '#' },
    { icon: Mail, href: '#' },
    { icon: Briefcase, href: '#' },
    { icon: SquareUser, href: '#' },
  ]

  return (
    <div className="bg-background text-foreground">
      <section ref={heroSectionRef} className="relative h-[165vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="absolute inset-0" style={{ opacity: heroFade }}>
            <MinimalistHero
              logoText="mnmlst."
              navLinks={navLinks}
              mainText="I build modern, scalable web apps with clean UI, strong backend architecture, and performance-first engineering."
              imageSrc="/image.png"
              imageAlt="Portfolio hero image."
              overlayText={{
                part1: "Hey, I'm",
                part2: 'Priyanshi Gupta!',
              }}
              socialLinks={socialLinks}
              locationText="Arlington Heights, IL"
              imageSectionStyle={{ x: leftShift, opacity: imageFade }}
              textSectionStyle={{ x: rightShift, opacity: textFade }}
            />
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 140 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <ExperienceSection />
      </motion.section>

      <section className="relative min-h-screen overflow-hidden">
        <CinematicHero
          brandName="Priyanshi"
          tagline1="Designing resilient systems,"
          tagline2="shipping delightful products."
          cardHeading="Product execution, redefined."
          cardDescription="From polished frontend UX to robust backend workflows, I build end-to-end product experiences focused on speed, quality, and measurable outcomes."
          metricValue={420}
          metricLabel="Days of Building"
          ctaHeading="Build with me."
          ctaDescription="Explore how I turn ideas into production-ready experiences with clear architecture and strong visual craft."
        />
      </section>
    </div>
  )
}

export default MinimalistHeroDemo
