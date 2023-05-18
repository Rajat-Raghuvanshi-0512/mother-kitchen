import { useRef } from 'react'
import {
  BigWheel,
  Camera,
  CameraAndGirl,
  DiscoverBg1,
  Film,
  ProductsHeading,
  SmallWheel,
  Wiring,
  YellowBg,
} from '../../assets'
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
      <div className="relative">
        <img src={DiscoverBg1} alt="dbg" className="absolute -z-30" />
        <div className="flex justify-end md:pr-24 pt-5 md:pt-20">
          <div className="bg-[#039860] w-[65%] md:w-[50%] md:p-7 border-b-2 border-r-4 p-2 md:border-b-4 border-black/70 md:border-r-8 text-white text-center text-[7px] md:text-base font-lexend">
            Inspired by the image of the daughter of our founder and owner Shivani Malik, Inayat represents everything
            that we stand for - love, purity, and goodness
          </div>
        </div>
        <div className="shoot relative -mb-16 -top-16 md:-top-52 md:px-20 md:pr-52">
          <div className="md:block hidden">
            <img src={Camera} alt="camera" />
            <img
              src={Wiring}
              alt="wiring"
              className="absolute right-[1.5rem] top-[5.5rem] md:right-[18rem] md:top-[15.3rem] w-20 md:w-56"
            />
            <div className="rotation" ref={ref}>
              <img
                src={SmallWheel}
                alt="wiring"
                className="absolute  md:right-[415px] right-[4rem] top-[5.7rem] md:top-[16rem] w-[3.4rem] md:w-36 wheel_rotate"
              />
              <img
                src={BigWheel}
                alt="wiring"
                className="absolute md:right-[11rem] -right-[0.2rem] top-[5.5rem] md:top-[14rem] w-[4.5rem]  md:w-[15rem] wheel_rotate"
              />
            </div>
          </div>
          <div className="md:hidden">
            <img src={CameraAndGirl} alt="camera" />
          </div>
        </div>
      </div>
      <div className="relative h-full py-20">
        <img src={YellowBg} alt="bg" className="absolute md:-top-[20rem] top-0 -z-50 h-[70vh] md:h-auto md:w-screen" />
        <h2 className="white-stroke text-red-base text-3xl md:text-7xl font-gluten font-bold -rotate-6 md:-mt-40 md:pl-40 pl-10 my-5 md:mb-0">
          A Tale of <span className="text-black">Discovery!</span>
        </h2>
        <div className="flex flex-col items-end justify-end  md:pt-20">
          <img src={Film} alt="film" className="w-[90%] md:w-[80%]" />
          <p className="md:w-[40rem] w-[60vw] md:mr-40 text-center text-white font-lexend text-[9px] md:text-xl drop-shadow-small font-semibold -rotate-3">
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
