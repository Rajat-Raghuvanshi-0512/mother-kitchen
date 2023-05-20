import { LastSection, TeamInfo } from '../components'

const Team = () => {
  return (
    <div className="px-5 md:px-10 2xl:mx-56">
      <h2 className="white-stroke white-shadow mb-14 mt-5 text-center font-gluten text-2xl font-black text-red-base md:my-20 md:text-6xl">
        MEET OUR <span className="black-shadow font-lexend text-white">TEAM</span>
      </h2>
      <TeamInfo />
      <LastSection />
    </div>
  )
}

export default Team
