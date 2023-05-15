import { useRef } from 'react'
import { BigWheel, Camera, DiscoverBg1, Film, ProductsHeading, SmallWheel, Wiring, YellowBg } from '../../assets'
import DiscoveryInfo from './DiscoveryInfo'

const Discover = () => {
  const ref = useRef()
  return (
    <section className="py-20">
      <div className="flex justify-center ">
        <img src={ProductsHeading} alt="heading" className="h-14  md:h-24 absolute -z-20 mt-6 md:mt-10" />
        <h2 className="text-[#790000] text-3xl md:text-5xl font-gluten font-black text-center md:leading-[60px]">
          HOW?
          <br /> WE DISCOVERED THE <br /> <span className="text-white font-lexend drop-shadow-3xl">MASCOT</span>
        </h2>
      </div>
      <div className="relative h-fit">
        <img src={DiscoverBg1} alt="dbg" className="absolute -z-30" />
        <div className="flex justify-end pr-24 py-20">
          <div className="bg-[#039860] md:w-[50%] md:p-7 border-b-4 border-black/70 border-r-8 text-white text-center font-lexend">
            Inspired by the image of the daughter of our founder and owner Shivani Malik, Inayat represents everything
            that we stand for - love, purity, and goodness
          </div>
        </div>
        <div className="shoot relative -top-52 px-20 pr-52">
          <img src={Camera} alt="camera" />
          <img src={Wiring} alt="wiring" className="absolute right-[18rem] top-[15.3rem] w-56" />
          <div className="rotation" ref={ref}>
            <img src={SmallWheel} alt="wiring" className="absolute right-[415px] top-[16rem] w-36 wheel_rotate" />
            <img src={BigWheel} alt="wiring" className="absolute right-[11rem] top-[14rem] w-[15rem] wheel_rotate" />
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <img src={YellowBg} alt="bg" className="absolute -top-[20rem] -z-50 w-screen" />
        <h2 className="white-stroke text-red-base md:text-7xl font-gluten font-bold -rotate-6 -mt-40 pl-40">
          A Tale of <span className="text-black">Discovery!</span>
        </h2>
        <div className="flex flex-col items-end justify-end pt-20">
          <img src={Film} alt="film" className="w-[80%]" />
          <p className="w-[30rem] mr-40 text-center text-white font-lexend text-sm drop-shadow-small font-semibold -rotate-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue vel turpis vehicula consequat.
            Morbi consequat lacus et nulla elementum auctor.
          </p>
        </div>
      </div>
      <DiscoveryInfo />
    </section>
  )
}

export default Discover
