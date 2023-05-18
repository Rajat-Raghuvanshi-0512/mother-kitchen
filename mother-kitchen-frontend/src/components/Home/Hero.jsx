import { Girl, HHLeft, HHRight, HeroLVec } from '../../assets'
import { HeroBgSm } from '../../assets/mobile'
import Button from '../custom/Button'

const HeroSm = () => {
  return (
    <div className="flex flex-col">
      <div className="pb-10">
        <img src={HeroBgSm} alt="vec" className="absolute w-screen left-0 -z-10" />
        <div className="relative">
          <img src={HHLeft} alt="elem" className="w-8 absolute left-24 -top-4" />
          <h2 className="font-gluten text-3xl sm:text-7xl font-black mt-16 text-center">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img src={HHRight} alt="elem" className="w-8 absolute right-24 -top-7" />
        </div>
        <p className="font-gluten  text-sm text-center px-13">
          &ldquo;Bringing the warmth of mom&rsquo;s cooking to <br /> every kitchen, one delicious bite at a time.
        </p>
      </div>
      <div className=" items-start justify-end flex -mt-10">
        <img src={Girl} alt="gitl" />
      </div>
      <Button className="my-5 flex-1font-semibold mx-auto ">Scroll Down</Button>
    </div>
  )
}
const HeroMd = () => {
  return (
    <div className="pl-14 flex">
      <div className="left-section flex-1 py-14">
        <div className="relative">
          <img src={HeroLVec} alt="vec" className="absolute w-[55%] -left-28 top-5 -z-10" />
          <img src={HHLeft} alt="elem" className="w-10 absolute -left-10 -top-7" />
          <h2 className="font-gluten text-6xl font-bold">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img src={HHRight} alt="elem" className="w-10 absolute left-[17rem] -top-9" />
        </div>
        <p className="font-lexend  mt-5 text-lg">
          &ldquo;Bringing the warmth of mom&rsquo;s cooking to every kitchen, one delicious bite at a time.
        </p>
        <Button className="mt-5 flex-1font-semibold text-2xl !px-8">Shop Now</Button>
      </div>
      <div className="flex-1 items-start justify-end flex pt-4">
        <img src={Girl} alt="gitl" />
      </div>
    </div>
  )
}
const HeroLg = () => {
  return (
    <div className="pl-28 flex 2xl:px-[15rem]">
      <div className="left-section flex-1 py-14">
        <div className="relative">
          <img src={HeroLVec} alt="vec" className="absolute w-[55%] -left-28 top-5 -z-10" />
          <img src={HHLeft} alt="elem" className="w-10 absolute -left-10 -top-7" />
          <h2 className="font-gluten text-7xl font-bold">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img src={HHRight} alt="elem" className="w-10 absolute left-[17rem] -top-9" />
        </div>
        <p className="font-lexend  mt-5 text-2xl">
          &ldquo;Bringing the warmth of mom&rsquo;s <br /> cooking to every kitchen, one <br /> delicious bite at a
          time.
        </p>
        <Button className="mt-5 flex-1font-semibold text-2xl !px-8">Shop Now</Button>
      </div>
      <div className="flex-1 items-start justify-end flex pt-4">
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

      <div className="lg:hidden hidden md:block">
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
