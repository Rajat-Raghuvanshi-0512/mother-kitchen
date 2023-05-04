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
    <div className="bg-yellow-dark h-20 absolute left-0 shadow-md flex animate-infinite">
      <div className="justify-center items-center flex ">
        {scrollData.map((item) => (
          <div className="flex items-center" key={item.text}>
            <img src={item.image} alt="logo" className="w-28" />
            <span className="font-gluten text-2xl font-bold px-10 even:text-white text-red-base">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="justify-center items-center flex ">
        {scrollData.map((item) => (
          <div className="flex items-center" key={item.text}>
            <img src={item.image} alt="logo" className="w-28" />
            <span className="font-gluten text-2xl font-bold px-10 even:text-white text-red-base">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsInfiniteScroll
