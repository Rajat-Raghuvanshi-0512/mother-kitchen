import Button from '../custom/Button'
import { HiArrowNarrowRight } from 'react-icons/hi'

const KitchenCard = ({ largeHeading, smallHeading, image, color }) => {
  return (
    <div
      className={`relative rounded-3xl border-2 border-b-8 border-r-8 border-black md:border-4 md:border-b-[14px] md:border-r-[14px] ${color}`}
    >
      <div className="grid grid-cols-2 pl-3 pt-3 md:py-4">
        <div className="font-lexend text-sm font-bold leading-4 text-white md:text-lg md:leading-5">
          Mother’s Kitchen
        </div>
        {smallHeading && <p className="text-white ">{smallHeading} </p>}
      </div>
      <img
        loading="lazy"
        src={image}
        alt="kc1"
        className="mx-auto w-[80%] object-contain object-top px-10 pt-2 md:h-auto md:w-auto lg:py-1"
      />
      <div className="px-5 pb-4 pt-3 md:pb-10 md:pt-0">
        <p className="w-[60%] font-gluten text-base font-bold text-white md:text-xl lg:text-2xl">{largeHeading}</p>
        <Button
          className={
            'absolute bottom-3 right-3 flex items-center gap-2 !px-3 text-sm font-semibold md:bottom-5 md:right-5 md:text-lg lg:text-xl'
          }
        >
          Explore <HiArrowNarrowRight />
        </Button>
      </div>
    </div>
  )
}

export default KitchenCard
