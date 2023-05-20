import Button from '../custom/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'

const KitchenCard = ({ largeHeading, smallHeading, image, color }) => {
  return (
    <div className={`relative rounded-3xl border-4 border-b-[14px] border-r-[14px] border-black ${color}`}>
      <div className="grid grid-cols-2 py-4 pl-3">
        <div className="font-lexend text-lg font-bold text-white">Mother’s Kitchen</div>
        {smallHeading && <p className="text-white ">{smallHeading} </p>}
      </div>
      <img src={image} alt="kc1" className="px-10 py-5" />
      <div className="px-5 pb-10">
        <p className="w-[60%] font-gluten text-xl font-bold text-white lg:text-2xl">{largeHeading}</p>
        <Button className={'absolute bottom-5 right-5 flex items-center gap-2 text-lg lg:text-xl'}>
          Explore <HiArrowNarrowRight />
        </Button>
      </div>
    </div>
  )
}

export default KitchenCard
