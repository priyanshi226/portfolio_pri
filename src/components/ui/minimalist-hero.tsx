import React from 'react'
import { motion } from 'framer-motion'
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
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
)

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/60 transition-colors hover:text-foreground"
  >
    <Icon className="h-5 w-5" />
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
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background pl-4 pr-8 py-8 font-sans md:pl-8 md:pr-12 md:py-12',
        className,
      )}
    >
      <header className="z-30 flex w-full max-w-7xl items-center justify-between pl-8 md:pl-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </motion.button>
      </header>

      <div className="relative w-full flex-grow flex flex-col md:flex-row items-center md:-mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 mt-6 mb-2 flex w-full justify-end px-6 text-right md:hidden"
        >
          <div className="max-w-lg">
            <h1 className="text-5xl font-extrabold leading-tight text-foreground sm:text-6xl">
              {overlayText.part1}{' '}
              <span className="text-yellow-400">{overlayText.part2}</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              {mainText}
            </p>
          </div>
        </motion.div>

        {/* Image + circle */}
        <div className="relative -mt-28 md:mt-2 flex w-full flex-1 items-end md:w-auto md:flex-none md:items-center justify-center shrink-0 h-[64vh] md:h-auto md:ml-[100px] lg:ml-[160px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="pointer-events-none absolute inset-0 z-0 m-auto h-[320px] w-[320px] -translate-y-24 rounded-full bg-yellow-400 md:h-[380px] md:w-[380px] md:translate-y-0 lg:h-[480px] lg:w-[480px]"
          ></motion.div>
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-[96vw] max-w-[470px] -translate-y-8 md:w-[450px] md:max-w-none md:translate-y-0 lg:w-[550px] object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src =
                'https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found'
            }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="z-20 hidden md:absolute md:right-32 md:top-1/3 md:flex md:w-[40vw] md:-translate-y-1/2 md:justify-end lg:right-40 lg:w-[36vw] xl:w-[34vw]"
      >
        <div className="max-w-xl text-right">
          <h1 className="text-6xl font-extrabold leading-tight text-foreground lg:text-7xl xl:text-8xl">
            {overlayText.part1}{' '}
            <span className="text-yellow-400">{overlayText.part2}</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75 lg:text-xl">
            {mainText}
          </p>
        </div>
      </motion.div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between pl-8 md:pl-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  )
}
