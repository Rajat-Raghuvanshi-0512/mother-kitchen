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
    <section className="w-screen">
      <div className="animate-infinite flex h-12 bg-yellow-dark shadow-md md:h-20">
        <div className="flex items-center justify-center ">
          {scrollData.map((item, idx) => (
            <div className="flex w-[250px] items-center md:w-[400px]" key={item.text + idx}>
              <img src={item.image} alt="logo" className="w-20 md:w-28" />
              <span className="px-4 font-gluten text-base font-bold text-red-base even:text-white md:px-10 md:text-2xl">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center ">
          {scrollData.map((item, idx) => (
            <div className="flex w-[250px] items-center md:w-[400px]" key={item.text + idx}>
              <img src={item.image} alt="logo" className="w-20 md:w-28" />
              <span className="px-4 font-gluten text-base font-bold text-red-base even:text-white md:px-10 md:text-2xl">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsInfiniteScroll
