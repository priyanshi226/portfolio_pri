import { CinematicHero } from '@/components/ui/cinematic-landing-hero'
import { MinimalistHero } from '@/components/ui/minimalist-hero'
import { LaptopHero } from '@/components/ui/laptop-hero'
import { ProjectCard } from '@/components/ui/project-card'
import { motion } from 'framer-motion'
import { Briefcase, Globe, Mail, SquareUser } from 'lucide-react'

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const MinimalistHeroDemo = () => {
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
      <section className="h-screen">
        <MinimalistHero
          logoText="mnmlst."
          navLinks={navLinks}
          mainText="I build modern, scalable web apps with clean UI, strong backend architecture, and performance-first engineering."
          imageSrc="image.png"
          imageAlt="Portfolio hero image."
          overlayText={{
            part1: "Hey, I'm",
            part2: 'Priyanshi Gupta!',
          }}
          socialLinks={socialLinks}
          locationText="Arlington Heights, IL"
        />
      </section>

      <section id="experience" className="section-spacing section-divider">
        <div className="section-shell">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-12 max-w-3xl"
          >
            <p className="eyebrow">Experience</p>
            <h2 className="section-heading mt-4">
              Building products with{' '}
              <span className="highlight-phrase">structured execution</span> and
              measurable outcomes.
            </h2>
            <p className="section-body mt-5">
              A clear split between full-time ownership and internship execution,
              presented in a layout with stronger hierarchy and cleaner scanning.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="soft-card h-full min-h-[30rem] p-8 sm:p-10"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/54">
                Full-Time Experience
              </p>
              <h3 className="mt-4 text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                Software Engineer - Orchestrix
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-foreground/56">
                May 2025 - Present
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-3 text-sm leading-relaxed text-foreground/74 sm:text-base">
                  <span className="mt-[0.56rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                  Led development of Educado AI modules with end-to-end feature
                  ownership across SAT and NISM prep workflows.
                </li>
                <li className="flex gap-3 text-sm leading-relaxed text-foreground/74 sm:text-base">
                  <span className="mt-[0.56rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                  Improved reliability of exam journeys by refining backend data
                  flows and front-end state handling across high-traffic screens.
                </li>
                <li className="flex gap-3 text-sm leading-relaxed text-foreground/74 sm:text-base">
                  <span className="mt-[0.56rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                  Partnered with design and product to ship{' '}
                  <span className="highlight-phrase">consistent, production-ready</span>{' '}
                  experiences under tight release cycles.
                </li>
              </ul>
            </motion.article>

            <div className="grid gap-6">
              <motion.article
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="soft-card p-7"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/54">
                  Internship 01
                </p>
                <h3 className="mt-3 text-xl font-medium leading-tight text-foreground">
                  Frontend Engineer Intern
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-foreground/56">
                  Nov 2024 - Apr 2025
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="flex gap-3 text-sm text-foreground/72">
                    <span className="mt-[0.55rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                    Shipped responsive interfaces for exam prep dashboards.
                  </li>
                  <li className="flex gap-3 text-sm text-foreground/72">
                    <span className="mt-[0.55rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                    Reduced UI regressions with reusable component patterns.
                  </li>
                </ul>
              </motion.article>

              <motion.article
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="soft-card p-7"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/54">
                  Internship 02
                </p>
                <h3 className="mt-3 text-xl font-medium leading-tight text-foreground">
                  Product Engineering Intern
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-foreground/56">
                  May 2024 - Oct 2024
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="flex gap-3 text-sm text-foreground/72">
                    <span className="mt-[0.55rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                    Built workflow UI for operations teams and faster onboarding.
                  </li>
                  <li className="flex gap-3 text-sm text-foreground/72">
                    <span className="mt-[0.55rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                    Improved team velocity with cleaner API integration layers.
                  </li>
                </ul>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative min-h-screen overflow-hidden section-divider">
        <CinematicHero
          brandName="Educado AI"
          tagline1="Designing resilient systems,"
          tagline2="shipping delightful products."
          cardHeading="Building Scalable EdTech Solutions"
          cardDescription="At Orchestrix, I contributed to Educado AI—a comprehensive exam preparation platform. Developed end-to-end features for SAT and NISM modules, focusing on scalable architecture, real-time performance tracking, and seamless user experience across complex exam workflows."
          metricValue={420}
          metricLabel="Days of Building"
          ctaHeading="Build with me."
          ctaDescription="Explore how I turn ideas into production-ready experiences with clear architecture and strong visual craft."
        />
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <LaptopHero
          projectName="Pratinidhi AI"
          heading="Agent Workflows at Scale"
          description="Architected intelligent agent pipelines for business automation with guardrails, evaluations, and real-world deployments. Implemented template-based workflows for rapid domain adaptation and measurable impact on handoff rates and resolution quality."
        />
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <ProjectCard
          projectName="Website Builder"
          heading="Drag-and-Drop Web Creation Platform"
          description="Building an intuitive, powerful website builder that empowers non-technical users to create professional, responsive websites without code. Focus on simplicity, flexibility, and seamless deployment."
          status="Currently in Progress"
          features={[
            'Drag-and-drop visual editor with real-time preview',
            'Responsive design system for all devices',
            'Pre-built component library and templates',
            'One-click deployment and hosting integration',
          ]}
        />
      </section>

      <section id="skills" className="section-spacing section-divider">
        <div className="section-shell">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-12 max-w-3xl"
          >
            <p className="eyebrow">Skills / Tech Stack</p>
            <h2 className="section-heading mt-4">
              Tools I use to ship{' '}
              <span className="highlight-phrase">stable end-to-end products</span>.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="soft-card p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/54">
                Frontend
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72">
                React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Responsive
                System Design
              </p>
            </motion.article>

            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="soft-card p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/54">
                Backend
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72">
                Node.js, REST APIs, Authentication, Data Modeling, Workflow
                Orchestration
              </p>
            </motion.article>

            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="soft-card p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/54">
                Tools
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72">
                Git, Postman, Figma, Vite, CI/CD, Performance Profiling and QA
                Workflows
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="about" className="section-spacing section-divider">
        <div className="section-shell">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="soft-card max-w-4xl p-8 sm:p-10"
          >
            <p className="eyebrow">About / Approach</p>
            <p className="mt-5 text-base leading-relaxed text-foreground/74 sm:text-lg">
              I like to work with clear product intent, lean iterations, and a
              strong handoff loop between design and engineering. My process
              emphasizes <span className="highlight-phrase">systems thinking</span>,
              practical architecture, and{' '}
              <span className="highlight-phrase">high ownership execution</span>{' '}
              from early prototypes to production release.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section-spacing section-divider">
        <div className="section-shell">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="soft-card max-w-4xl p-8 sm:p-10"
          >
            <p className="eyebrow">Contact</p>
            <h2 className="section-heading mt-4 max-w-2xl">
              Let&apos;s build something{' '}
              <span className="highlight-phrase">thoughtful and scalable</span>.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Open to product engineering roles and collaboration on ambitious,
              user-focused systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:youremail@example.com"
                className="rounded-full border border-foreground/16 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                Email
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/16 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/16 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MinimalistHeroDemo

