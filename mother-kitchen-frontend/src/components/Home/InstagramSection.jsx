import { ImInstagram } from 'react-icons/im'
import Button from '../custom/Button'
import { Containers, InstaImg, Squirrel } from '../../assets'
const InstagramSection = () => {
  return (
    <section className="md:px-24 md:pt-24">
      <div className="border-[6px] border-black border-r-[16px] border-b-[16px] rounded-2xl bg-[#EF3D69] text-white py-4 px-8">
        <div className="grid grid-cols-6 gap-10 font-lexend">
          <div className="icon col-span-2">
            <ImInstagram className="w-14 h-14 text-black" />
            <h2 className="py-5 text-4xl">
              <div className="tracking-tighter text-black font-semibold">Find us on</div>
              <div className="font-gluten font-black text-5xl mt-2 ">Instagram</div>
            </h2>
            <p className="font-semibold text-justify">
              &quot;Join our Instagram family to never miss a beat on what we&apos;re cooking up next! Get a
              behind-the-scenes look at the love and passion that goes into every Mother&apos;s Kitchen product, and see
              how we&apos;re bringing the warmth of mom&apos;s cooking to your table.&quot;
            </p>
            <Button className="mt-5 text-xl font-semibold">Explore</Button>
            <div className="grid grid-cols-2 relative">
              <div>
                <img src={Squirrel} alt="squirrel" />
              </div>
              <div className="flex justify-end items-end">
                <img src={Containers} alt="containers" className="absolute w-[150px] -right-10 -bottom-5" />
              </div>
            </div>
          </div>
          <div className="icon col-span-4 px-10">
            <img src={InstaImg} alt="instagrid" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
