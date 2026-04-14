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
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Globe, href: '#' },
    { icon: Mail, href: 'mailto:priyanshigupta0303@gmail.com' },
    { icon: Briefcase, href: 'https://www.linkedin.com/in/priyanshi-gupta' },
    { icon: SquareUser, href: 'https://github.com/priyanshi-gupta' },
  ]

  return (
    <div className="bg-background text-foreground">
      <section className="h-screen">
        <MinimalistHero
          logoText="PG."
          navLinks={navLinks}
          resumeHref="/portfolio_pri/resume.pdf"
          mainText="Software Developer experienced in building scalable systems and delivering high-quality features in fast-paced product environments. Strong foundation in computer science and problem-solving with a focus on reliable, efficient software."
          imageSrc="image.png"
          imageAlt="Portfolio hero image."
          overlayText={{
            part1: "Hey, I'm",
            part2: 'Priyanshi Gupta!',
          }}
          socialLinks={socialLinks}
          locationText="Patiala, India"
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
              Work history
            </h2>
          </motion.div>

          <div className="space-y-5">

            {/* Full-width horizontal: Software Engineer */}
            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="soft-card p-8 sm:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Software Engineer
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground/55">
                    Orchestrix Technologies Pvt. Ltd.
                  </p>
                  <span className="mt-4 inline-block rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/50">
                    Jul 2024 – Present
                  </span>
                </div>
                <ul className="space-y-4">
                  {[
                    'Primary backend engineer on Educado AI — full backend with FastAPI, Firebase, Redis, and OpenAI APIs with async workers; covering Score Predictor, AI Tutor, Analytics pipeline, and Full-Length Test modules for SAT and NISM.',
                    'Delivered AI Tutor with dynamic prompt orchestration, RAG retrieval via LangChain and FAISS, and session summarization with persistence.',
                    'Contributed to Pratinidhi AI backend: modular controllers/services/repositories architecture with automation workflow triggers and structured logging for production observability.',
                  ].map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                      <span className="mt-[0.5rem] h-[4px] w-[4px] shrink-0 rounded-full bg-foreground/35" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            {/* Bottom row: two internships side by side */}
            <div className="grid gap-5 md:grid-cols-2">

              <motion.article
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="soft-card p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Software Engineer Intern</h3>
                    <p className="mt-1 text-sm text-foreground/55">Orchestrix Technologies Pvt. Ltd.</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/50">
                    Jan 2024 – Jun 2024
                  </span>
                </div>
                <ul className="mt-6 space-y-3 border-t border-foreground/10 pt-6">
                  {[
                    'Built the Pratinidhi AI web dashboard for managing conversation pipelines and CRM stages using React.js with component-level state management, controlled form validation, and a unified REST API integration layer.',
                  ].map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                      <span className="mt-[0.5rem] h-[4px] w-[4px] shrink-0 rounded-full bg-foreground/35" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>

              <motion.article
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="soft-card p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Quality Assurance Intern</h3>
                    <p className="mt-1 text-sm text-foreground/55">360Logica Testing Services (SAKSOFT)</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/50">
                    Jun 2024 – Aug 2024
                  </span>
                </div>
                <ul className="mt-6 space-y-3 border-t border-foreground/10 pt-6">
                  {[
                    'Executed manual and exploratory testing across web and AI-based applications; reported functional, UI, and performance defects with clear reproduction steps.',
                    'Managed test cases and defect lifecycle using JIRA and TestRail; validated API contracts and response payloads using Postman.',
                    'Tested chatbot and LLM outputs across varied prompt sets to evaluate accuracy, relevance, and edge-case handling.',
                  ].map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                      <span className="mt-[0.5rem] h-[4px] w-[4px] shrink-0 rounded-full bg-foreground/35" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>

            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative min-h-screen overflow-hidden section-divider" aria-label="Projects">
        <CinematicHero
          brandName="Educado AI"
          tagline1="AI Learning Platform"
          tagline2="NISM and SAT"
          cardHeading="Educado AI — AI Learning Platform (NISM and SAT)"
          cardDescription="Built the full backend using FastAPI, Firebase Auth, Firestore, Redis, and OpenAI APIs with async background workers; designed for low-latency reads and eventual-consistency writes at scale. Delivered Score Predictor, AI Tutor, Analytics pipeline, and Full-Length Test modules for both SAT and NISM exam preparation."
          metricValue={420}
          metricLabel="Days of Building"
          ctaHeading="Primary backend engineer, near-sole ownership."
          ctaDescription="Shipped Score Predictor, AI Tutor flow, Analytics pipeline, and Full-Length Test module — covering exam-aware question assembly, RAG retrieval via LangChain and FAISS, async event ingestion, and entitlement-aware trial gating."
        />
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <LaptopHero
          projectName="Pratinidhi AI"
          heading="AI Agent and CRM Workflow Platform"
          description="Built a web dashboard for managing conversation pipelines and CRM stages using React.js with component-level state management, controlled form validation, and a unified REST API integration layer. Worked on a modular backend following controllers/services/repositories pattern, covering intake, qualification, routing, and lifecycle tracking of customer interactions."
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="soft-card p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/54">
                Languages
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72">
                C++, Python, JavaScript, TypeScript
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
                Frontend
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72">
                React.js, Tailwind CSS, Flutter
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
                FastAPI (Python), REST API Design, JWT Authentication, Microservices
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
                AI / LLM
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72">
                OpenAI APIs, LangChain, FAISS, RAG Pipelines, Prompt Engineering
              </p>
            </motion.article>

            <motion.article
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="soft-card p-6 md:col-span-2 lg:col-span-1"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/54">
                Databases &amp; Infra
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72">
                MongoDB, Firebase (Auth + Firestore), Redis, SQL, Docker, CI/CD, Git
              </p>
            </motion.article>
          </div>
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
                href="mailto:priyanshigupta0303@gmail.com"
                className="rounded-full border border-foreground/16 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshi-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/16 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/priyanshi-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/16 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="/portfolio_pri/resume.pdf"
                download
                className="rounded-full border border-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.15em] text-foreground/80 transition-colors hover:border-foreground/60 hover:text-foreground"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MinimalistHeroDemo

