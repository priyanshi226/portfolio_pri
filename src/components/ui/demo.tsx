import { MinimalistHero } from '@/components/ui/minimalist-hero'
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
    { label: 'HOME', href: '#home' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Globe, href: '#' },
    { icon: Briefcase, href: '#experience' },
    { icon: SquareUser, href: '#' },
    { icon: Mail, href: '#contact' },
  ]

  return (
    <div className="bg-background text-foreground">
      <section id="home" className="min-h-screen">
        <MinimalistHero
          logoText="mnmlst."
          navLinks={navLinks}
          mainText="I design and engineer digital products that balance clean UI, reliable systems, and measurable business outcomes for teams that move fast."
          imageSrc="/image.png"
          imageAlt="Portfolio hero image."
          overlayText={{
            part1: "Hey, I'm",
            part2: 'Priyanshi Gupta!',
          }}
          socialLinks={socialLinks}
          locationText="Arlington Heights, IL"
        />
      </section>

      <main className="section-divider">
        <section id="experience" className="section-spacing">
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
                <span className="highlight-phrase">structured execution</span>{' '}
                and measurable outcomes.
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

        <section id="projects" className="section-spacing section-divider">
          <div className="section-shell">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-12 max-w-3xl"
            >
              <p className="eyebrow">Company Projects</p>
              <h2 className="section-heading mt-4">
                Case-study snapshots from{' '}
                <span className="highlight-phrase">real product delivery</span>.
              </h2>
              <p className="section-body mt-5">
                The same projects, now structured with clearer outcomes, cleaner
                spacing, and less visual clutter for quicker scanning.
              </p>
            </motion.div>

            <div className="space-y-6">
              <ProjectCard
                projectName="Educado AI"
                heading="Scalable Exam Preparation Platform"
                description="Contributed full-stack features for SAT and NISM modules, with a focus on stable flows, performance visibility, and reliability across complex exam states."
                status="Shipped"
                features={[
                  'Built test workflows with robust attempt-state handling and smooth continuation logic.',
                  'Connected analytics surfaces for section-wise performance and progress tracking.',
                  'Improved overall product consistency through shared UI and API integration patterns.',
                ]}
              />

              <ProjectCard
                projectName="Pratinidhi AI"
                heading="Agent Workflow Infrastructure"
                description="Designed and implemented practical agent pipelines for business automation with guardrails, evaluations, and strong handoff quality controls."
                status="Production"
                features={[
                  'Created modular workflow templates that adapt quickly across domains.',
                  'Added evaluation checkpoints for response quality, confidence, and escalation paths.',
                  'Instrumented metrics for handoff rate, cycle time, and resolution quality.',
                ]}
              />

              <ProjectCard
                projectName="Website Builder"
                heading="No-Code Site Creation Product"
                description="Building a drag-and-drop web creation experience that prioritizes clarity for non-technical users while maintaining development-grade architecture."
                status="In Progress"
                features={[
                  'Shaping a reusable block system to improve speed and consistency of page creation.',
                  'Ensuring responsive behavior and predictable output across common layouts.',
                  'Preparing deployment workflows to keep publishing simple and reliable.',
                ]}
              />
            </div>
          </div>
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
      </main>
    </div>
  )
}

export default MinimalistHeroDemo
