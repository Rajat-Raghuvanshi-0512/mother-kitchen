import { Brand } from '../components/Brand'
import LastSection from '../components/LastSection'

const Brands = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-gluten text-red-base font-black white-stroke text-center my-8 md:my-20 white-shadow">
        OUR <span className="font-lexend text-white black-shadow uppercase">Brands</span>
      </h2>
      <Brand />
      <LastSection />
    </div>
  )
}

export default Brands
