import { Briefcase, Globe, Mail, SquareUser } from 'lucide-react'

import { MinimalistHero } from '@/components/ui/minimalist-hero'

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
    />
  )
}

export default MinimalistHeroDemo
