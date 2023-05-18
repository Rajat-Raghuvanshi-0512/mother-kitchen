import { Mission, AboutHero, Discover, Support } from '../components/About'
import { LastSection } from '../components'

const About = () => {
  return (
    <div className="2xl:mx-56">
      <AboutHero />
      <Mission />
      <Discover />
      <Support />
      <LastSection />
    </div>
  )
}

export default About
