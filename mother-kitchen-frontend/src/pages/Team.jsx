import { LastSection, TeamInfo } from '../components'

const Team = () => {
  return (
    <div className="md:px-10 px-5">
      <h2 className="text-3xl md:text-6xl font-gluten text-red-base font-black white-stroke text-center mt-5 mb-14 md:my-20 white-shadow">
        MEET OUR <span className="font-lexend text-white black-shadow">TEAM</span>
      </h2>
      <TeamInfo />
      <LastSection />
    </div>
  )
}

export default Team
