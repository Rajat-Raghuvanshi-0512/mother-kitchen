import { HiArrowNarrowRight } from 'react-icons/hi'
import { Kitchen1, kitchenMenu2, kitchenMenu3 } from '../../assets'
import Button from '../custom/Button'

const KithchenMenuSm = () => {
  return (
    <section className="py-24">
      <div className="border-4 border-r-8 border-b-8 border-black rounded-xl bg-[#7B1238] overflow-clip">
        <h3 className="text-center font-gluten font-bold py-5 leading-5 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div className="grid grid-cols-8 pb-7">
          <div className=" flex col-span-2 flex-col justify-center items-center">
            <img src={Kitchen1} alt="k1" className="w-[7rem] h-[7rem] object-cover relative -left-10" />
            <Button className="font-bold text-xs hidden !bg-[#41041A] hover:!bg-[#560c27]  items-center gap-2">
              Chicken Curry <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="p-0 flex col-span-4 flex-col items-center">
            <img src={kitchenMenu2} alt="k1" className="w-[100%]" />
            <Button className="font-bold  text-[8px] !py-1 !px-3 !bg-[#41041A] !justify-center  hover:!bg-[#560c27] !flex !items-center gap-2 my-auto">
              <div className="my-auto">Dal Makhni</div> <HiArrowNarrowRight />
            </Button>
          </div>
          <div className=" flex col-span-2 justify-center flex-col items-center">
            <img src={kitchenMenu3} alt="k1" className=" w-[7rem] h-[7rem] object-cover relative -right-10" />
            <Button className="font-bold text-xs hidden !bg-[#41041A] hover:!bg-[#560c27]  items-center gap-2">
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
    <section className="md:py-24 md:mt-20">
      <div className="border-4 border-r-[14px] border-b-[14px] border-black rounded-3xl bg-[#7B1238]">
        <h3 className="text-center text-3xl font-gluten font-bold py-5 leading-9 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div className="grid grid-cols-3 pb-7">
          <div className="p-3 flex flex-col items-center">
            <img src={Kitchen1} alt="k1" className="w-[80%]" />
            <Button className="text-xl font-bold !bg-[#41041A] hover:!bg-[#560c27] flex items-center gap-2">
              Chicken Curry <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="p-3 flex flex-col items-center">
            <img src={kitchenMenu2} alt="k1" className="w-[80%]" />
            <Button className="text-xl font-bold !bg-[#41041A] hover:!bg-[#560c27] flex items-center gap-2">
              Dal Makhni <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="p-3 flex flex-col items-center">
            <img src={kitchenMenu3} alt="k1" className="w-[80%]" />
            <Button className="text-xl font-bold !bg-[#41041A] hover:!bg-[#560c27] flex items-center gap-2">
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
