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
      className={`border-4 border-white rounded-full w-28 h-28 bg-[#FFD16E] flex justify-center items-center flex-col p-2 absolute md:relative ${
        idx === 0
          ? 'top-5 left-5'
          : idx === 1
          ? 'top-7 right-7 scale-75'
          : idx === 2
          ? 'bottom-7 left-7 scale-75'
          : idx === 3
          ? 'bottom-5 right-5'
          : ''
      } `}
    >
      <img src={image} alt="item" className="w-10" />
      <p className="text-xs font-gluten text-center font-semibold leading-3 mt-1">{text}</p>
    </div>
  )
}

const NutritionSm = () => {
  return (
    <section className="pb-10">
      <div className="flex items-center justify-center py-32 relative clipped-bg">
        <div className="flex justify-center items-center w-screen ">
          <img src={GirlBadge} alt="girl-badge" className="w-48" />
        </div>
        {nutritionData.map((item, idx) => (
          <CircularDiv image={item.image} idx={idx} text={item.text} key={item.text} />
        ))}
      </div>
    </section>
  )
}
const NutritionLg = () => {
  return (
    <section className="py-10 md:py-24 ">
      <div className="bg-yellow-dark h-32 relative border-4 border-l-0 border-r-0 shadow-md flex justify-evenly items-center pl-64">
        <img src={GirlBadge} alt="girl-badge" className="w-56 absolute -top-14 left-20" />
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

      <div className="hidden md:block">
        {/*Large Screen*/}
        <NutritionLg />
      </div>
    </div>
  )
}

export default NutritionDetails
