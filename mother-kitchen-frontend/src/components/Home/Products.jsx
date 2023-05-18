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
    desc: 'Instant Preseasoned Green mint chutney',
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
]
const ProductsSm = () => {
  return (
    <>
      <section className="py-10 md:py-24">
        <div className="flex justify-center items-center">
          <img src={ProductsHeading} alt="heading" className="h-14 absolute -z-20" />
          <h3 className="font-gluten text-xl font-bold text-center text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-20 ml-3">
          <div className="flex gap-5 overflow-x-auto">
            {productsData.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className=" py-10 w-screen">
        <ProductsInfiniteScroll />
      </section>
    </>
  )
}
const ProductsLg = ({ productsRef, handleLeftClick, handleRightClick }) => {
  return (
    <>
      <section className="pb-24 pt-10 2xl:mx-52">
        <div className="flex justify-center items-center">
          <img src={ProductsHeading} alt="heading" className="h-24 absolute -z-20" />
          <h3 className="font-gluten text-3xl font-bold text-center text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-20">
          <div className="flex gap-20 px-20 mt-10 overflow-x-auto overflow-y-clip" ref={productsRef}>
            {productsData.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
            {/* Left Arrow */}
            <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
              <div className="z-50 text-black" onClick={handleLeftClick}>
                &#10092;
              </div>
            </div>
            {/* Right Arrow */}
            <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 2xl:-right-16 text-2xl rounded-full p-2  text-white cursor-pointer">
              <div className="z-50 text-black" onClick={handleRightClick}>
                &#10093;
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsInfiniteScroll />
    </>
  )
}

const Products = () => {
  const productsRef = useRef()
  const handleLeftClick = () => {
    productsRef.current.scrollBy(-440, 0)
  }
  const handleRightClick = () => {
    productsRef.current.scrollBy(440, 0)
  }

  return (
    <>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <ProductsSm />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <ProductsLg handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} productsRef={productsRef} />
      </div>
    </>
  )
}

export default Products
