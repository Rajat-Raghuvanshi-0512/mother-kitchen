import { Girl, HHLeft, HHRight, HeroLVec } from '../../assets'
import { HeroBgSm } from '../../assets/mobile'
import Button from '../custom/Button'

const HeroSm = () => {
  return (
    <div className="flex flex-col">
      <div className="pb-10">
        <img src={HeroBgSm} alt="vec" className="absolute left-0 -z-10 w-screen" />
        <div className="relative">
          <img src={HHLeft} alt="elem" className="absolute -top-4 left-24 w-8" />
          <h2 className="mt-16 text-center font-gluten text-3xl font-black sm:text-7xl">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img src={HHRight} alt="elem" className="absolute -top-7 right-24 w-8" />
        </div>
        <p className="px-13  text-center font-gluten text-sm">
          &ldquo;Bringing the warmth of mom&rsquo;s cooking to <br /> every kitchen, one delicious bite at a time.
        </p>
      </div>
      <div className=" -mt-10 flex items-start justify-end">
        <img src={Girl} alt="gitl" />
      </div>
      <Button className="flex-1font-semibold mx-auto my-5 ">Scroll Down</Button>
    </div>
  )
}
const HeroMd = () => {
  return (
    <div className="flex pl-14">
      <div className="left-section flex-1 py-14">
        <div className="relative">
          <img src={HeroLVec} alt="vec" className="absolute -left-28 top-5 -z-10 w-[55%]" />
          <img src={HHLeft} alt="elem" className="absolute -left-10 -top-7 w-10" />
          <h2 className="font-gluten text-6xl font-bold">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img src={HHRight} alt="elem" className="absolute -top-9 left-[17rem] w-10" />
        </div>
        <p className="mt-5  font-lexend text-lg">
          &ldquo;Bringing the warmth of mom&rsquo;s cooking to every kitchen, one delicious bite at a time.
        </p>
        <Button className="flex-1font-semibold mt-5 !px-8 text-2xl">Shop Now</Button>
      </div>
      <div className="flex flex-1 items-start justify-end pt-4">
        <img src={Girl} alt="gitl" />
      </div>
    </div>
  )
}
const HeroLg = () => {
  return (
    <div className="flex pl-28 2xl:px-[15rem]">
      <div className="left-section flex-1 py-14">
        <div className="relative">
          <img src={HeroLVec} alt="vec" className="absolute -left-28 top-5 -z-10 w-[55%]" />
          <img src={HHLeft} alt="elem" className="absolute -left-10 -top-7 w-10" />
          <h2 className="font-gluten text-7xl font-bold">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img src={HHRight} alt="elem" className="absolute -top-9 left-[17rem] w-10" />
        </div>
        <p className="mt-5  font-lexend text-2xl">
          &ldquo;Bringing the warmth of mom&rsquo;s <br /> cooking to every kitchen, one <br /> delicious bite at a
          time.
        </p>
        <Button className="flex-1font-semibold mt-5 !px-8 text-2xl">Shop Now</Button>
      </div>
      <div className="flex flex-1 items-start justify-end pt-4">
        <img src={Girl} alt="gitl" />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <HeroSm />
      </div>

      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <HeroMd />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <HeroLg />
      </div>
    </div>
  )
}

export default Hero
