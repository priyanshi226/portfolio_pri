import { MotionConfig } from 'framer-motion'
import { PageFrame } from '@/components/portfolio/PageFrame'
import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'
import { MeetSection } from '@/components/portfolio/MeetSection'
import { JourneyTimeline } from '@/components/portfolio/JourneyTimeline'
import { OrchestrixStory } from '@/components/portfolio/OrchestrixStory'
import { ManyHats } from '@/components/portfolio/ManyHats'
import { GoToPerson } from '@/components/portfolio/GoToPerson'
import { ProjectsIntro } from '@/components/portfolio/ProjectsIntro'
import { PratinidhiCase } from '@/components/portfolio/PratinidhiCase'
import { EducadoCase } from '@/components/portfolio/EducadoCase'
import { DoesntFit } from '@/components/portfolio/DoesntFit'
import { Toolbox } from '@/components/portfolio/Toolbox'
import { Currently } from '@/components/portfolio/Currently'
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
        <WavyDivider topColor={c.lavender} bottomColor={c.olive} />
        <OrchestrixStory />
        <WavyDivider topColor={c.olive} bottomColor={c.paper} />
        <ManyHats />
        <WavyDivider topColor={c.paper} bottomColor={c.mist} />
        <GoToPerson />
        <WavyDivider topColor={c.mist} bottomColor={c.paper} />
        <ProjectsIntro />
        <PratinidhiCase />
        <WavyDivider topColor={c.oliveDark} bottomColor={c.paper} />
        <EducadoCase />
        <DoesntFit />
        <WavyDivider topColor={c.paper} bottomColor={c.mist} />
        <Toolbox />
        <WavyDivider topColor={c.mist} bottomColor={c.paper} />
        <Currently />
        <WavyDivider topColor={c.paper} bottomColor={c.olive} />
        <Final />
      </PageFrame>
    </MotionConfig>
  )
}

export default App
