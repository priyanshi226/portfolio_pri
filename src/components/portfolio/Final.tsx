import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { finalSection, profile } from '@/data/content'
import { EnvelopeMark, GitHubMark, LinkedInMark } from './Doodles'

const links = [
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInMark, external: true },
  { label: 'GitHub', href: profile.github, icon: GitHubMark, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: EnvelopeMark, external: false },
]

const fieldClass =
  'w-full rounded-xl border border-ink/10 bg-paper/95 px-4 py-3 text-[14.5px] text-ink placeholder:text-ink/40 shadow-[0_2px_6px_rgba(0,0,0,0.08)] outline-none transition-all focus:border-lavender-deep focus:ring-2 focus:ring-lavender-deep/35'

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/60'

export function Final() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: profile.email,
      su: subject,
      body,
    })

    window.open(`https://mail.google.com/mail/?${params.toString()}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="relative bg-olive py-20 text-paper sm:py-28">
      <div className="section-pad">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — intro + links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-[44px] leading-[1.02] tracking-tight text-paper sm:text-[60px]">{finalSection.heading}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/75 sm:text-[16.5px]">{finalSection.body}</p>

            <div className="mt-12 flex flex-col divide-y divide-paper/12 border-t border-paper/12">
              {links.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between py-5 transition-colors"
                >
                  <span className="flex items-center gap-3.5 text-[20px] font-medium text-paper transition-colors group-hover:text-blush sm:text-[24px]">
                    <Icon className="h-5 w-5 text-paper/50 transition-colors group-hover:text-blush" />
                    {label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[20px] text-paper/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blush sm:text-[24px]"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-subject" className={labelClass}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a bit about what you have in mind."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-paper px-7 py-4 text-[14.5px] font-semibold uppercase tracking-[0.1em] text-olive-dark shadow-[0_14px_28px_-14px_rgba(0,0,0,0.5)] transition-all hover:bg-blush/90 hover:shadow-[0_18px_34px_-14px_rgba(0,0,0,0.55)] sm:w-auto"
              >
                Send message
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
