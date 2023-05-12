import { AdorableMealsImg, FamilyFlavoursImg, HomeCraftedImg, Nutrious, WholesomeImg } from '../../assets'

const scrollData = [
  {
    image: WholesomeImg,
    text: 'Wholesome',
  },
  {
    image: HomeCraftedImg,
    text: 'Home crafted',
  },
  {
    image: AdorableMealsImg,
    text: 'Adorable meals',
  },
  {
    image: FamilyFlavoursImg,
    text: 'Family flavors',
  },
  {
    image: Nutrious,
    text: 'Nutrious',
  },
]

const ProductsInfiniteScroll = () => {
  return (
    <section className="overflow-x-hidden w-screen hidden md:block">
      <div className="bg-yellow-dark h-14 md:h-20 absolute left-0 shadow-md flex animate-infinite">
        <div className="justify-center items-center flex ">
          {scrollData.map((item) => (
            <div className="flex items-center" key={item.text}>
              <img src={item.image} alt="logo" className="w-20 md:w-28" />
              <span className="font-gluten text-lg md:text-2xl font-bold px-10 even:text-white text-red-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div className="justify-center items-center flex ">
          {scrollData.map((item) => (
            <div className="flex items-center" key={item.text}>
              <img src={item.image} alt="logo" className="w-20 md:w-28" />
              <span className="font-gluten text-2xl font-bold px-10 even:text-white text-red-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsInfiniteScroll
