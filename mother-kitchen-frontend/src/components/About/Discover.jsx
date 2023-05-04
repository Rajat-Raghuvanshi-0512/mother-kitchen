import { DiscoverBg1, ProductsHeading } from '../../assets'

const Discover = () => {
  return (
    <section className="py-20">
      <div className="flex justify-center ">
        <img src={ProductsHeading} alt="heading" className="h-24 absolute -z-20 mt-10" />
        <h2 className="text-[#790000] text-5xl font-gluten font-black text-center leading-[60px]">
          HOW?
          <br /> WE DISCOVERED THE <br /> <span className="text-white font-lexend drop-shadow-3xl">MASCOT</span>
        </h2>
      </div>
      <div className="relative">
        <img src={DiscoverBg1} alt="dbg" className="absolute -z-30" />
        <div className="flex justify-end pr-24 py-20">
          <div className="bg-[#039860] w-[50%] p-7 border-b-4 border-black/70 border-r-8 text-white text-center font-lexend">
            Inspired by the image of the daughter of our founder and owner Shivani Malik, Inayat represents everything
            that we stand for - love, purity, and goodness
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover
