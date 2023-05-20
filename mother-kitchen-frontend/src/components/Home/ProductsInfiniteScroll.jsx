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
    <section className="hidden w-screen overflow-x-hidden md:block">
      <div className="animate-infinite absolute left-0 flex h-14 bg-yellow-dark shadow-md md:h-20">
        <div className="flex items-center justify-center ">
          {scrollData.map((item) => (
            <div className="flex items-center" key={item.text}>
              <img src={item.image} alt="logo" className="w-20 md:w-28" />
              <span className="px-10 font-gluten text-lg font-bold text-red-base even:text-white md:text-2xl">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center ">
          {scrollData.map((item) => (
            <div className="flex items-center" key={item.text}>
              <img src={item.image} alt="logo" className="w-20 md:w-28" />
              <span className="px-10 font-gluten text-2xl font-bold text-red-base even:text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsInfiniteScroll
