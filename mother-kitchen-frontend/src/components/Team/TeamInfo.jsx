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
    name: 'Shifali Singh',
    desc: 'Director at RP-Sanjiv Goenka Group SVP – Operations & E commerce : Apparel Ex Vice President : International Brands at Flipkart',
    image: shifali,
  },
]

const TeamInfo = () => {
  return (
    <div>
      <div className="w-[80%] relative text-center mx-auto md:px-20 px-5 font-lexend bg-[#BB48CE] py-4 border-black before:border-white before:border-b-0 before:border-[3px] before:absolute before:w-full before:h-full before:rounded-t-2xl before:rounded-tl-2xl border-t-4 border-l-4 border-r-[12px] rounded-t-3xl before:top-[0.8px] before:left-[0.8px] shadow-2xl text-[8px] md:text-[10px] md:text-base text-white font-semibold">
        We are proud to introduce you to the members of our board, a group of dedicated individuals who share a passion
        for our mission and work tirelessly to advance it
      </div>
      <BorderDiv className="bg-[#D07D41] p-10">
        <div className="flex justify-center mt-5">
          <img src={TeamHeading} alt="heading" className="h-10 md:h-20 -mt-2 md:-mt-5 absolute -z-10" />
          <h3 className="text-white font-semibold font-lexend text-center text-sm md:text-3xl drop-shadow-3xl">
            Executive Team
          </h3>
        </div>
        <div className="flex mt-20 mx-auto gap-7 md:gap-36 md:w-[60vw]">
          <div className="flex flex-1 flex-col items-center text-white font-gluten">
            <ImageBox image={Shivani} />
            <h5 className="md:text-2xl text-center mt-4">SHIVANI MALIK</h5>
            <p className="md:my-3 text-xs md:text-xl">Founder & CEO</p>
            <p className="font-[100] text-center  md:text-sm text-[6px] font-lexend">
              A successful entrepreneur having 21+ years of experience across verticals. Actively working with focused
              projects on women & child mentorship programs.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center text-white font-gluten">
            <ImageBox image={Sunil} />
            <h5 className="md:text-2xl text-center mt-4">SUNIL CHAUHAN</h5>
            <p className="md:my-3 md:text-xl text-xs">CoFounder</p>
            <p className="font-[100] text-center md:text-sm text-[6px] font-lexend">
              A successful entrepreneur having 21+ years of experience across verticals. Actively working with focused
              projects on women & child mentorship programs.
            </p>
          </div>
        </div>
        <div className="flex justify-start mt-10">
          <img src={TeamHeading} alt="heading" className="h-11 md:h-20 -mt-3 md:-mt-5 absolute -z-10" />
          <h3 className="text-white font-semibold font-lexend text-center text-sm md:text-3xl drop-shadow-3xl ml-10 md:ml-5">
            Advisory Board
          </h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-x-24 md:gap-y-10 md:m-10 mt-7">
          {teamDetails.map((teamMem) => {
            return <TeamInfoCard key={teamMem.name} {...teamMem} />
          })}
        </div>
      </BorderDiv>
    </div>
  )
}

export default TeamInfo
