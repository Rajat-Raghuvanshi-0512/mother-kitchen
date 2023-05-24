import { Bottle, Drop, FatFree, GirlBadge, Vegan } from '../../assets'

const nutritionData = [
  {
    image: Bottle,
    text: 'FREE OF ANYTHING ARTIFICIAL',
  },
  {
    image: Drop,
    text: 'No Preservatives',
  },
  {
    image: Vegan,
    text: 'Vegan & Plant based',
  },
  {
    image: FatFree,
    text: 'TRANS FAT FREE',
  },
]

const CircularDiv = ({ image, text, idx }) => {
  return (
    <div
      className={`absolute flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-white bg-[#FFD16E] p-2 before:absolute before:h-full before:w-full before:rounded-full before:border-black before:bg-black md:relative md:h-20 md:w-20 before:md:bg-transparent lg:h-28 lg:w-28 ${
        idx === 0
          ? 'left-5 top-5 before:-left-1 before:top-1 before:-z-10 before:scale-105'
          : idx === 1
          ? 'right-7 top-0 h-[100px] w-[100px] before:-right-1 before:top-1 before:-z-10 before:scale-105'
          : idx === 2
          ? 'bottom-7 left-7 h-[100px] w-[100px] before:-left-1 before:top-1 before:-z-10 before:scale-105'
          : idx === 3
          ? 'bottom-5 right-5 before:-right-1 before:top-1 before:-z-10 before:scale-105'
          : ''
      } `}
    >
      <img loading="lazy" src={image} alt="item" className="w-10 md:w-6 lg:w-10" />
      <p className="mt-1 w-16 break-words text-center font-gluten text-[10px] font-semibold leading-3 md:text-[7px] md:leading-[6px] lg:text-xs lg:leading-3">
        {text}
      </p>
    </div>
  )
}

const NutritionSm = () => {
  return (
    <section className="pb-10">
      <div className="clipped-bg relative flex items-center justify-center py-32">
        <div className="flex w-screen items-center justify-center ">
          <img loading="lazy" src={GirlBadge} alt="girl-badge" className="w-48" />
        </div>
        {nutritionData.map((item, idx) => (
          <CircularDiv image={item.image} idx={idx} text={item.text} key={item.text} />
        ))}
      </div>
    </section>
  )
}
const NutritionMd = () => {
  return (
    <section className="py-20">
      <div className="relative flex h-24 items-center justify-evenly border-4 border-l-0 border-r-0 bg-yellow-dark pl-52 shadow-md">
        <img loading="lazy" src={GirlBadge} alt="girl-badge" className="absolute -top-10 left-10 w-40" />
        {nutritionData.map((item) => (
          <CircularDiv image={item.image} text={item.text} key={item.text} />
        ))}
      </div>
      <div className="h-[6px] bg-black"></div>
    </section>
  )
}
const NutritionLg = () => {
  return (
    <section className="py-10 md:py-24 ">
      <div className="relative flex h-32 items-center justify-evenly border-4 border-l-0 border-r-0 bg-yellow-dark pl-64 shadow-md">
        <img loading="lazy" src={GirlBadge} alt="girl-badge" className="absolute -top-14 left-20 w-56" />
        {nutritionData.map((item) => (
          <CircularDiv image={item.image} text={item.text} key={item.text} />
        ))}
      </div>
      <div className="h-[6px] bg-black"></div>
    </section>
  )
}

const NutritionDetails = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <NutritionSm />
      </div>

      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <NutritionMd />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <NutritionLg />
      </div>
    </div>
  )
}

export default NutritionDetails
