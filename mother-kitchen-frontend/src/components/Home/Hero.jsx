import { Girl, HHLeft, HHRight, HeroLVec } from '../../assets'
import Button from '../custom/Button'

const Hero = () => {
  return (
    <div className="pl-28 flex">
      <div className="left-section flex-1 py-14">
        <div className="relative">
          <img src={HeroLVec} alt="vec" className="absolute w-[55%] -left-28 top-5 -z-10" />
          <img src={HHLeft} alt="elem" className="w-10 absolute -left-10 -top-7" />
          <h2 className="font-gluten text-6xl font-bold">
            <span className="text-red-base">Mindful</span> <br /> eating for <br /> well being.
          </h2>
          <img src={HHRight} alt="elem" className="w-10 absolute left-56 -top-9" />
        </div>
        <p className="font-lexend font-semibold mt-5">
          &ldquo;Bringing the warmth of mom&rsquo;s <br /> cooking to every kitchen, one <br /> delicious bite at a
          time.
        </p>
        <Button className="mt-5 flex-1">Shop Now</Button>
      </div>
      <div className="flex-1 items-start justify-end flex pt-4">
        <img src={Girl} alt="gitl" />
      </div>
    </div>
  )
}

export default Hero
