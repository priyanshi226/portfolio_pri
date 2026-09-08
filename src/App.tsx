import { MotionConfig } from 'framer-motion'
import { PageFrame } from '@/components/portfolio/PageFrame'
import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'
import { MeetSection } from '@/components/portfolio/MeetSection'
import { JourneyTimeline } from '@/components/portfolio/JourneyTimeline'
import { PratinidhiCase } from '@/components/portfolio/PratinidhiCase'
import { EducadoCase } from '@/components/portfolio/EducadoCase'
import { DoesntFit } from '@/components/portfolio/DoesntFit'
import { Final } from '@/components/portfolio/Final'
import { WavyDivider } from '@/components/portfolio/WavyDivider'

const c = {
  paper: '#F7F2E4',
  olive: '#39421F',
  oliveDark: '#2B3218',
  lavender: '#DDD5EE',
  mist: '#EEE8F7',
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <PageFrame>
        <Header />
        <Hero />
        <WavyDivider topColor={c.olive} bottomColor={c.paper} />
        <MeetSection />
        <WavyDivider topColor={c.paper} bottomColor={c.lavender} />
        <JourneyTimeline />
        <PratinidhiCase />
        <EducadoCase />
        <WavyDivider topColor={c.paper} bottomColor={c.mist} />
        <DoesntFit />
        <WavyDivider topColor={c.mist} bottomColor={c.olive} />
        <Final />
      </PageFrame>
    </MotionConfig>
  )
}

export default App
