import { Brand } from '../components/Brand'
import LastSection from '../components/LastSection'

const Brands = () => {
  return (
    <div className="2xl:mx-56">
      <h2 className="white-stroke white-shadow my-8 text-center font-gluten text-4xl font-black text-red-base md:my-20 md:text-6xl">
        OUR <span className="black-shadow font-lexend uppercase text-white">Brands</span>
      </h2>
      <Brand />
      <LastSection />
    </div>
  )
}

export default Brands
