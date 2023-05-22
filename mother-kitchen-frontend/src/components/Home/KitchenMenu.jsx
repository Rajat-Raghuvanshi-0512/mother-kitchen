import { HiArrowNarrowRight } from 'react-icons/hi'
import { Kitchen1, kitchenMenu2, kitchenMenu3 } from '../../assets'
import Button from '../custom/Button'
import { Carousel } from 'react-responsive-carousel'

const renderCustomThumbs = () => {
  const thumbList = [1, 2, 3].map((item) => <div key={item} className=" h-[6px] w-3 rounded-full bg-white/40"></div>)

  return thumbList
}
const KithchenMenuSm = () => {
  return (
    <section className="py-20">
      <div className="overflow-clip rounded-xl border-4 border-b-8 border-r-8 border-black bg-[#7B1238]">
        <h3 className="py-5 text-center font-gluten font-bold leading-5 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div>
          <Carousel
            autoPlay
            autoFocus
            centerMode={true}
            centerSlidePercentage={60}
            infiniteLoop={true}
            showIndicators={false}
            showStatusBar={false}
            showStatus={false}
            renderThumbs={renderCustomThumbs}
          >
            <div className="  flex flex-col items-center justify-center">
              <img src={Kitchen1} alt="k1" className="w-full object-cover" />
              <Button className=" !flex !items-center !justify-center gap-2 !bg-[#41041A] text-xs  font-bold hover:!bg-[#560c27]">
                Chicken Curry <HiArrowNarrowRight />
              </Button>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <img src={kitchenMenu2} alt="k1" className="w-full object-cover" />
              <Button className="!flex !items-center !justify-center gap-2 !bg-[#41041A] text-xs font-bold hover:!bg-[#560c27]">
                Dal Makhni
                <HiArrowNarrowRight />
              </Button>
            </div>
            <div className="  flex flex-col items-center justify-center">
              <img src={kitchenMenu3} alt="k1" className="w-full object-cover" />
              <Button className=" !flex !items-center !justify-center gap-2 !bg-[#41041A] text-xs  font-bold hover:!bg-[#560c27]">
                Palak Paneer <HiArrowNarrowRight />
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
const KithchenMenuLg = () => {
  return (
    <section className="md:mt-20 md:py-24">
      <div className="rounded-3xl border-4 border-b-[14px] border-r-[14px] border-black bg-[#7B1238]">
        <h3 className="py-5 text-center font-gluten text-3xl font-bold leading-9 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div className="grid grid-cols-3 pb-7">
          <div className="flex flex-col items-center p-3">
            <img src={Kitchen1} alt="k1" className="w-[80%]" />
            <Button className="flex items-center gap-2 !bg-[#41041A] text-xl font-bold hover:!bg-[#560c27]">
              Chicken Curry <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="flex flex-col items-center p-3">
            <img src={kitchenMenu2} alt="k1" className="w-[80%]" />
            <Button className="flex items-center gap-2 !bg-[#41041A] text-xl font-bold hover:!bg-[#560c27]">
              Dal Makhni <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="flex flex-col items-center p-3">
            <img src={kitchenMenu3} alt="k1" className="w-[80%]" />
            <Button className="flex items-center gap-2 !bg-[#41041A] text-xl font-bold hover:!bg-[#560c27]">
              Palak Paneer <HiArrowNarrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const KitchenMenu = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <KithchenMenuSm />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <KithchenMenuLg />
      </div>
    </div>
  )
}

export default KitchenMenu
