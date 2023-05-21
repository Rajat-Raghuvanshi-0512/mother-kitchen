import {
  Shivani,
  Sunil,
  TeamHeading,
  bhavna,
  joshua,
  mrunalini,
  satyam,
  shifali,
  shrikumar,
  stuart,
} from '../../assets'
import BorderDiv from '../custom/BorderDiv'
import ImageBox from '../custom/ImageBox'
import TeamInfoCard from './TeamInfoCard'

const teamDetails = [
  {
    name: 'Joshua Morgolis',
    desc: 'Professor of Business Administration at Harvard Business School, Business Administration',
    image: joshua,
  },
  {
    name: 'Stuart Gates',
    desc: 'The Seasoned Grocer | College for the Distributive Trades Management. Ex Harrods. Over 30 years into food industry',
    image: stuart,
  },
  {
    name: 'Bhawna Agarwal',
    desc: 'Country Head HPE, CEO at NDTV Gadget360.com, Harvard Business School, Co-Founder of OYO',
    image: bhavna,
  },
  {
    name: 'Satyam Kumar',
    desc: 'Director & Head- City Group Global Markets India',
    image: satyam,
  },
  {
    name: 'Mrunalini Deshmukh',
    desc: 'Lawyer (22 Years Exp.) Experienced in Handling Most high-profile cases',
    image: mrunalini,
  },
  {
    name: 'Shrikumar Unnithan',
    desc: 'General Manager- BharatBenz & Mercedes Benz',
    image: shrikumar,
  },
  {
    name: 'Shifali Singh',
    desc: 'Director at RP-Sanjiv Goenka Group SVP – Operations & E commerce : Apparel Ex Vice President : International Brands at Flipkart',
    image: shifali,
  },
  {
    name: 'Shifali Sinha',
    desc: 'Director at RP-Sanjiv Goenka Group SVP – Operations & E commerce : Apparel Ex Vice President : International Brands at Flipkart',
    image: shifali,
  },
]

const TeamInfo = () => {
  return (
    <div>
      <div className="relative mx-auto w-[80%] rounded-t-3xl border-l-4 border-r-[12px] border-t-4 border-black bg-[#BB48CE] px-5 py-4 text-center font-lexend text-[8px] font-semibold text-white shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-t-2xl before:rounded-tl-2xl before:border-[3px] before:border-b-0 before:border-white md:px-20 md:text-[10px] md:text-sm">
        We are proud to introduce you to the members of our board, a group of dedicated individuals who share a passion
        for our mission and work tirelessly to advance it
      </div>
      <BorderDiv className="bg-[#D07D41] p-10">
        <div className="mt-5 flex justify-center">
          <img src={TeamHeading} alt="heading" className="absolute -z-10 -mt-2 h-10 md:-mt-5 md:h-20" />
          <h3 className="text-center font-lexend text-sm font-semibold text-white drop-shadow-3xl md:text-3xl">
            Executive Team
          </h3>
        </div>
        <div className="mx-auto mt-10 flex gap-7 md:w-[60vw] md:gap-36">
          <div className="flex flex-1 flex-col items-center p-8 font-gluten text-white">
            <ImageBox image={Shivani} />
            <h5 className="mt-4 text-center md:text-2xl">SHIVANI MALIK</h5>
            <p className="text-xs md:my-3 md:text-xl">Founder & CEO</p>
            <p className="text-center font-lexend  text-[6px] font-[100] md:text-sm">
              A successful entrepreneur having 21+ years of experience across verticals. Actively working with focused
              projects on women & child mentorship programs.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center p-8 font-gluten text-white">
            <ImageBox image={Sunil} />
            <h5 className="mt-4 text-center md:text-2xl">SUNIL CHAUHAN</h5>
            <p className="text-xs md:my-3 md:text-xl">CoFounder</p>
            <p className="text-center font-lexend text-[6px] font-[100] md:text-sm">
              A successful entrepreneur having 21+ years of experience across verticals. Actively working with focused
              projects on women & child mentorship programs.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-start">
          <img src={TeamHeading} alt="heading" className="absolute -z-10 -mt-3 h-11 md:-mt-5 md:h-20" />
          <h3 className="ml-10 text-center font-lexend text-sm font-semibold text-white drop-shadow-3xl md:ml-5 md:text-3xl">
            Advisory Board
          </h3>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-5 md:m-10 md:grid-cols-4 md:gap-x-20 md:gap-y-10">
          {teamDetails.map((teamMem) => {
            return <TeamInfoCard key={teamMem.name} {...teamMem} />
          })}
        </div>
      </BorderDiv>
    </div>
  )
}

export default TeamInfo
