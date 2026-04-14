import React from 'react'
import { motion, type MotionStyle } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface MinimalistHeroProps {
  logoText: string
  navLinks: { label: string; href: string }[]
  mainText: string
  imageSrc: string
  imageAlt: string
  overlayText: {
    part1: string
    part2: string
  }
  socialLinks: { icon: LucideIcon; href: string }[]
  locationText: string
  className?: string
  rootStyle?: MotionStyle
  imageSectionStyle?: MotionStyle
  textSectionStyle?: MotionStyle
}

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    className="text-[11px] uppercase tracking-[0.2em] text-foreground/55 transition-colors duration-300 hover:text-foreground"
  >
    {children}
  </a>
)

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target={href.startsWith('#') ? undefined : '_blank'}
    rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
    className="text-foreground/55 transition-colors duration-300 hover:text-foreground"
  >
    <Icon className="h-[18px] w-[18px]" />
  </a>
)

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
  rootStyle,
  imageSectionStyle,
  textSectionStyle,
}: MinimalistHeroProps) => {
  return (
    <motion.div
      style={rootStyle}
      className={cn(
        'relative flex min-h-screen w-full flex-col justify-between overflow-hidden pb-8 pt-8 md:pb-10 md:pt-10',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(187,161,129,0.14),transparent_40%),radial-gradient(circle_at_8%_18%,rgba(95,124,164,0.12),transparent_48%)]" />
      </div>

      <header className="section-shell z-30 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-sm tracking-[0.32em] text-foreground/82"
        >
          {logoText}
        </motion.div>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <div className="section-shell relative z-20 grid flex-1 items-center gap-10 pb-6 pt-10 md:gap-12 md:py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          style={imageSectionStyle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-xl"
        >
          <div className="absolute -bottom-10 left-8 right-8 top-10 rounded-[44px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(24,31,45,0.35),rgba(10,13,20,0.74))] blur-[0.3px]" />
          <div className="absolute -bottom-5 left-[22%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(186,165,137,0.3),rgba(186,165,137,0)_72%)]" />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="relative h-auto w-full max-w-[440px] object-cover"
          />
        </motion.div>

        <motion.div
          style={textSectionStyle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mx-auto w-full max-w-xl text-left lg:ml-auto lg:mr-0"
        >
          <h1 className="text-balance text-[2.35rem] font-medium leading-[1.06] text-foreground sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            {overlayText.part1}{' '}
            <span className="highlight-phrase text-[1.07em]">{overlayText.part2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/72 sm:text-lg md:mt-6">
            {mainText}
          </p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/54 sm:mt-6 sm:text-[15px]">
            Product-focused engineer shipping{' '}
            <span className="highlight-phrase">scalable and production-ready</span>{' '}
            systems with polished interfaces and strong backend reliability.
          </p>
        </motion.div>
      </div>

      <footer className="section-shell z-30 flex items-center justify-between border-t border-foreground/10 pt-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.7 }}
          className="text-xs uppercase tracking-[0.16em] text-foreground/55"
        >
          {locationText}
        </motion.div>
      </footer>

      <motion.div
        style={textSectionStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute bottom-[9%] left-[45%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(95,124,164,0.14),transparent_65%)]" />
      </motion.div>
    </motion.div>
  )
}
