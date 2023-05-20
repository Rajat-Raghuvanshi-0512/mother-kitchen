import { HiArrowNarrowRight } from 'react-icons/hi'
import { Kitchen1, kitchenMenu2, kitchenMenu3 } from '../../assets'
import Button from '../custom/Button'

const KithchenMenuSm = () => {
  return (
    <section className="py-24">
      <div className="overflow-clip rounded-xl border-4 border-b-8 border-r-8 border-black bg-[#7B1238]">
        <h3 className="py-5 text-center font-gluten font-bold leading-5 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div className="grid grid-cols-8 pb-7">
          <div className=" col-span-2 flex flex-col items-center justify-center">
            <img src={Kitchen1} alt="k1" className="relative -left-10 h-[7rem] w-[7rem] object-cover" />
            <Button className="hidden items-center gap-2 !bg-[#41041A] text-xs  font-bold hover:!bg-[#560c27]">
              Chicken Curry <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="col-span-4 flex flex-col items-center p-0">
            <img src={kitchenMenu2} alt="k1" className="w-[100%]" />
            <Button className="my-auto  !flex !items-center !justify-center gap-2 !bg-[#41041A]  !px-3 !py-1 text-[8px] font-bold hover:!bg-[#560c27]">
              <div className="my-auto">Dal Makhni</div> <HiArrowNarrowRight />
            </Button>
          </div>
          <div className=" col-span-2 flex flex-col items-center justify-center">
            <img src={kitchenMenu3} alt="k1" className=" relative -right-10 h-[7rem] w-[7rem] object-cover" />
            <Button className="hidden items-center gap-2 !bg-[#41041A] text-xs  font-bold hover:!bg-[#560c27]">
              Palak Paneer <HiArrowNarrowRight />
            </Button>
          </div>
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
