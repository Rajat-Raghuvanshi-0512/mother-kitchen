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

const CircularDiv = ({ image, text }) => {
  return (
    <div className="border-4 border-white rounded-full w-28 h-28 bg-yellow-base flex justify-center items-center flex-col p-2">
      <img src={image} alt="item" className="w-10" />
      <p className="text-xs font-gluten text-center font-semibold leading-3 mt-1">{text}</p>
    </div>
  )
}

const NutritionDetails = () => {
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

export default NutritionDetails
