import { useRef } from 'react'
import {
  Hazelnut,
  ProductItemSm1,
  ProductItemSm2,
  ProductItemSm3,
  ProductsHeading,
  product1,
  product2,
  product3,
} from '../../assets'
import ProductCard from './ProductCard'
import ProductsInfiniteScroll from './ProductsInfiniteScroll'
import { Slider } from 'infinite-react-carousel/lib'
const productsData = [
  {
    image: product1,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Green Mint Chutney',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-green-500',
    icon: ProductItemSm1,
  },
  {
    image: product2,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa Spread',
    desc: 'Loaded with the goodness of hazelnuts',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm2,
  },
  {
    image: product3,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Turmeric Almond & Saffron Booster',
    desc: 'Instant Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-[#ED4E4E]',
    icon: ProductItemSm3,
  },
  {
    image: Hazelnut,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa Sread',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-green-500',
    icon: ProductItemSm1,
  },
  {
    image: Hazelnut,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa pread',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm2,
  },
  {
    image: Hazelnut,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa ead',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm2,
  },
]
const ProductsSm = () => {
  return (
    <div className="w-screen overflow-clip pb-14">
      <section className="py-5 md:py-24">
        <div className="flex items-center justify-center">
          <img loading="lazy" src={ProductsHeading} alt="heading" className="absolute -z-20 h-14" />
          <h3 className="text-center font-gluten text-xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-10">
          <div className="products w-full">
            <Slider centerMode={true} centerPadding={70} shift={70} arrows={false} dots={true}>
              {productsData.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <ProductsInfiniteScroll />
    </div>
  )
}
const ProductsLg = ({ productsRef }) => {
  return (
    <>
      <section className="pb-24 pt-10 lg:mx-5 2xl:mx-36">
        <div className="flex items-center justify-center">
          <img loading="lazy" src={ProductsHeading} alt="heading" className="absolute -z-20 h-24" />
          <h3 className="text-center font-gluten text-3xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="products relative overflow-x-scroll pt-20 lg:px-10" ref={productsRef}>
          <Slider slidesToShow={3} dots={true} arrows={true} centerPadding={0} centerMode={true}>
            {productsData.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </Slider>
        </div>
      </section>

      <ProductsInfiniteScroll />
    </>
  )
}

const Products = () => {
  const productsRef = useRef()
  const handleLeftClick = () => {
    productsRef.current.scrollBy(-380, 0)
  }
  const handleRightClick = () => {
    productsRef.current.scrollBy(380, 0)
  }

  return (
    <>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <ProductsSm productsRef={productsRef} />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <ProductsLg handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} productsRef={productsRef} />
      </div>
    </>
  )
}

export default Products
