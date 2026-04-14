import React from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface ProjectCardProps
  extends Omit<React.ComponentPropsWithoutRef<'article'>, 'children'> {
  projectName?: string
  heading?: string
  description?: React.ReactNode
  status?: string
  features?: string[]
}

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function ProjectCard({
  projectName = 'Website Builder',
  heading = 'Drag-and-Drop Web Creation Platform',
  description = 'Building an intuitive platform that helps non-technical teams create responsive websites and ship faster.',
  status = 'Currently in progress',
  features = [
    'Visual page editing with instant preview',
    'Reusable responsive blocks and templates',
    'Straightforward deployment pipeline',
  ],
  className,
  ...props
}: ProjectCardProps) {
  return (
    <article
      className={cn('soft-card p-7 sm:p-8', className)}
      {...props}
    >
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/54">
            {projectName}
          </p>
          <span className="rounded-full border border-foreground/16 bg-foreground/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-foreground/62">
            {status}
          </span>
        </div>

        <h3 className="text-2xl font-medium leading-tight text-foreground sm:text-[1.75rem]">
          {heading}
        </h3>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/72 sm:text-base">
          {description}
        </p>

        <div className="mt-7 border-t border-foreground/10 pt-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/52">
            Case Study Highlights
          </p>
          <ul className="mt-4 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-[0.58rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
                <span className="text-sm leading-relaxed text-foreground/72 sm:text-[15px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  )
}
