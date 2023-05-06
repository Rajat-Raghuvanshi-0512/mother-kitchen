import { LastSection, TeamInfo } from '../components'

const Team = () => {
  return (
    <div className="px-10">
      <h2 className="text-6xl font-gluten text-red-base font-black white-stroke text-center my-20 white-shadow">
        MEET OUR <span className="font-lexend text-white black-shadow">TEAM</span>
      </h2>
      <TeamInfo />
      <LastSection />
    </div>
  )
}

export default Team
