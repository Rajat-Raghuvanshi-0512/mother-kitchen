import { HiArrowNarrowRight } from 'react-icons/hi'
import { Kitchen1 } from '../assets'
import Button from './custom/Button'

const KitchenMenu = () => {
  return (
    <section className="md:py-24 md:mt-20">
      <div className="border-4 border-r-[14px] border-b-[14px] border-black rounded-3xl bg-[#7B1238]">
        <h3 className="text-center text-2xl font-gluten font-bold py-5 leading-7 text-white">
          Droolworthy Recipes by <br /> Mother’s Kitchen
        </h3>
        <div className="grid grid-cols-3 pb-7">
          <div className="p-3 flex flex-col items-center">
            <img src={Kitchen1} alt="k1" className="w-[80%]" />
            <Button className="text-xl font-bold bg-red-950 flex items-center gap-2">
              Chicken Curry <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="p-3 flex flex-col items-center">
            <img src={Kitchen1} alt="k1" className="w-[80%]" />
            <Button className="text-xl font-bold bg-red-950 flex items-center gap-2">
              Chicken Curry <HiArrowNarrowRight />
            </Button>
          </div>
          <div className="p-3 flex flex-col items-center">
            <img src={Kitchen1} alt="k1" className="w-[80%]" />
            <Button className="text-xl font-bold bg-red-950 flex items-center gap-2">
              Chicken Curry <HiArrowNarrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KitchenMenu
