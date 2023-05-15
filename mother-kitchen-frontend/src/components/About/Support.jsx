import { DancingWomen } from '../../assets'
import YellowDiv from '../custom/YellowDiv'

const Support = () => {
  return (
    <section className="px-5 md:px-10">
      <YellowDiv>
        <h2 className="text-2xl md:text-6xl text-red-base white-stroke font-gluten font-black uppercase text-center py-10">
          We support
        </h2>
        <div className="grid md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex items-center justify-center">
            <img src={DancingWomen} alt="women" className="w-full h-full" />
          </div>
          <div className="md:px-10">
            <p className="bg-[#FFDBA0] text-center rounded-lg mx-3 md:mx-0 md:rounded-2xl text-[8px] md:text-base p-4 md:p-14 font-lexend font-medium tracking-tighter shadow-md drop-shadow-sm">
              At Mother Kitchen, we firmly believe in the power of women and their invaluable contributions to society.
              We understand that women&apos;s empowerment is crucial for the growth and development of individuals,
              families, and communities. <br /> <br />
              That&apos;s why we support and promote women&apos;s empowerment in all aspects of our business. From our
              female-led team to our partnerships with women-owned businesses, we strive to create a supportive and
              inclusive environment for all women.
              <br /> <br />
              We&apos;re committed to using our platform to empower women and inspire positive change. Join us in our
              mission to promote gender equality and create a more equitable world for all.
            </p>
            <div className="text-right py-5 pr-3 text-sm md:text-base md:font-bold md:text-white">
              - Mother&apos;s Kitchen
            </div>
          </div>
        </div>
      </YellowDiv>
    </section>
  )
}

export default Support
