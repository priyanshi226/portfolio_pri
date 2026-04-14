import { CinematicHero } from '@/components/ui/cinematic-landing-hero'
import { MinimalistHero } from '@/components/ui/minimalist-hero'
import { Briefcase, Globe, Mail, SquareUser } from 'lucide-react'

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

      <section className="relative min-h-screen overflow-hidden">
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
    </div>
  )
}

export default MinimalistHeroDemo
