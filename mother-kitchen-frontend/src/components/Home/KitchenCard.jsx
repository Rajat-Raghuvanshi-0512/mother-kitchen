import Button from '../custom/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'

const KitchenCard = ({ largeHeading, smallHeading, image, color }) => {
  return (
    <div className={`border-4 border-r-[14px] relative border-b-[14px] border-black rounded-3xl ${color}`}>
      <div className="grid grid-cols-2 pl-3 py-4">
        <div className="text-white font-bold text-lg font-lexend">Mother’s Kitchen</div>
        {smallHeading && <p className="text-white ">{smallHeading} </p>}
      </div>
      <img src={image} alt="kc1" className="py-5 px-10" />
      <div className="px-5 pb-10">
        <p className="text-white font-gluten font-bold text-xl lg:text-2xl w-[60%]">{largeHeading}</p>
        <Button className={'absolute right-5 bottom-5 text-lg lg:text-xl flex items-center gap-2'}>
          Explore <HiArrowNarrowRight />
        </Button>
      </div>
    </div>
  )
}

export default KitchenCard
